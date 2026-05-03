import { useState } from 'react'
import './Home.css'
import ImageLightbox from '../components/ImageLightbox'
import heroImage from '../../images/backgraund-image.jpg'

const expeditionHighlights = [
  {
    id: 1,
    label: 'Field Notes',
    title: 'Life Between Streets and Summits',
    description:
      'A personal archive of mountain crossings, city stories, and the quieter lessons gathered in between.'
  },
  {
    id: 2,
    label: 'Expeditions',
    title: 'Journeys Built on Endurance',
    description:
      'Long walks, remote camps, alpine routes, and the discipline of moving slowly enough to notice everything.'
  },
  {
    id: 3,
    label: 'Photography',
    title: 'Images With a Sense of Place',
    description:
      'Frames shaped by weather, terrain, and human presence rather than polished travel cliches.'
  }
]

const featuredPhotos = [
  {
    id: 1,
    src: heroImage,
    alt: 'Expedition ridge at golden hour'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=1600&fit=crop',
    alt: 'Snow-covered mountain peaks'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=1600&fit=crop',
    alt: 'Traveler on a remote trail'
  }
]

const journalPreviews = [
  {
    id: 1,
    title: 'Lessons from the Mountains',
    excerpt:
      'At altitude, ambition gets quieter and awareness gets sharper. The mountain does not reward speed nearly as much as attention.',
    date: 'April 15, 2026',
    category: 'Reflection'
  },
  {
    id: 2,
    title: 'From Streets to Summits',
    excerpt:
      'Street photography taught me to anticipate fleeting moments. Mountaineering taught me to wait for them.',
    date: 'March 28, 2026',
    category: 'Journey'
  },
  {
    id: 3,
    title: 'The Art of Slow Travel',
    excerpt:
      'The most memorable routes are rarely the fastest ones. They are the ones that leave room for weather, detours, and conversation.',
    date: 'March 10, 2026',
    category: 'Travel'
  }
]

const collaborationAreas = [
  'Expedition storytelling',
  'Photography projects',
  'Brand collaborations',
  'Travel features',
  'Speaking engagements',
  'Field documentation'
]

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const scrollToStory = () => {
    document.getElementById('story-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="home">
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-kicker">Rupesh Pathak</p>
          <h1 className="hero-title">Mountaineer, photographer, and explorer documenting life in motion.</h1>
          <p className="hero-description">
            A cinematic journal of expeditions, field notes, and visual storytelling shaped by distance, weather, and lived experience.
          </p>
          <div className="hero-actions">
            <button className="hero-cta primary" onClick={scrollToStory}>
              Explore the story
            </button>
            <button className="hero-cta secondary" onClick={() => setSelectedPhoto(featuredPhotos[0])}>
              View signature image
            </button>
          </div>
        </div>
      </section>

      <section className="story-section" id="story-section">
        <div className="story-intro">
          <p className="section-label">About</p>
          <h2 className="section-title">A life shaped by observation, endurance, and place.</h2>
        </div>
        <div className="story-grid">
          <div className="story-copy">
            <p>
              I move between mountains, roads, and cities with the same instinct: to pay attention. What began with street photography evolved into a wider practice of exploration, where travel is not just movement, but a way of understanding landscape, people, and self.
            </p>
            <p>
              This site is a home for those journeys. It gathers photographs, journal entries, and expedition fragments into one place so each route feels connected to the next.
            </p>
          </div>
          <div className="story-facts">
            <div className="story-stat">
              <span className="story-stat-value">3+</span>
              <span className="story-stat-label">Years building visual stories</span>
            </div>
            <div className="story-stat">
              <span className="story-stat-value">Mountains</span>
              <span className="story-stat-label">A recurring classroom for resilience and humility</span>
            </div>
            <div className="story-stat">
              <span className="story-stat-value">Field Work</span>
              <span className="story-stat-label">Photography, writing, and observation combined</span>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section">
        <div className="section-heading">
          <p className="section-label">Highlights</p>
          <h2 className="section-title">Built like an explorer’s front page, not a generic portfolio.</h2>
        </div>
        <div className="highlights-grid">
          {expeditionHighlights.map((item) => (
            <article key={item.id} className="highlight-card">
              <p className="highlight-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-band-image" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="feature-band-content">
          <p className="section-label">Featured Journey</p>
          <h2 className="section-title">From everyday observation to remote landscapes.</h2>
          <p>
            The through-line in my work is simple: stay curious, go farther, and document honestly. Whether on a steep ascent or in a crowded street, the goal is the same: find the human story inside the terrain.
          </p>
          <a href="#" className="feature-link">
            Read the latest journal
          </a>
        </div>
      </section>

      <section className="quote-section">
        <p className="quote-mark">“</p>
        <blockquote>
          Exploration changes you less by giving answers and more by refining the questions you keep asking.
        </blockquote>
        <p className="quote-attribution">Rupesh Pathak</p>
      </section>

      <section className="gallery-section">
        <div className="section-heading">
          <p className="section-label">Photography</p>
          <h2 className="section-title">Selected images from the trail.</h2>
        </div>
        <div className="featured-photos-grid editorial">
          {featuredPhotos.map((photo) => (
            <div key={photo.id} className="photo-item" onClick={() => setSelectedPhoto(photo)}>
              <img src={photo.src} alt={photo.alt} />
              <div className="photo-overlay">
                <span>Open image</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="journals-preview-section">
        <div className="section-heading split">
          <div>
            <p className="section-label">Journal</p>
            <h2 className="section-title">Recent reflections from the road.</h2>
          </div>
          <p className="section-side-note">Writing that sits beside the imagery, not underneath it.</p>
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
              <a href="#" className="journal-read-more">
                Continue reading
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-preview-section">
        <div className="contact-shell">
          <div className="contact-content">
            <p className="section-label light">Collaborate</p>
            <h2>Available for stories, campaigns, and expedition-led work.</h2>
            <p className="contact-copy">
              If you want the site to feel more like a modern explorer’s platform, this section carries the same energy as the reference: clear positioning, dark contrast, and direct calls to connect.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/manual_eyes_/" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram
              </a>
              <a href="https://x.com/_rupeshpathak_" target="_blank" rel="noopener noreferrer" className="social-link">
                X
              </a>
              <a href="https://www.linkedin.com/in/pathak-rupesh/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="mailto:pathakrupesh@zohomail.in" className="social-link">
                Email
              </a>
            </div>
          </div>
          <div className="collaboration-list">
            {collaborationAreas.map((area) => (
              <div key={area} className="collaboration-item">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && <ImageLightbox image={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
    </div>
  )
}
