import { sendContactAcknowledgement, validateContactPayload } from '../lib/contactMail.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const validation = validateContactPayload(req.body)

  if (!validation.ok) {
    return res.status(validation.status).json({ error: validation.error })
  }

  try {
    await sendContactAcknowledgement(validation.data)
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email failed:', error)
    return res.status(500).json({ error: 'Unable to send email at the moment.' })
  }
}
