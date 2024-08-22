import { Suspense } from 'react';

import styles from './page.module.css';

import FilterSection from '@/components/FilterSection/FilterSection';
import ProductsSection from '@/components/ProductsSection/ProductsSection';
import getAllStones from '@/lib/api';

export default async function CatalogPage() {
  const stones = await getAllStones();

  return (
    <main className={styles.container}>
      <Suspense>
        <FilterSection stones={stones} />
      </Suspense>
      <ProductsSection />
    </main>
  );
}
