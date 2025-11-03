import Big from 'big.js'
import {lex} from './parser/lex'
import {parse} from './parser/parser'
import {updateVars, tokenToVariableName, Varname} from './parser/variables'
import {Sum, Assignment} from './nodes'
import {Header, Nothing, Result} from './results'
import type {Markup} from './markup'
import type {CurrencyRates} from './currencies'

export type HighlightSegment = {
  start: number
  end: number
  tag: string
}

export type EvaluatedLine = {
  expression: string
  result: string
  kind: string
  warnings: { start: number, end: number, message: string }[]
  highlight: HighlightSegment[]
}

export type FormatKey = 'dot-thousand' | 'comma-decimal'

export type FormatConfig = {
  decimal: string
  thousand: string
}

export const formatPresets: Record<FormatKey, FormatConfig> = {
  'dot-thousand': {decimal: '.', thousand: ','},
  'comma-decimal': {decimal: ',', thousand: '.'},
}

export const defaultFormatKey: FormatKey = 'dot-thousand'

export const defaultRates: CurrencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 1.23,
  RUB: 0.013,
  THB: 0.027,
  BTC: 60000,
  ETH: 3000,
} as CurrencyRates

export type EvaluateOptions = {
  formatKey?: FormatKey
  format?: FormatConfig
  rates?: CurrencyRates
}

export function evaluateText(text: string, options: EvaluateOptions = {}): EvaluatedLine[] {
  const format = options.format || formatPresets[options.formatKey || defaultFormatKey]
  const rates = options.rates || defaultRates

  const answers: Result[] = []
  const lines = text.split(/\r?\n/)
  const knownVars: Varname[] = []
  const scope: Record<string, Result> = Object.create(null)
  const ABSENT = Symbol('absent')

  const evaluateWithScope = <T>(fn: () => T): T => {
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

    if (trimmed.length === 0) {
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
      const {normalized, map} = normalizeLine(expression, format)
      const [node, warningsNormalized] = parse(lex(normalized, knownVars))
      const isTotal = node instanceof Sum
      const result = evaluateWithScope(() =>
        node.evaluate({
          rates,
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
      const formatted = formatResult(result, format)
      const highlightNormalized = buildHighlightSegments(normalized, node.highlight())
      const highlight = mapSegmentsToOriginal(highlightNormalized, map, expression.length)
      const warnings = mapWarningsToOriginal(warningsNormalized, map, expression.length)
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

function formatResult(result: Result, format: FormatConfig): { text: string, kind: string } {
  const kind = (result as any)?.kind
  if (kind === 'numbr') {
    const value = (result as any).value as Big
    const currency = (result as any).currency as string | undefined
    const formatted = formatWithGrouping(value, format, 2)
    return {
      text: currency ? `${formatted} ${currency}` : formatted,
      kind: 'numbr',
    }
  }
  if (kind === 'percent') {
    const value = (result as any).value as Big
    return {
      text: `${formatWithGrouping(value, format, 2)}%`,
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

function formatWithGrouping(value: Big, format: FormatConfig, decimals = 2): string {
  const rounded = value.round(decimals)
  const fixed = rounded.toFixed(decimals)
  const negative = fixed.startsWith('-')
  const unsigned = negative ? fixed.slice(1) : fixed
  const [integer, fraction] = unsigned.split('.')
  const groupedInteger = addThousands(integer, format.thousand)
  const text = fraction != undefined && decimals > 0
    ? `${groupedInteger}${format.decimal}${fraction}`
    : groupedInteger
  return negative ? `-${text}` : text
}

function addThousands(integer: string, separator: string): string {
  if (!separator || integer.length <= 3) return integer
  return integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
}

function buildHighlightSegments(text: string, markup?: Markup): HighlightSegment[] {
  if (!markup || markup.length === 0 || text.length === 0) {
    return []
  }
  const mask: (string | undefined)[] = new Array(text.length)
  for (const [start, end, tag] of markup) {
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

function normalizeLine(line: string, format: FormatConfig): { normalized: string, map: number[] } {
  const map: number[] = []
  if (format.decimal === '.' && format.thousand === ',') {
    for (let i = 0; i < line.length; i++) {
      map.push(i)
    }
    return {normalized: line, map}
  }
  let normalized = ''
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === format.decimal) {
      normalized += '.'
      map.push(i)
      continue
    }
    if (ch === format.thousand) {
      const prev = line[i - 1]
      const next = line[i + 1]
      if (isDigit(prev) && isDigit(next)) {
        continue
      }
    }
    normalized += ch
    map.push(i)
  }
  return {normalized, map}
}

function isDigit(ch: string | undefined): boolean {
  return ch !== undefined && ch >= '0' && ch <= '9'
}

function mapIndexStart(index: number, map: number[], originalLength: number): number {
  if (index <= 0) return 0
  if (index >= map.length) return originalLength
  return map[index]
}

function mapIndexEnd(index: number, map: number[], originalLength: number): number {
  if (index <= 0) return 0
  if (index > map.length) return originalLength
  return map[index - 1] + 1
}

function mapSegmentsToOriginal(segments: HighlightSegment[], map: number[], originalLength: number): HighlightSegment[] {
  if (map.length === 0) return segments
  return segments.map(segment => ({
    start: mapIndexStart(segment.start, map, originalLength),
    end: mapIndexEnd(segment.end, map, originalLength),
    tag: segment.tag,
  }))
}

function mapWarningsToOriginal(
  warnings: { start: number, end: number, message: string }[],
  map: number[],
  originalLength: number,
): { start: number, end: number, message: string }[] {
  if (map.length === 0) return warnings
  return warnings.map(w => ({
    start: mapIndexStart(w.start, map, originalLength),
    end: mapIndexEnd(w.end, map, originalLength),
    message: w.message,
  }))
}

export type {FormatConfig as NumberFormatConfig}
