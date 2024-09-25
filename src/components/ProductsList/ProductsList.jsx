'use client';

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

import styles from './ProductsList.module.css';

export default function ProductsList({ products }) {
  return (
    <ul className={styles.container}>
      {products.map(({ code, title, stones }) => {
        return (
          <li key={code}>
            <Link
              href={{
                pathname: `/catalog/${code}`,
              }}
            >
              <div className={styles.thumb}>
                <CldImage
                  width="210"
                  height="196"
                  src="agdzncdzz3jgubuhxcga"
                  alt={title}
                  priority
                  className={styles.img}
                  sizes="(max-width: 767px) 33vw,
                          (max-width: 1440px) 50vw,
                          100vw"
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
