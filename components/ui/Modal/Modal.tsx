'use client';
import { useEffect } from 'react';

import { createPortal } from 'react-dom';

import css from './Modal.module.css';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: Props) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

// Модальне вікно має створюватись через createPortal
// https://www.edu.goit.global/uk/learn/25524997/39152994/39153017/training?blockId=39525937
