import styles from './page.module.css';

import { getProductByCode } from '@/lib/api';
import LinkBack from '@/components/LinkBack/LinkBack';
import CloudinaryImage from '@/components/CloudinaryImage/CloudinaryImage';
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
        <div className={styles.imgBox}>
          <CloudinaryImage
            width="335"
            height="191"
            src="as03s5m0rc6stgnnwlj9"
            priority
            alt={title}
            className={styles.img1}
            sizes="(max-width: 767px) 33vw,
                          (max-width: 1440px) 50vw,
                          100vw"
          />
          <CloudinaryImage
            width="163"
            height="152"
            src="agdzncdzz3jgubuhxcga"
            alt={title}
            className={styles.img2}
            sizes="(max-width: 767px) 33vw,
                          (max-width: 1440px) 50vw,
                          100vw"
          />
          <CloudinaryImage
            width="163"
            height="152"
            src="hob5r8x9uqqmxc8we3yy"
            alt={title}
            className={styles.img3}
            sizes="(max-width: 767px) 33vw,
                          (max-width: 1440px) 50vw,
                          100vw"
          />
        </div>
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
