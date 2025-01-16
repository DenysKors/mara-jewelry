'use client';

import toast from 'react-hot-toast';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import styles from './ProductInteraction.module.css';
import Modal from '../Modal/Modal';
import ProductBasket from '../ProductBasket/ProductBasket';
import { useBasketStore } from '@/store/basketStore';
import { SELL_STATUS_ENUMS } from '@/constants/enums';

const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

export default function ProductInteraction({ sell_status, ...product }) {
  const [showBasketModal, setShowBasketModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const products = useBasketStore(state => state.products);
  const addProduct = useBasketStore(state => state.addProduct);

  const pathname = usePathname();
  console.log(WEBSITE_URL);

  const handleBasketClick = () => {
    const searchedProduct = products.find(item => item.code === product.code);
    if (products.length === 0) {
      addProduct(product);
      setShowBasketModal(true);
    } else if (!searchedProduct) {
      addProduct(product);
      setShowBasketModal(true);
    } else {
      return toast.error('Товар вже у кошику');
    }
  };

  return (
    <>
      {SELL_STATUS_ENUMS.notAvailable !== sell_status && (
        <div className={styles.box}>
          <button
            className={styles.buttonBuy}
            type="button"
            aria-label="buy"
            onClick={handleBasketClick}
          >
            придбати прикрасу
            <svg className={styles.buttonIcon}>
              <use href="/icons.svg#icon-shopping-bag"></use>
            </svg>
          </button>
          {showBasketModal && (
            <Modal onClose={() => setShowBasketModal(false)}>
              <ProductBasket onClose={setShowBasketModal} />
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
              href={`https://www.instagram.com/?url=https://${WEBSITE_URL}${pathname}`}
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
              href={`https://t.me/share/url?url=https://${WEBSITE_URL}${pathname}`}
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
              href={`https://www.facebook.com/sharer.php?u=https://${WEBSITE_URL}${pathname}`}
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
