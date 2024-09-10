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
                pathname: `/catalog/${code}`,
              }}
            >
              <div className={styles.thumb}>
                <Image
                  src="/no-image-placeholder.png"
                  alt={title}
                  width={210}
                  height={190}
                  className={styles.img}
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
