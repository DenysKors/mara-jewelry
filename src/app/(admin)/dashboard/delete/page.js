import { Suspense } from 'react';

import styles from './page.module.css';

import DeleteTabs from '@/components/DeleteTabs/DeleteTabs';
import { getAllStones } from '@/lib/api';

export default async function Delete() {
  const stones = await getAllStones();

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Видалення</h3>
      <Suspense>{<DeleteTabs allStones={stones} />}</Suspense>
    </section>
  );
}
