import Link from 'next/link';

// import CloudinaryWidget from '@/components/CloudinaryWidget/CloudinaryWidget';
import styles from './page.module.css';
import Pagination from '@/components/Pagination/Pagination';
import CloudinaryImage from '@/components/CloudinaryImage/CloudinaryImage';
import { ARTICLE_PAGINATION_LIMIT } from '@/constants/pagination';
import { getAllArticles } from '@/lib/api';

export default async function ArticlePage({ searchParams }) {
  const page = searchParams.page || 1;
  const { articles, totalAmount } = await getAllArticles(page);

  return (
    <main className={styles.container}>
      <ul className={styles.wrapper}>
        {articles.map(({ code, title, parts }) => {
          return (
            <li key={code}>
              <article>
                <header>
                  <div>
                    {parts.map(part => {
                      return (
                        <CloudinaryImage
                          key={code}
                          width="165"
                          height="165"
                          src={part.imageUrl}
                          alt={title}
                          priority
                          className={styles.img}
                          sizes="(max-width: 767px) 33vw,
                            (max-width: 1440px) 50vw,
                            100vw"
                        />
                      );
                    })}
                  </div>
                  <h3>
                    <Link
                      href={{
                        pathname: `/articles/${code}`,
                      }}
                    >
                      {title}
                    </Link>
                  </h3>
                </header>
                <section>
                  <p>{parts[0].text}</p>
                </section>
                <footer>
                  <span>дата публіквції</span>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
      {totalAmount > ARTICLE_PAGINATION_LIMIT && (
        <Pagination
          totalAmount={totalAmount}
          paginationLimit={ARTICLE_PAGINATION_LIMIT}
        />
      )}
      {/* <CloudinaryWidget /> */}
    </main>
  );
}
