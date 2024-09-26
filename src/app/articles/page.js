// import Link from 'next/link';

// import CloudinaryWidget from '@/components/CloudinaryWidget/CloudinaryWidget';
import styles from './page.module.css';
// import Pagination from '@/components/Pagination/Pagination';
// import { CldImage } from 'next-cloudinary';
// import { PAGINATION_LIMIT } from '@/constants/pagination';
// import { getAllArticles } from '@/lib/api';

export default async function ArticlePage({ searchParams }) {
  const page = searchParams.page || 1;
  // const articlesData = await getAllArticles(page);

  return (
    <main className={styles.container}>
      <ul className={styles.wrapper}>
        {/* {articlesData.articles.map(({ code, title, text }) => {
          return (
            <li key={code}>        
              <article>
              <header>
              <div>
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
                </div>
                  <h3>
                      <Link
                        href={{
                        pathname: `/articles/${code}`,
                        }}
                      >{title}
                      </Link>
                   </h3>
                </header>
                <section>
                  <p>{text}</p>
                </section>
                <footer>
                  <span>дата публіквції</span>
                </footer>
              </article>
            </li>
          );
        })} */}
      </ul>
      {/* {articlesData.totalAmount > PAGINATION_LIMIT && (
            <Pagination totalAmount={articlesData.totalAmount} />
          )} */}
      {/* <CloudinaryWidget /> */}
    </main>
  );
}
