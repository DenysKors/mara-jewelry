'use client';

import { useState } from 'react';

import styles from './ProductInteraction.module.css';
import Modal from '../Modal/Modal';
import { SELL_STATUS_ENUMS } from '@/constants/enums';

export default function ProductInteraction({ sell_status, title }) {
  const [showBasketModal, setShowBasketModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <>
      {SELL_STATUS_ENUMS.notAvailable !== sell_status && (
        <div className={styles.box}>
          <button
            className={styles.buttonBuy}
            type="button"
            aria-label="buy"
            onClick={() => setShowBasketModal(true)}
          >
            придбати прикрасу
            <svg className={styles.buttonIcon}>
              <use href="/icons.svg#icon-shopping-bag"></use>
            </svg>
          </button>
          {showBasketModal && (
            <Modal onClose={() => setShowBasketModal(false)}>
              <h3>корзина товару</h3>
              <span>{title}</span>
            </Modal>
          )}
        </div>
      )}
      <button
        className={styles.buttonShare}
        type="button"
        aria-label="share"
        onClick={() => setShowShareModal(true)}
      >
        поділитись
        <svg className={styles.buttonIcon}>
          <use href="/icons.svg#icon-share"></use>
        </svg>
      </button>
      {showShareModal && (
        <Modal onClose={() => setShowShareModal(false)}>
          <div className={styles.container}>
            <a
              className={styles.link}
              href="https://www.instagram.com/?url=https://mara-jewelry.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="share on instagram"
            >
              <svg width="32" height="32">
                <use href="/icons.svg#icon-instagram"></use>
              </svg>
            </a>
            <a
              className={styles.link}
              href="https://t.me/share/url?url=https://mara-jewelry.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="share on telegram"
            >
              <svg width="32" height="32">
                <use href="/icons.svg#icon-telegram"></use>
              </svg>
            </a>
            <a
              className={styles.link}
              href="https://www.facebook.com/sharer.php?u=https://mara-jewelry.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="share on facebook"
            >
              <svg width="32" height="32">
                <use href="/icons.svg#icon-facebook"></use>
              </svg>
            </a>
          </div>
        </Modal>
      )}
    </>
  );
}
