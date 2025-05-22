export { default as enContent } from './en/content.json'
export { default as enSystem } from './en/system.json'
export { default as itContent } from './it/content.json'
export { default as itSystem } from './it/system.json'

import { default as enContent } from './en/content.json'
import { default as enSystem } from './en/system.json'
import { default as itContent } from './it/content.json'
import { default as itSystem } from './it/system.json'

const locales = {
  en: {
    content: enContent,
    system: enSystem,
  },
  it: {
    content: itContent,
    system: itSystem,
  },
}

export type LocaleData = typeof locales
export type Locale = keyof typeof locales
export type LocaleMap = (typeof locales)[Locale]

export default locales
export const languages = Object.keys(locales) as Locale[]
