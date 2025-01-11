'use client';

import { CldImage } from 'next-cloudinary';

import styles from './ProductBasket.module.css';

import { useBasketStore } from '@/store/basketStore';

export default function ProductBasket() {
  const products = useBasketStore(state => state.products);
  const totalPrice = useBasketStore(state => state.totalPrice);
  const removeProduct = useBasketStore(state => state.removeProduct);

  return (
    <>
      <h3 className={styles.topic}>Кошик товару</h3>
      <div className={styles.container}>
        {products.length === 0 && (
          <p className={styles.text}>Зараз кошик пустий, наповніть його</p>
        )}
        {products.length > 0 &&
          products.map(product => {
            return (
              <div className={styles.wrapper} key={product.code}>
                <div className={styles.imgBox}>
                  <CldImage
                    width="100"
                    height="93"
                    src={product.imageUrl}
                    alt={product.title}
                    priority
                    className={styles.img}
                    sizes="(max-width: 767px) 33vw,
                  (max-width: 1440px) 50vw,
                  100vw"
                  />
                  <span className={styles.title}>{product.title}</span>
                </div>
                <div className={styles.priceBox}>
                  <button
                    className={styles.btn}
                    type="button"
                    aria-label="remove"
                    onClick={() => removeProduct(product)}
                  >
                    &#x2716;
                  </button>
                  <span>{`${product.price}грн.`}</span>
                </div>
              </div>
            );
          })}
        {products.length > 0 && (
          <p className={styles.totalPrice}>{`всього: ${totalPrice} грн.`}</p>
        )}
      </div>
    </>
  );
}
