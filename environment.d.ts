// CONTACT_MAIL_TO: Email address to receive contact form submissions
// CONTACT_MAIL_HOST: SMTP host (e.g., smtp.gmail.com)
// CONTACT_MAIL_PORT: SMTP port (e.g., 465 for SSL)
// CONTACT_MAIL_USER: SMTP username (your Gmail address)
// CONTACT_MAIL_PASS: SMTP app password (see docs/email-setup.md)
// CONTACT_MAIL_NAME: Display name for sender (e.g., 'Your Name')

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
