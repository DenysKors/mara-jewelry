'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import styles from './FilterSection.module.css';

export default function FilterSection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onFilterChange = () => {
    const products = document.querySelectorAll('#product');
    const newUrlSearchParams = [];

    for (const product of products) {
      if (product.checked) {
        const newParam = [product.value, 'true'];
        newUrlSearchParams.push(newParam);
      }
    }
    const params = new URLSearchParams(newUrlSearchParams);
    replace(`${pathname}?${params}`);
  };

  return (
    <aside className={styles.sidebar}>
      <legend className={styles.legend}>Тип виробу</legend>
      <label>
        <input
          type="checkbox"
          id="product"
          value="chocker"
          checked={
            searchParams.get('chocker'?.toString()) === 'true' ? true : false
          }
          onChange={onFilterChange}
        />
        Чокер
      </label>
      <label>
        <input
          type="checkbox"
          id="product"
          value="necklace"
          checked={
            searchParams.get('necklace'?.toString()) === 'true' ? true : false
          }
          onChange={onFilterChange}
        />
        Намисто
      </label>
      <label>
        <input
          type="checkbox"
          id="product"
          value="bracelet"
          checked={
            searchParams.get('bracelet'?.toString()) === 'true' ? true : false
          }
          onChange={onFilterChange}
        />
        Браслет
      </label>
      <label>
        <input
          type="checkbox"
          id="product"
          value="chaplet"
          checked={
            searchParams.get('chaplet'?.toString()) === 'true' ? true : false
          }
          onChange={onFilterChange}
        />
        Чотки
      </label>
      <label>
        <input
          type="checkbox"
          id="product"
          value="earrings"
          checked={
            searchParams.get('earrings'?.toString()) === 'true' ? true : false
          }
          onChange={onFilterChange}
        />
        Сережки
      </label>
    </aside>
  );
}

// "Чокер", "Намисто", "Браслет", "Чотки", "Сережки"
// "chocker", "necklace", "bracelet", "chaplet", "earrings"
