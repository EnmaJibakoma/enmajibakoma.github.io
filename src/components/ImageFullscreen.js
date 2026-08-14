import { useState } from 'react';
import '../styles/components/ImageFullscreen.css';

const ImageFullscreen = ({ src, alt = "Fullscreen view", className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <img 
        src={src} 
        alt={alt}
        className={className} 
        onClick={() => setIsOpen(true)} 
        style={{ display: 'block' }} 
      />

      {isOpen && (
        <div 
          className="image-modal-overlay" 
          onClick={handleClose}
        >
          <button 
            className="image-modal-close" 
            onClick={handleClose}
            title="Close"
          >
            &times;
          </button>

          <img 
            src={src} 
            alt={alt}
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ImageFullscreen;   