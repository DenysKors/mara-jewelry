import styles from './page.module.css';

import AddArticleForm from '@/components/AddArticleForm/AddArticleForm';

export default function AddArticle() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Додати статтю</h3>
      <AddArticleForm />
    </section>
  );
}
