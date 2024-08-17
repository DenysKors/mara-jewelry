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
            }}
            className={styles.link}
          >
            Переглянути весь
            <svg className={styles.linkIcon}>
              <use href="./icons.svg#icon-Vector"></use>
            </svg>
          </Link>
        </div>
      </div>
      <LinksContainer />
      <div className={styles.linkBoxBottom}>
        <Link
          href={{
            pathname: pageData[1].href,
          }}
          className={styles.link}
        >
          Переглянути весь
          <svg className={styles.linkIcon}>
            <use href="./icons.svg#icon-Vector"></use>
          </svg>
        </Link>
      </div>
    </section>
  );
}
