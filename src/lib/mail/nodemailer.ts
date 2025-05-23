'use server'

import nodemailer from 'nodemailer'

export const getMailTransport = async () => nodemailer.createTransport({
  host: process.env.CONTACT_MAIL_HOST,
  port: Number(process.env.CONTACT_MAIL_PORT),
  auth: {
    user: process.env.CONTACT_MAIL_USER,
    pass: process.env.CONTACT_MAIL_PASS,
  },
})

// export const CONTACT_MAIL_NAME = process.env.CONTACT_MAIL_NAME
export const getContactMailName = async () => process.env.CONTACT_MAIL_NAME

// Usage example:
// await mailTransport.sendMail({
//   from: `"${CONTACT_MAIL_NAME}" <${process.env.CONTACT_MAIL_USER}>`,
//   to: 'recipient@example.com',
//   subject: 'Subject',
//   text: 'Body',
//   html: '<b>Body</b>',
// });

// export default mailTransport
