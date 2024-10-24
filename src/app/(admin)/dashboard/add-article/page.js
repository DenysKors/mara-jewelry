import dynamic from 'next/dynamic';

import styles from './page.module.css';

const AddArticleForm = dynamic(
  () => import('../../../../components/AddArticle/AddArticle'),
  {
    ssr: false,
  }
);

export default function AddArticle() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Додати статтю</h3>
      <AddArticleForm />
    </section>
  );
}
