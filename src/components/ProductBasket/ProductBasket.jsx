'use client';

import { CldImage } from 'next-cloudinary';
import toast from 'react-hot-toast';

import styles from './ProductBasket.module.css';

import { useBasketStore } from '@/store/basketStore';

export default function ProductBasket({ onClose }) {
  const products = useBasketStore(state => state.products);
  const totalPrice = useBasketStore(state => state.totalPrice);
  const removeProduct = useBasketStore(state => state.removeProduct);
  const reset = useBasketStore(state => state.reset);

  const handleAccept = evt => {
    evt.preventDefault();
    const data = new FormData(evt.currentTarget);

    const userOrder = {
      name: data.get('name'),
      phone: data.get('phone'),
      comment: data.get('comment'),
      products,
      totalPrice,
    };
    //Need to bind telegram bot in product, so you can receive orders and check it immediately
    console.table(
      `Замовлення: ${JSON.stringify(
        userOrder
      )}. TODO:підключити телеграм бота для збору заказів`
    );
    reset();
    onClose(false);
    toast.success('Замолення відправлено в обробку. Дякуємо!');
  };

  return (
    <>
      <h2 className={styles.topic}>Кошик</h2>
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
                    className={styles.btnRem}
                    type="button"
                    aria-label="remove"
                    onClick={() => removeProduct(product)}
                  >
                    <svg className={styles.icon}>
                      <use href="/icons.svg#icon-trash"></use>
                    </svg>
                  </button>
                  <span>{`${product.price} грн.`}</span>
                </div>
              </div>
            );
          })}
        {products.length > 0 && (
          <p className={styles.totalPrice}>{`всього: ${totalPrice} грн.`}</p>
        )}
        {products.length > 0 && (
          <div>
            <form onSubmit={handleAccept}>
              <fieldset className={styles.label}>
                Контактні дані для замовлення
                <div style={{ margin: '10px 0 10px 0' }}>
                  <label className={styles.label}>
                    Ім&apos;я:
                    <input type="text" name="name" required maxLength={20} />
                  </label>
                </div>
                <div style={{ margin: '10px 0 10px 0' }}>
                  <label className={styles.label}>
                    Номер телефону:
                    <input type="tel" name="phone" required maxLength={20} />
                  </label>
                </div>
                <div>
                  <label className={styles.label}>
                    Коментар:
                    <textarea
                      name="comment"
                      rows="3"
                      maxLength={100}
                      style={{ resize: 'none' }}
                    ></textarea>
                  </label>
                </div>
              </fieldset>
              <button className={styles.btnAcc} type="submit">
                Підтвердити замовлення
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
