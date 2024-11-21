import { Suspense } from 'react';

import styles from './page.module.css';

// import { getAllStones } from '@/lib/api';

export default async function Delete() {
  //   const stones = await getAllStones();

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Видалити</h3>
      <Suspense>{/* <AddStoneForm allStones={stones} /> */}</Suspense>
    </section>
  );
}
