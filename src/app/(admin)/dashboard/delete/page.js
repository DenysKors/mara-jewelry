import styles from './page.module.css';

import DeleteTabs from '@/components/DeleteTabs/DeleteTabs';

export default async function Delete() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Видалення</h3>
      <DeleteTabs />
    </section>
  );
}
