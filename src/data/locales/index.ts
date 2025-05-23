import { default as en } from './en.json'
import { default as it } from './it.json'

const locales = {
  en,
  it,
}

export type LocaleData = typeof locales
export type Locale = keyof typeof locales
export type LocaleMap = (typeof locales)[Locale]

export default locales
export const languages = Object.keys(locales) as Locale[]
