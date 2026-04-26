import './ImageLightbox.css'

export default function ImageLightbox({ image, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>×</button>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  )
}
