import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema, ContactFormValues } from '@/schemas/contact-form'
import { getMailTransport, getContactMailName } from '@/lib/mail/nodemailer'

/**
 * API Route: POST /api/contact
 * Handles contact form submissions, validates input, anti-spam, and sends email via Nodemailer.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as ContactFormValues
    // Honeypot anti-spam: ignore if hidden field is filled
    if (body.acknowledge) {
      return NextResponse.json({ success: true })
    }
    const parsed = contactFormSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: 'Invalid form data.' }, { status: 400 })
    }
    const { name, email, message } = parsed.data

    const transport = await getMailTransport()
    const CONTACT_MAIL_NAME = await getContactMailName()
    await transport.sendMail({
      from: `"${CONTACT_MAIL_NAME}" <${process.env.CONTACT_MAIL_USER}>`,
      to: process.env.CONTACT_MAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message.replace(
        /\n/g,
        '<br/>',
      )}</p>`,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 })
  }
}
