import React from 'react';
import './Modal.css';
function Modal({ children, isOpen, onClose, title }) {
  // Dacă modalul nu este deschis, nu randăm nimic
  if (!isOpen) return null;

  return (
    // Overlay-ul care acoperă toată pagina
    <div className="modal-overlay" onClick={onClose}>
      {/* Container-ul modalului - oprește propagarea click-ului */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header-ul modalului cu titlu și buton de închidere */}
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        {/* Body-ul modalului - aici apare props.children */}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;