import styles from './page.module.css';

import FilterSection from '@/components/FilterSection/FilterSection';
import ProductsSection from '@/components/ProductsSection/ProductsSection';

export default function CatalogPage() {
  return (
    <main className={styles.container}>
      <FilterSection />
      <ProductsSection />
    </main>
  );
}
