import Link from 'next/link';

import styles from './page.module.css';
import Pagination from '@/components/Pagination/Pagination';
import CloudinaryImage from '@/components/CloudinaryImage/CloudinaryImage';
import { ARTICLE_PAGINATION_LIMIT } from '@/constants/pagination';
import { getAllArticles } from '@/lib/api';

export const metadata = {
  title: "Статті про прикраси та все, що з ними пов'язано",
};

export default async function ArticlesPage({ searchParams }) {
  const page = searchParams.page || 1;
  const { articles, totalAmount } = await getAllArticles(page);

  return (
    <main className={styles.container}>
      <ul className={styles.wrapper}>
        {articles.map(({ code, title, parts, createdAt }) => {
          return (
            <li key={code}>
              <article>
                <header>
                  <div className={styles.box}>
                    {parts.map((part, idx) => {
                      return (
                        <CloudinaryImage
                          key={idx}
                          width="335"
                          height="380"
                          src={part.imageUrl}
                          alt={title}
                          priority
                          className={styles.img}
                          sizes="(max-width: 767px) 100vw,
                            (max-width: 1440px) 50vw,
                            33vw"
                        />
                      );
                    })}
                  </div>
                  <h3 style={{ marginBottom: '16px' }}>
                    <Link
                      className={styles.link}
                      href={{
                        pathname: `/articles/${code}`,
                      }}
                    >
                      {title}
                      <br />
                      <span className={styles.linkText}>
                        до статті
                        <svg className={styles.linkIcon}>
                          <use href="/icons.svg#icon-Vector"></use>
                        </svg>
                      </span>
                    </Link>
                  </h3>
                </header>
                <section style={{ marginBottom: '16px' }}>
                  <p className={styles.text}>{`${parts[0].text.slice(
                    0,
                    125
                  )}...`}</p>
                </section>
                <footer>
                  <span className={styles.date}>
                    {new Intl.DateTimeFormat('uk-UA', {
                      dateStyle: 'short',
                    }).format(createdAt)}
                  </span>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>

      {totalAmount > ARTICLE_PAGINATION_LIMIT && (
        <Pagination
          style={{ justifyContent: 'center', marginTop: '30px' }}
          totalAmount={totalAmount}
          paginationLimit={ARTICLE_PAGINATION_LIMIT}
        />
      )}
    </main>
  );
}
