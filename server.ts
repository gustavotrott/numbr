import {createServer, IncomingMessage, ServerResponse} from 'http'
import {readFileSync} from 'fs'
import {resolve} from 'path'
import {CurrencyRates} from './currencies'
import {lex} from './parser/lex'
import {parse} from './parser/parser'
import {Header, Nothing, Numbr, Percent, Result} from './results'
import {Assignment, Sum} from './nodes'
import {Varname, tokenToVariableName, updateVars} from './parser/variables'

type EvaluatedLine = {
  expression: string
  result: string
  kind: string
  warnings: { start: number, end: number, message: string }[]
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

const indexHtml = readFileSync(resolve(__dirname, 'public/index.html'), 'utf-8')

function formatResult(result: Result): { text: string, kind: string } {
  if (result instanceof Numbr) {
    const value = result.value.toString()
    return {
      text: result.currency ? `${value} ${result.currency}` : value,
      kind: 'numbr',
    }
  }
  if (result instanceof Percent) {
    return {
      text: `${result.value.toString()}%`,
      kind: 'percent',
    }
  }
  if (result instanceof Header) {
    return {
      text: result.title,
      kind: 'header',
    }
  }
  if (result instanceof Nothing) {
    return {
      text: '',
      kind: 'nothing',
    }
  }
  return {
    text: '',
    kind: 'unknown',
  }
}

function evaluateInput(text: string): EvaluatedLine[] {
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
      }
    }

    if (trimmed.length == 0) {
      answers.push(new Nothing())
      return {
        expression,
        result: '',
        kind: 'nothing',
        warnings: [],
      }
    }

    try {
      const [node, warnings] = parse(lex(expression, knownVars))
      const isTotal = node instanceof Sum
      const result = withScope(() =>
        node.evaluate({
          rates: defaultRates,
          answers,
          line: lineIndex,
        })
      )
      answers.push(result)
      updateVars(knownVars, node)
      if (node instanceof Assignment) {
        const name = tokenToVariableName(node.variable)
        scope[name] = result
      }
      const formatted = formatResult(result)
      return {
        expression,
        result: formatted.text,
        kind: isTotal ? 'total' : formatted.kind,
        warnings,
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      answers.push(new Nothing())
      return {
        expression,
        result: `Error: ${message}`,
        kind: 'error',
        warnings: [],
      }
    }
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
