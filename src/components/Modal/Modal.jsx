import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleCloseEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleCloseEsc);
      document.body.style.overflow = 'scroll';
    };
  }, []);

  function handleCloseEsc(evt) {
    if (evt.code === 'Escape') {
      onClose();
    }
  }

  const backdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={backdropClick}>
      <div className={styles.window}>
        {children}
        <button className={styles.button} type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
