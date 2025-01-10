'use client';

import { useState } from 'react';

import ProductBasket from '../ProductBasket/ProductBasket';
import Modal from '../Modal/Modal';
import styles from './BasketIcon.module.css';

import { useBasketStore } from '@/store/basketStore';

export default function BasketIcon() {
  const [showBasketModal, setShowBasketModal] = useState(false);

  const products = useBasketStore(state => state.products);
  console.log(products);
  return (
    <>
      <button
        type="button"
        aria-label="basket"
        onClick={() => setShowBasketModal(true)}
      >
        <svg className={styles.buttonIcon}>
          <use href="/icons.svg#icon-shopping-bag"></use>
        </svg>
      </button>
      {showBasketModal && (
        <Modal onClose={() => setShowBasketModal(false)}>
          <ProductBasket />
        </Modal>
      )}
    </>
  );
}
