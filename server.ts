import {createServer, IncomingMessage, ServerResponse} from 'http'
import {createRequire} from 'module'
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  watch as fsWatch,
} from 'fs'
import {join, relative, resolve} from 'path'
import type {FormatKey} from './runtime'

type RuntimeModule = typeof import('./runtime')

type SSEClient = ServerResponse

const nodeRequire = createRequire(__filename) as NodeJS.Require
const appRoot = resolve(__dirname)

function clearModule(modulePath: string) {
  try {
    delete nodeRequire.cache[nodeRequire.resolve(modulePath)]
  } catch {
    // ignore
  }
}

function loadRuntime(): RuntimeModule {
  const modulesToClear = [
    './runtime',
    './parser/lex',
    './parser/parser',
    './parser/variables',
    './nodes',
    './results',
  ]
  for (const modulePath of modulesToClear) {
    clearModule(modulePath)
  }
  return nodeRequire('./runtime') as RuntimeModule
}

function loadIndexHtml(): string {
  return readFileSync(resolve(__dirname, 'public/index.html'), 'utf-8')
}

let runtime = loadRuntime()
let needsRuntimeReload = false
let indexHtml = loadIndexHtml()

function ensureRuntimeFresh() {
  if (needsRuntimeReload) {
    runtime = loadRuntime()
    needsRuntimeReload = false
  }
}

const clients = new Set<SSEClient>()
const watchers: ReturnType<typeof fsWatch>[] = []
const watchedDirs = new Set<string>()
const watchedFiles = new Set<string>()

const watchTargets = [
  'apply.ts',
  'currencies.ts',
  'data',
  'markup.ts',
  'nodes.ts',
  'operators.ts',
  'parser',
  'runtime.ts',
  'public',
  'results.ts',
]

const publicIndexSuffix = join('public', 'index.html').toLowerCase()

setupWatchers()

function setupWatchers() {
  for (const target of watchTargets) {
    const full = resolve(__dirname, target)
    if (!existsSync(full)) continue
    try {
      const stats = statSync(full)
      if (stats.isDirectory()) {
        watchDirectory(full)
      } else if (stats.isFile()) {
        watchFile(full)
      }
    } catch {
      // ignore paths we cannot watch
    }
  }
}

function watchFile(file: string) {
  if (watchedFiles.has(file)) return
  watchedFiles.add(file)
  try {
    const watcher = fsWatch(file, {persistent: true}, () => handleFilesystemChange(file))
    watchers.push(watcher)
  } catch {
    // ignore watcher errors
  }
}

function watchDirectory(dir: string) {
  if (watchedDirs.has(dir)) return
  watchedDirs.add(dir)
  try {
    const watcher = fsWatch(dir, {persistent: true}, (_event, filename) => {
      if (!filename) return
      const fullPath = join(dir, filename.toString())
      handleFilesystemChange(fullPath)
      try {
        const stats = statSync(fullPath)
        if (stats.isDirectory()) {
          watchDirectory(fullPath)
        }
      } catch {
        // ignore removed entries
      }
    })
    watchers.push(watcher)
  } catch {
    return
  }

  try {
    for (const entry of readdirSync(dir, {withFileTypes: true})) {
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
        watchDirectory(join(dir, entry.name))
      }
    }
  } catch {
    // ignore traversal issues
  }
}

function handleFilesystemChange(fullPath: string) {
  const relativePath = relative(appRoot, fullPath)
  if (!relativePath || relativePath.startsWith('node_modules')) return

  const lower = fullPath.toLowerCase()
  const interestingExt = ['.ts', '.js', '.json', '.html', '.css']
  const ext = interestingExt.find(ext => lower.endsWith(ext))
  if (!ext) return

  if (ext === '.ts' || ext === '.js' || ext === '.json') {
    needsRuntimeReload = true
  }

  if (lower.endsWith(publicIndexSuffix)) {
    indexHtml = loadIndexHtml()
  }

  broadcastChange({type: 'change', path: relativePath})
}

function broadcastChange(payload: Record<string, unknown>) {
  const data = `data: ${JSON.stringify(payload)}\n\n`
  for (const client of clients) {
    try {
      client.write(data)
    } catch {
      clients.delete(client)
    }
  }
}

function handleEvents(_req: IncomingMessage, res: ServerResponse) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  })
  res.write(`data: ${JSON.stringify({type: 'connected'})}\n\n`)

  const heartbeat = setInterval(() => {
    try {
      res.write(':\n\n')
    } catch {
      clearInterval(heartbeat)
    }
  }, 15000)

  clients.add(res)
  res.on('close', () => {
    clearInterval(heartbeat)
    clients.delete(res)
  })
}

function sendJson(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(body))
}

function handleEvaluate(req: IncomingMessage, res: ServerResponse) {
  let body = ''
  req.on('data', chunk => {
    body += chunk
    if (body.length > 1e6) req.destroy()
  })
  req.on('end', () => {
    try {
      const payload = body ? JSON.parse(body) : {}
      if (typeof payload.text !== 'string') {
        sendJson(res, 400, {error: 'The request body must include a string `text` property.'})
        return
      }
      ensureRuntimeFresh()
      const formatKey: FormatKey = typeof payload.format === 'string' && payload.format in runtime.formatPresets
        ? payload.format
        : runtime.defaultFormatKey
      const lines = runtime.evaluateText(payload.text, {
        formatKey,
        rates: runtime.defaultRates,
      })
      sendJson(res, 200, {lines})
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Invalid JSON payload.'
      sendJson(res, 400, {error: message})
    }
  })
}

const host = process.env.HOST || '127.0.0.1'
const port = parseInt(process.env.PORT || '3000', 10)

createServer((req, res) => {
  if (!req.url) {
    res.statusCode = 400
    res.end('Bad Request')
    return
  }

  if (req.method === 'GET' && req.url === '/events') {
    handleEvents(req, res)
    return
  }

  if (req.method === 'GET' && (req.url === '/' || req.url.startsWith('/index.html'))) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(indexHtml)
    return
  }

  if (req.method === 'POST' && req.url === '/evaluate') {
    handleEvaluate(req, res)
    return
  }

  res.statusCode = 404
  res.end('Not Found')
}).listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(`Numbr playground running at http://${host}:${port}`)
})

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)

function cleanup() {
  for (const watcher of watchers) {
    watcher.close()
  }
  clients.clear()
  process.exit(0)
}
