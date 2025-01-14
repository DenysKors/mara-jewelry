'use client';

import { useState } from 'react';

import ProductBasket from '../ProductBasket/ProductBasket';
import Modal from '../Modal/Modal';
import styles from './BasketIcon.module.css';

import { useBasketStore } from '@/store/basketStore';

export default function BasketIcon() {
  const [showBasketModal, setShowBasketModal] = useState(false);

  const products = useBasketStore(state => state.products);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        aria-label="basket"
        onClick={() => setShowBasketModal(true)}
      >
        <svg
          className={`${
            products.length === 0 ? styles.btnIcon : styles.btnIconActive
          }`}
        >
          <use href="/icons.svg#icon-shopping-bag"></use>
        </svg>
        {products.length > 0 && (
          <span className={styles.span}>{products.length}</span>
        )}
      </button>
      {showBasketModal && (
        <Modal onClose={() => setShowBasketModal(false)}>
          <ProductBasket onClose={setShowBasketModal} />
        </Modal>
      )}
    </>
  );
}
