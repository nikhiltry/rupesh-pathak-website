import { useState } from 'react'
import './Home.css'
import ImageLightbox from '../components/ImageLightbox'

const heroImage = 'https://lh3.googleusercontent.com/sitesv/AA5AbUAmaT2D2HmcN9jc7oT0_TRYCu7Hx_Oi7emN6MES5gKsLS18zcgsKGn1ayFHExvMpR7eLzGnMpH4r8TRKAGwhXZgU6OaTpIHsYbWVz_D0kXzfV080Xb0SXsxCNGuuD9RfAkZsmITOOiEnoSUAhEscD9APr-0_TZfIp0gTP6W6IFom8LsqOLHbMH7=w16383'

const featuredPhotos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Mountain landscape'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    alt: 'Mountain trail'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Peak exploration'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    alt: 'Journey moments'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Exploration'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    alt: 'Wilderness'
  }
]

const journalPreviews = [
  {
    id: 1,
    title: 'Lessons from the Mountains',
    excerpt: 'Standing at 4000 meters, surrounded by silence and stone, I learned that the most profound discoveries often come when we step away from the noise. Mountains teach patience, humility, and the art of presence.',
    date: 'April 15, 2026',
    category: 'Reflection'
  },
  {
    id: 2,
    title: 'From Streets to Summits',
    excerpt: 'My journey from street photography to mountaineering wasn\'t a departure—it was a continuation. Both are about observation, about seeing the world differently, about documenting what moves us.',
    date: 'March 28, 2026',
    category: 'Journey'
  },
  {
    id: 3,
    title: 'The Art of Slow Travel',
    excerpt: 'In a world obsessed with speed, I discovered that the most meaningful experiences come from slowing down. Walking through valleys, sitting with locals, watching sunsets—these moments define a journey.',
    date: 'March 10, 2026',
    category: 'Travel'
  }
]

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Rupesh Pathak</h1>
          <p className="hero-subtitle">Mountaineer | Explorer</p>
          <p className="hero-description">Documenting journeys, moments, and meaning</p>
          <button className="hero-cta" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Explore My Journey
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>About This Journey</h2>
          <p>
            I am an explorer at heart—someone who finds meaning in movement, discovery, and the spaces between destinations. Through mountains, travel, and photography, I document what I see, where I go, and what I learn. This isn't a portfolio or a personal brand. It's a living journal of observation, growth, and the quiet moments that shape us.
          </p>
          <p>
            Every peak climbed, every trail walked, every photograph taken is a conversation between myself and the world. I invite you to witness these moments—not as a spectator, but as a fellow traveler in the human experience.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="journey-content">
          <h2>From Streets to Summits</h2>
          <div className="journey-narrative">
            <div className="journey-phase">
              <h3>The Beginning: Street Photography</h3>
              <p>
                It started in the streets of New Delhi. Armed with a camera, I observed urban life—the hustle, the stories, the fleeting moments that define a city. Street photography taught me to see differently, to find beauty in the ordinary, and to understand that every person has a story.
              </p>
            </div>
            <div className="journey-phase">
              <h3>The Evolution: Mountains Call</h3>
              <p>
                Then came the mountains. What began as a weekend trek became a calling. I realized that the same curiosity that drove me through city streets could take me to higher places—literally and metaphorically. Mountains offered silence where cities offered noise, vastness where streets offered crowds.
              </p>
            </div>
            <div className="journey-phase">
              <h3>The Integration: A Unified Vision</h3>
              <p>
                Today, I understand that these aren't separate paths. Street photography and mountaineering are both about observation, about documenting the human experience in different contexts. Both are about presence, patience, and the art of seeing what others miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photos Section */}
      <section className="featured-photos-section">
        <div className="featured-photos-header">
          <h2>Through My Lens</h2>
          <p>A curated selection of moments from the mountains and beyond</p>
        </div>
        <div className="featured-photos-grid">
          {featuredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="photo-item"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.src} alt={photo.alt} />
              <div className="photo-overlay"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Journals Preview Section */}
      <section className="journals-preview-section">
        <div className="journals-header">
          <h2>Latest Reflections</h2>
          <p>Thoughts from the trail</p>
        </div>
        <div className="journals-list">
          {journalPreviews.map((journal) => (
            <article key={journal.id} className="journal-preview">
              <div className="journal-meta">
                <span className="journal-date">{journal.date}</span>
                <span className="journal-category">{journal.category}</span>
              </div>
              <h3 className="journal-title">{journal.title}</h3>
              <p className="journal-excerpt">{journal.excerpt}</p>
              <a href="#" className="journal-read-more">Read more →</a>
            </article>
          ))}
        </div>
      </section>

      {/* Contact/Social Section */}
      <section className="contact-preview-section">
        <div className="contact-content">
          <h2>Let's Connect</h2>
          <p>Follow my journey across platforms or reach out directly</p>
          <div className="social-links">
            <a href="https://www.instagram.com/manual_eyes_/" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
            <a href="https://x.com/_rupeshpathak_" target="_blank" rel="noopener noreferrer" className="social-link">
              X (Twitter)
            </a>
            <a href="https://www.linkedin.com/in/pathak-rupesh/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="mailto:pathakrupesh@zohomail.in" className="social-link">
              Email
            </a>
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <ImageLightbox 
          image={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  )
}
