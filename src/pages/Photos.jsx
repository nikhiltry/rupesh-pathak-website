import { useState } from 'react'
import './Photos.css'
import ImageLightbox from '../components/ImageLightbox'

const allPhotos = [
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
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Summit view'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    alt: 'Trail reflection'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Mountain silence'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    alt: 'Journey continues'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    alt: 'Alpine beauty'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
    alt: 'Moment captured'
  }
]

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="photos">
      <div className="photos-header">
        <h1>Through My Lens</h1>
        <p>A quiet gallery of moments from mountains and beyond</p>
      </div>

      <div className="photos-grid">
        {allPhotos.map((photo) => (
          <div 
            key={photo.id} 
            className="photo-card"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.src} alt={photo.alt} />
            <div className="photo-overlay"></div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <ImageLightbox 
          image={selectedPhoto} 
          onClose={() => setSelectedPhoto(null)} 
        />
      )}
    </div>
  )
}
