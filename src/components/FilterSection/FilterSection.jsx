'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import styles from './FilterSection.module.css';

export default function FilterSection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onFilterChange = evt => {
    const params = new URLSearchParams(searchParams);

    if (evt.target.checked) {
      params.set(evt.target.value, 'true');
    } else {
      params.delete(evt.target.value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className={styles.sidebar}>
      <legend className={styles.legend}>Тип виробу</legend>
      <label>
        <input
          type="checkbox"
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
