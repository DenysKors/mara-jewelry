import styles from './page.module.css';
import LinkBack from '@/components/LinkBack/LinkBack';

import { getProductByCode } from '@/lib/api';

export default async function ProductPage({ params }) {
  const productCode = Number(params.code);
  const { title, description, stones, price, sell_status } =
    await getProductByCode(productCode);

  // const { code, title, description, imageUrl, stones, price, sell_status } =
  //   product;
  return (
    <main className={styles.container}>
      <LinkBack>назад до товарів</LinkBack>
      <div className={styles.wrappper}>
        {/* Images */}
        <div>
          <h2 className={styles.title}>{title}</h2>
          <h5 className={styles.subTitle}>
            {stones.reduce((accum, stone, idx) => {
              if (idx === 0) {
                return accum + stone.name;
              } else {
                return accum + ', ' + stone.name;
              }
            }, '')}
          </h5>
          <p className={styles.text}>{description}</p>
          <p className={styles.subTitle}>{sell_status}</p>
          <span className={styles.price}>{`${price} грн.`}</span>
          <button className={styles.button} type="button" aria-label="buy">
            придбати прикрасу
            <svg className={styles.buttonIcon}>
              <use href="./icons.svg#icon-shopping-bag"></use>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
