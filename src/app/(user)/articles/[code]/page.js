import styles from './page.module.css';
import LinkBack from '@/components/LinkBack/LinkBack';
import CloudinaryImage from '@/components/CloudinaryImage/CloudinaryImage';

import { getArticleByCode } from '@/lib/api';

export default async function ArticlePage({ params }) {
  const articleCode = Number(params.code);
  const { code, title, parts } = await getArticleByCode(articleCode);

  const articlePart = parts.map((part, idx) => {
    if (idx === 0) {
      return (
        <div key={idx} className={styles.box}>
          <div className={styles.thumbFirst}>
            <CloudinaryImage
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
          </div>
          <p className={styles.textRight}>{part.text}</p>
        </div>
      );
    } else if (idx === 1) {
      return (
        <div key={idx} className={styles.box}>
          <p className={styles.textLeft}>{part.text}</p>
          <div className={styles.thumbSecond}>
            <CloudinaryImage
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
          </div>
        </div>
      );
    } else if (idx === 2) {
      return (
        <div key={idx} className={styles.box}>
          <div className={styles.thumbThird}>
            <CloudinaryImage
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
          </div>
          <p className={styles.textRight}>{part.text}</p>
        </div>
      );
    }
  });

  return (
    <main className={styles.container}>
      <LinkBack>назад до всіх статтей </LinkBack>
      <article className={styles.article}>
        <header>
          <h2 className={styles.title}>{title}</h2>
        </header>
        <section>{articlePart}</section>
        <footer style={{ textAlign: 'right' }}>
          <span className={styles.date}>дата публікації</span>
        </footer>
      </article>
    </main>
  );
}
