import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setIsSending(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Unable to send your message right now.')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      setErrorMessage(error.message || 'Unable to send your message right now. Please try again later.')
      return
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-header-copy">
          <p className="section-label light">Contact</p>
          <h1>Start a conversation around mountains, stories, or collaboration.</h1>
          <p>Whether you want to discuss a project, commission imagery, or simply share a story from the road, this page now follows the same atmospheric tone as the homepage.</p>
        </div>
        <div className="contact-side-card">
          <p>
            Best suited for thoughtful outreach: expedition ideas, photography work, editorial projects, speaking, and meaningful collaborations.
          </p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {submitted && <p className="success-message">Your message has been sent to Rupesh, and an acknowledgment email has also been sent to you.</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>

        <div className="contact-info-section">
          <div className="contact-info">
            <h3>Connect With Me</h3>
            <p>Follow the work, reach out directly, or use the form for a more detailed message.</p>

            <div className="social-section">
              <h4>Social Platforms</h4>
              <div className="social-links">
                <a 
                  href="https://www.instagram.com/manual_eyes_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <span className="social-icon">📷</span>
                  <span>Instagram</span>
                  <span>View</span>
                </a>
                <a 
                  href="https://x.com/_rupeshpathak_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <span className="social-icon">𝕏</span>
                  <span>X (Twitter)</span>
                  <span>Follow</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/pathak-rupesh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                  <span>Connect</span>
                </a>
              </div>
            </div>

            <div className="email-section">
              <h4>Email</h4>
              <a href="mailto:pathakrupesh@zohomail.in" className="email-link">
                pathakrupesh@zohomail.in
              </a>
            </div>

            <div className="info-text">
              <p>
                Whether the message is practical or personal, the goal here is simple: keep the tone human, direct, and aligned with the rest of the site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
