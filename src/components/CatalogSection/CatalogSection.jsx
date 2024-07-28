import Link from 'next/link';
import styles from './CatalogSection.module.css';

import LinksContainer from '../LinksContainer/LinksContainer';

import { pageData } from '@/app/pageData';

export default function CatalogSection() {
  return (
    <section className={styles.section}>
      <div className={styles.titleBox}>
        <h2 className={styles.title}>Каталог</h2>
        <div className={styles.linkBoxTop}>
          <Link
            href={{
              pathname: pageData[1].href,
              query: { product: 'all' },
            }}
            className={styles.link}
          >
            Переглянути весь
            <svg
              className={styles.linkIcon}
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7L0.945946 14L0 12.3667L3.10811 7L0 1.63333L0.945946 0L5 7Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
      <LinksContainer />
      <div className={styles.linkBoxBottom}>
        <Link
          href={{
            pathname: pageData[1].href,
            query: { product: 'all' },
          }}
          className={styles.link}
        >
          Переглянути весь
          <svg
            className={styles.linkIcon}
            viewBox="0 0 5 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7L0.945946 14L0 12.3667L3.10811 7L0 1.63333L0.945946 0L5 7Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
