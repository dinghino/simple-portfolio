declare namespace NodeJS {
  interface ProcessEnv {
    // octokit
    GITHUB_TOKEN: string
    // nodemailer
    CONTACT_MAIL_TO: string
    CONTACT_MAIL_HOST: string
    CONTACT_MAIL_PORT: string
    CONTACT_MAIL_PASS: string
    CONTACT_MAIL_USER: string
    CONTACT_MAIL_NAME: string
  }
}

import { formats } from '@/i18n/request'
import en from './src/data/locales/en.json'

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof en
    Formats: typeof formats
  }
}
