import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.in',
  port: Number(process.env.SMTP_PORT || 465),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {}

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      cc: process.env.SMTP_USER,
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
        'This is an acknowledgment copy for your submission.',
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

    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email failed:', error)
    res.status(500).json({ error: 'Unable to send email at the moment.' })
  }
})

app.listen(port, () => {
  console.log(`Mail server running on http://localhost:${port}`)
})
