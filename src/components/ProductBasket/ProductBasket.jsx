'use client';

import { CldImage } from 'next-cloudinary';

import styles from './ProductBasket.module.css';

import { useBasketStore } from '@/store/basketStore';

export default function ProductBasket() {
  const products = useBasketStore(state => state.products);
  // const incrementCount = useBasketStore(state => state.incrementCount);
  // const decrementCount = useBasketStore(state => state.decrementCount);
  console.log(products);
  return (
    <>
      <h3>Кошик товару</h3>
      <div className={styles.container}>
        {products.length > 0 &&
          products.map(({ title, price, imageUrl, code }) => {
            return (
              <div key={code}>
                <CldImage
                  width="100"
                  height="93"
                  src={imageUrl}
                  alt={title}
                  priority
                  className={styles.img}
                  sizes="(max-width: 767px) 33vw,
                          (max-width: 1440px) 50vw,
                          100vw"
                />
                <span className={styles.title}>{title}</span>
              </div>
            );
          })}
      </div>
    </>
  );
}
