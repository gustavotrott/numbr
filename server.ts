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
import Big from 'big.js'
import type {CurrencyRates} from './currencies'
import type {Markup} from './markup'
import type {Varname} from './parser/variables'
import type {Result} from './results'

type HighlightSegment = {
  start: number
  end: number
  tag: string
}

type EvaluatedLine = {
  expression: string
  result: string
  kind: string
  warnings: { start: number, end: number, message: string }[]
  highlight: HighlightSegment[]
}

type ResultsModule = typeof import('./results')
type NodesModule = typeof import('./nodes')
type ParserModule = typeof import('./parser/parser')
type LexModule = typeof import('./parser/lex')
type VariablesModule = typeof import('./parser/variables')

type Runtime = {
  lex: LexModule['lex']
  parse: ParserModule['parse']
  Header: ResultsModule['Header']
  Nothing: ResultsModule['Nothing']
  Numbr: ResultsModule['Numbr']
  Percent: ResultsModule['Percent']
  Sum: NodesModule['Sum']
  Assignment: NodesModule['Assignment']
  updateVars: VariablesModule['updateVars']
  tokenToVariableName: VariablesModule['tokenToVariableName']
}

const nodeRequire = createRequire(__filename) as NodeJS.Require
const appRoot = resolve(__dirname)

function clearModule(modulePath: string) {
  try {
    delete nodeRequire.cache[nodeRequire.resolve(modulePath)]
  } catch {
    // Ignore modules that were not loaded yet.
  }
}

