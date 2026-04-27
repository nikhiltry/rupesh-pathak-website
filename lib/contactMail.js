import 'dotenv/config'
import nodemailer from 'nodemailer'

const env = globalThis.process?.env ?? {}

function createTransporter() {
  return nodemailer.createTransport({
    host: env.SMTP_HOST || 'smtp.zoho.in',
    port: Number(env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS
    }
  })
}

export function validateContactPayload(payload = {}) {
  const { name, email, subject, message } = payload

  if (!name || !email || !subject || !message) {
    return { ok: false, status: 400, error: 'All fields are required.' }
  }

  if (!env.SMTP_USER || !env.SMTP_PASS) {
    return { ok: false, status: 500, error: 'Email service is not configured.' }
  }

  return { ok: true, data: { name, email, subject, message } }
}

export async function sendContactAcknowledgement({ name, email, subject, message }) {
  const transporter = createTransporter()

  await transporter.sendMail({
    from: env.SMTP_USER,
    to: email,
    cc: env.SMTP_USER,
    subject: `Acknowledgment: ${subject}`,
    text: [
      `Hi ${name},`,
      '',
      'We received your message and are happy that you reached out to us.',
      '',
      'Here is the info you filled:',
      '::',
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Message: ${message}`,
      '::',
      '',
      'From me',
      '',
      'This is an acknowledgment copy for your submission.'
    ].join('\n'),
    html: `
      <div style="background:#f6f4ef;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;color:#1a1a1a;">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e8e2d8;padding:32px;">
          <h1 style="margin:0 0 16px;font-size:28px;font-weight:400;color:#1a1a1a;">Rupesh Pathak</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">Hi ${name},</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">We received your message and are happy that you reached out to us.</p>
          <p style="margin:0 0 12px;font-size:16px;line-height:1.7;">Here is the info you filled:</p>
          <div style="background:#fafafa;border:1px solid #eeeeee;padding:20px;margin:0 0 20px;">
            <p style="margin:0 0 10px;font-size:15px;line-height:1.6;"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 10px;font-size:15px;line-height:1.6;"><strong>Email:</strong> ${email}</p>
            <p style="margin:0 0 10px;font-size:15px;line-height:1.6;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin:0;font-size:15px;line-height:1.6;"><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin:0;font-size:15px;line-height:1.7;">From me</p>
        </div>
      </div>
    `
  })
}
