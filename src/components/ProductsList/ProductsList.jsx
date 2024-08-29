'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './ProductsList.module.css';

export default function ProductsList({ products }) {
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
                  alt={title}
                  width={230}
                  height={210}
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
                <div className={styles.textBox}>
                  <h3 className={styles.linkTitle}>{title}</h3>
                  <p className={styles.linkText}>
                    {stones.reduce((accum, stone, idx) => {
                      if (idx === 0) {
                        return accum + stone.name;
                      } else {
                        return accum + ', ' + stone.name;
                      }
                    }, '')}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