function loadRuntime(): Runtime {
  const modulesToClear = [
    './parser/lex',
    './parser/parser',
    './parser/variables',
    './nodes',
    './results',
  ]
  for (const modulePath of modulesToClear) {
    clearModule(modulePath)
  }

  const lexModule = nodeRequire('./parser/lex') as LexModule
  const parserModule = nodeRequire('./parser/parser') as ParserModule
  const variablesModule = nodeRequire('./parser/variables') as VariablesModule
  const nodesModule = nodeRequire('./nodes') as NodesModule
  const resultsModule = nodeRequire('./results') as ResultsModule

  return {
    lex: lexModule.lex,
    parse: parserModule.parse,
    Header: resultsModule.Header,
    Nothing: resultsModule.Nothing,
    Numbr: resultsModule.Numbr,
    Percent: resultsModule.Percent,
    Sum: nodesModule.Sum,
    Assignment: nodesModule.Assignment,
    updateVars: variablesModule.updateVars,
    tokenToVariableName: variablesModule.tokenToVariableName,
  }
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

type SSEClient = ServerResponse

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
      // Ignore paths we cannot watch.
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
    // Ignore watcher errors for individual files.
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
        // File may have been removed; ignore.
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
    // Ignore traversal errors.
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

  if (lower.endsWith(`${join('public', 'index.html').toLowerCase()}`)) {
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

const port = parseInt(process.env.PORT || '3000', 10)
const defaultRates: CurrencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 1.23,
  RUB: 0.013,
  THB: 0.027,
  BTC: 60000,
  ETH: 3000,
} as CurrencyRates

function formatWithGrouping(value: Big, decimals = 2): string {
  const rounded = value.round(decimals)
  const fixed = rounded.toFixed(decimals)
  const negative = fixed.startsWith('-')
  const unsigned = negative ? fixed.slice(1) : fixed
  const [integer, fraction] = unsigned.split('.')
  const grouped = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const rebuilt = fraction != undefined ? `${grouped}.${fraction}` : grouped
  return negative ? `-${rebuilt}` : rebuilt
}

function formatResult(result: Result): { text: string, kind: string } {
  const kind = (result as any)?.kind
  if (kind === 'numbr') {
    const value = (result as any).value as Big
    const currency = (result as any).currency as string | undefined
    const formatted = formatWithGrouping(value, 2)
    return {
      text: currency ? `${formatted} ${currency}` : formatted,
      kind: 'numbr',
    }
  }
  if (kind === 'percent') {
    const value = (result as any).value as Big
    return {
      text: `${formatWithGrouping(value, 2)}%`,
      kind: 'percent',
    }
  }
  if (kind === 'header') {
    return {
      text: (result as any).title ?? '',
      kind: 'header',
    }
  }
  if (kind === 'nil') {
    return {
      text: '',
      kind: 'nothing',
    }
  }
  return {
    text: '',
    kind: typeof kind === 'string' ? kind : 'unknown',
  }
}

function buildHighlightSegments(text: string, markup?: Markup): HighlightSegment[] {
  if (!markup || markup.length === 0 || text.length === 0) {
    return []
  }
  const mask: (string | undefined)[] = new Array(text.length)
  for (let [start, end, tag] of markup) {
    if (start >= end) continue
    const boundedStart = Math.max(0, Math.min(text.length, start))
    const boundedEnd = Math.max(boundedStart, Math.min(text.length, end))
    for (let i = boundedStart; i < boundedEnd; i++) {
      if (!mask[i]) mask[i] = tag
    }
  }
  const segments: HighlightSegment[] = []
  let index = 0
  while (index < text.length) {
    const tag = mask[index]
    if (!tag) {
      index++
      continue
    }
    let end = index + 1
    while (end < text.length && mask[end] === tag) {
      end++
    }
    segments.push({start: index, end, tag})
    index = end
  }
  return segments
}

function evaluateInput(text: string): EvaluatedLine[] {
  ensureRuntimeFresh()
  const {
    Header,
    Nothing,
    Sum,
    Assignment,
    lex: lexFn,
    parse: parseFn,
    updateVars: updateVarsFn,
    tokenToVariableName: tokenToVariableNameFn,
  } = runtime

  const answers: Result[] = []
  const lines = text.split(/\r?\n/)
  const knownVars: Varname[] = []
  const scope: Record<string, Result> = Object.create(null)
  const ABSENT = Symbol('absent')

  function withScope<T>(fn: () => T): T {
    const names = Object.keys(scope)
    const previous = new Map<string, any>()
    for (const name of names) {
      if (Object.prototype.hasOwnProperty.call(globalThis, name)) {
        previous.set(name, (globalThis as any)[name])
      } else {
        previous.set(name, ABSENT)
      }
      ;(globalThis as any)[name] = scope[name]
    }
    try {
      return fn()
    } finally {
      for (const name of names) {
        const original = previous.get(name)
        if (original === ABSENT) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete (globalThis as any)[name]
        } else {
          (globalThis as any)[name] = original
        }
      }
    }
  }

  return lines.map((expression, lineIndex) => {
    const trimmed = expression.trim()

    if (trimmed.startsWith('#')) {
      const title = trimmed.replace(/^#+\s*/, '')
      const header = new Header(title)
      answers.push(header)
      return {
        expression,
        result: title,
        kind: 'header',
        warnings: [],
        highlight: expression.length > 0 ? [{start: 0, end: expression.length, tag: 'header'}] : [],
      }
    }

    if (trimmed.startsWith(':')) {
      const desc = trimmed.replace(/^:\s*/, '')
      answers.push(new Nothing())
      return {
        expression,
        result: desc,
        kind: 'description',
        warnings: [],
        highlight: expression.length > 0 ? [{start: 0, end: expression.length, tag: 'description'}] : [],
      }
    }

    if (trimmed.length == 0) {
      answers.push(new Nothing())
      return {
        expression,
        result: '',
        kind: 'nothing',
        warnings: [],
        highlight: [],
      }
    }

    try {
      const [node, warnings] = parseFn(lexFn(expression, knownVars))
      const isTotal = node instanceof Sum
      const result = withScope(() =>
        node.evaluate({
          rates: defaultRates,
          answers,
          line: lineIndex,
        })
      )
      answers.push(result)
      updateVarsFn(knownVars, node)
      if (node instanceof Assignment) {
        const name = tokenToVariableNameFn(node.variable)
        scope[name] = result
      }
      const formatted = formatResult(result)
      const highlight = buildHighlightSegments(expression, node.highlight())
      return {
        expression,
        result: formatted.text,
        kind: isTotal ? 'total' : formatted.kind,
        warnings,
        highlight,
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      answers.push(new Nothing())
      return {
        expression,
        result: `Error: ${message}`,
        kind: 'error',
        warnings: [],
        highlight: [],
      }
    }
  })
}

function handleEvents(req: IncomingMessage, res: ServerResponse) {
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
  req.on('close', () => {
    clearInterval(heartbeat)
    clients.delete(res)
  })
}

function sendJson(res: ServerResponse, status: number, body: any) {
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
      const lines = evaluateInput(payload.text)
      sendJson(res, 200, {lines})
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Invalid JSON payload.'
      sendJson(res, 400, {error: message})
    }
  })
}

const host = process.env.HOST || '127.0.0.1'

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
