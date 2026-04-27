import { useState } from 'react'
import './Photos.css'
import ImageLightbox from '../components/ImageLightbox'
import heroImage from '../../images/backgraund-image.jpg'

const allPhotos = [
  {
    id: 1,
    src: heroImage,
    alt: 'Expedition ridge at golden hour',
    tag: 'Featured'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=1600&fit=crop',
    alt: 'Snow-covered mountain peaks',
    tag: 'Peaks'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=1600&fit=crop',
    alt: 'Traveler on a remote trail',
    tag: 'Trail'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=1600&fit=crop',
    alt: 'Forest route in soft light',
    tag: 'Forest'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=1600&fit=crop',
    alt: 'Night landscape under the stars',
    tag: 'Night'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=1600&fit=crop',
    alt: 'Cliffside mountain view',
    tag: 'Altitude'
  }
]

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="photos">
      <section className="photos-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="photos-hero-overlay"></div>
        <div className="photos-hero-content">
          <p className="page-kicker">Photography</p>
          <h1>Images collected from long walks, changing weather, and attentive travel.</h1>
          <p>
            A more cinematic gallery layout to match the homepage: taller frames, warmer tones, and a stronger editorial rhythm.
          </p>
        </div>
      </section>

      <section className="photos-intro">
        <div>
          <p className="section-label">Archive</p>
          <h2 className="section-title">Through my lens.</h2>
        </div>
        <p className="photos-intro-copy">
          These photographs are less about perfection and more about atmosphere, memory, and the feeling of being present in a place.
        </p>
      </section>

      <section className="photos-grid-section">
        <div className="photos-grid">
          {allPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`photo-card ${index === 0 ? 'featured' : ''}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.src} alt={photo.alt} />
              <div className="photo-overlay">
                <span className="photo-tag">{photo.tag}</span>
                <span className="photo-open">Open image</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedPhoto && <ImageLightbox image={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
    </div>
  )
}
