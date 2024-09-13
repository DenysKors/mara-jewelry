import styles from './page.module.css';
import LinkBack from '@/components/LinkBack/LinkBack';

import { getProductByCode } from '@/lib/api';
import ProductInteraction from '@/components/ProductInteraction/ProductInteraction';
import ProductAccordion from '@/components/ProductAccordion/ProductAccordion';

export default async function ProductPage({ params }) {
  const productCode = Number(params.code);
  const { title, description, stones, price, sell_status } =
    await getProductByCode(productCode);

  return (
    <main className={styles.container}>
      <LinkBack>назад до товарів</LinkBack>
      <div className={styles.wrapper}>
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
          <ProductInteraction sell_status={sell_status} title={title} />
        </div>
      </div>
      <ProductAccordion />
    </main>
  );
}
