import { Suspense } from 'react';

import styles from './page.module.css';

import { getAllStones } from '@/lib/api';

export default async function AddStone() {
  const stones = await getAllStones();

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Додати камінь</h3>
      <Suspense>{/* <AddStoneForm allStones={stones} /> */}</Suspense>
    </section>
  );
}
