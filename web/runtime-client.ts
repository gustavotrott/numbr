import {evaluateText, formatPresets, defaultFormatKey, defaultRates, type FormatKey, type EvaluatedLine} from '../runtime'

type RuntimeAPI = {
  evaluate: (text: string, formatKey: FormatKey) => EvaluatedLine[]
  formatPresets: typeof formatPresets
  defaultFormatKey: FormatKey
}

declare const globalThis: typeof globalThis & { NumbrRuntime?: RuntimeAPI }

const target: typeof globalThis & Window = typeof window !== 'undefined' ? window : globalThis

target.NumbrRuntime = {
  evaluate(text: string, formatKey: FormatKey) {
    return evaluateText(text, {
      formatKey,
      rates: defaultRates,
    })
  },
  formatPresets,
  defaultFormatKey,
}

export {}
