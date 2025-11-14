import React, { useEffect, useRef, useState } from 'react';
import './CalPopup.css';

const CalPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  const overlayRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  // Handle click outside to close
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={`cal-popup-backdrop ${isClosing ? 'closing' : ''}`}
      onClick={handleOverlayClick}
    >
      {/* Backdrop with blur effect */}
      <div className="cal-popup-backdrop-blur" />
      
      {/* Popup container */}
      <div
        ref={popupRef}
        className={`cal-popup-container ${isClosing ? 'closing' : ''}`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="cal-popup-close-btn"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Cal.com iframe */}
        <div className="cal-popup-content">
          <iframe
            src="https://cal.com/editco-media"
            title="Book a Meeting - Editco Media"
            className="cal-popup-iframe"
            allow="camera; microphone; geolocation"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CalPopup;

