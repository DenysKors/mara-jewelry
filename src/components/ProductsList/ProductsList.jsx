'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './ProductsList.module.css';

export default function ProductsList({ products }) {
  console.log(products);
  return (
    <ul className={styles.container}>
      {products.map(({ code, title, imageUrl, stones }) => {
        return (
          <li key={code}>
            <Link
              href={{
                pathname: `/product/${code}`,
              }}
            >
              <div className={`${styles.thumb} ${styles.overlay}`}>
                <Image
                  src={imageUrl}
                  className={styles.image}
                  alt={title}
                  width={230}
                  height={210}
                  unoptimized
                />
                <div className={styles.textBox}>
                  <h3 className={styles.linkTitle}>{title}</h3>
                  <p className={styles.linkText}>{stones.join(', ')}</p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
