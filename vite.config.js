import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactAcknowledgement, validateContactPayload } from './lib/contactMail.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'contact-api-dev-middleware',
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Method Not Allowed' }))
            return
          }

          let rawBody = ''
          req.on('data', (chunk) => {
            rawBody += chunk
          })

          req.on('end', async () => {
            try {
              const body = rawBody ? JSON.parse(rawBody) : {}
              const validation = validateContactPayload(body)

              if (!validation.ok) {
                res.statusCode = validation.status
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: validation.error }))
                return
              }

              await sendContactAcknowledgement(validation.data)

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true }))
            } catch (error) {
              console.error('Contact email failed:', error)
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Unable to send email at the moment.' }))
            }
          })
        })
      }
    }
  ]
})
