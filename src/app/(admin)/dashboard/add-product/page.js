import { Suspense } from 'react';

import styles from './page.module.css';
import AddProductForm from '@/components/AddProductForm/AddProductForm';
import { getAllStones } from '@/lib/api';

export default async function AddProduct() {
  const stones = await getAllStones();

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Додати товар</h3>
      <Suspense>
        <AddProductForm allStones={stones} />
      </Suspense>
    </section>
  );
}
