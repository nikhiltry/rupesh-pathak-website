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
      'Your message reached Rupesh Pathak successfully.',
      '',
      'A quick copy of what you sent is below:',
      '::',
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Message: ${message}`,
      '::',
      '',
      'Thank you for writing.',
      '',
      'This is your acknowledgment copy.'
    ].join('\n'),
    html: `
      <div style="background:#17120d;padding:40px 16px;font-family:'Avenir Next',Avenir,'Segoe UI',sans-serif;color:#fff7ed;">
        <div style="max-width:680px;margin:0 auto;border:1px solid rgba(241,222,189,0.18);background:linear-gradient(180deg,rgba(255,244,229,0.05),rgba(255,244,229,0.02));">
          <div style="padding:32px 32px 24px;border-bottom:1px solid rgba(241,222,189,0.12);">
            <p style="margin:0 0 12px;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,244,229,0.68);">Rupesh Pathak</p>
            <h1 style="margin:0;font-family:'Iowan Old Style','Palatino Linotype','Book Antiqua',Palatino,'Times New Roman',serif;font-size:36px;line-height:1.05;font-weight:400;color:#fff7ed;">Your message has been received.</h1>
          </div>
          <div style="padding:28px 32px 32px;">
            <p style="margin:0 0 16px;font-size:16px;line-height:1.8;color:rgba(255,244,229,0.82);">Hi ${name},</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.8;color:rgba(255,244,229,0.82);">Thank you for reaching out. This note confirms that your message was delivered successfully, along with a copy of what you sent.</p>
            <div style="margin:24px 0;padding:22px;border:1px solid rgba(241,222,189,0.16);background:rgba(255,244,229,0.05);">
              <p style="margin:0 0 10px;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,244,229,0.62);">Message Details</p>
              <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#fff7ed;"><strong style="color:#f1debd;">Name:</strong> ${name}</p>
              <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#fff7ed;"><strong style="color:#f1debd;">Email:</strong> ${email}</p>
              <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#fff7ed;"><strong style="color:#f1debd;">Subject:</strong> ${subject}</p>
              <p style="margin:0;font-size:15px;line-height:1.7;color:#fff7ed;"><strong style="color:#f1debd;">Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="margin:0;font-size:15px;line-height:1.8;color:rgba(255,244,229,0.72);">You can simply reply to this email if you want to add anything else.</p>
          </div>
        </div>
      </div>
    `
  })
}
