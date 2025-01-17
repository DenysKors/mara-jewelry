import { notFound } from 'next/navigation';

import styles from './page.module.css';
import LinkBack from '@/components/LinkBack/LinkBack';
import CloudinaryImage from '@/components/CloudinaryImage/CloudinaryImage';
import ProductInteraction from '@/components/ProductInteraction/ProductInteraction';
import ProductAccordion from '@/components/ProductAccordion/ProductAccordion';
import { getProductByCode } from '@/lib/api';

export async function generateMetadata({ params }) {
  const productCode = Number(params.code);
  const product = await getProductByCode(productCode);

  if (!product) {
    notFound();
  }

  return {
    title: `${product.title} / MaraJewelry`,
  };
}

export default async function ProductPage({ params }) {
  const productCode = Number(params.code);
  const product = await getProductByCode(productCode);

  if (!product) {
    notFound();
  }

  const {
    code,
    title,
    description,
    stones,
    imagesUrl,
    wideImageUrl,
    price,
    sell_status,
  } = product;

  return (
    <main className={styles.container}>
      <LinkBack>назад до товарів</LinkBack>
      <div className={styles.wrapper}>
        <div className={styles.imgBox}>
          <CloudinaryImage
            width="335"
            height="191"
            src={wideImageUrl}
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
            src={imagesUrl[0]}
            alt={title}
            className={styles.img2}
            sizes="(max-width: 767px) 33vw,
                (max-width: 1440px) 50vw,
                100vw"
          />
          <CloudinaryImage
            width="163"
            height="152"
            src={imagesUrl[1]}
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
            <span style={{ textTransform: 'capitalize' }}>Камені: </span>
            {stones.reduce((accum, stone, idx) => {
              if (idx === 0) {
                return accum + stone.name;
              } else {
                return accum + ', ' + stone.name;
              }
            }, '')}
          </h5>
          <p className={styles.text}>{description}</p>
          <p className={styles.subTitle}>{`Код товару: ${code}`}</p>
          <p className={styles.subTitle}>{sell_status}</p>
          <span className={styles.price}>{`${price} грн.`}</span>
          <ProductInteraction
            sell_status={sell_status}
            title={title}
            price={price}
            imageUrl={imagesUrl[0]}
            code={code}
          />
        </div>
      </div>
      <ProductAccordion />
    </main>
  );
}
