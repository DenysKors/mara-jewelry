'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import styles from './FilterSection.module.css';

export default function FilterSection({ stones }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onProductFilterChange = evt => {
    const params = new URLSearchParams(searchParams);
    params.set('page', 1);

    if (params.has('search')) {
      params.delete('search');
    }

    if (evt.target.checked) {
      params.append('product', evt.target.value);
    } else {
      params.delete('product', evt.target.value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const onStonesFilterChange = evt => {
    const params = new URLSearchParams(searchParams);
    params.set('page', 1);

    if (params.has('search')) {
      params.delete('search');
    }

    if (evt.target.checked) {
      params.append('stone', evt.target.value);
    } else {
      params.delete('stone', evt.target.value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className={styles.sidebar}>
      <legend className={styles.legend}>Тип виробу</legend>
      <ul>
        <li className={styles.listItem}>
          <input
            id="bracelet"
            type="checkbox"
            value="bracelet"
            checked={searchParams.has('product', 'bracelet') ? true : false}
            onChange={onProductFilterChange}
          />
          <label htmlFor="bracelet" style={{ cursor: 'pointer' }}>
            Браслет
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            id="necklace"
            type="checkbox"
            value="necklace"
            checked={searchParams.has('product', 'necklace') ? true : false}
            onChange={onProductFilterChange}
          />
          <label htmlFor="necklace" style={{ cursor: 'pointer' }}>
            Намисто
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            id="earrings"
            type="checkbox"
            value="earrings"
            checked={searchParams.has('product', 'earrings') ? true : false}
            onChange={onProductFilterChange}
          />
          <label htmlFor="earrings" style={{ cursor: 'pointer' }}>
            Сережки
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            id="chocker"
            type="checkbox"
            value="chocker"
            checked={searchParams.has('product', 'chocker') ? true : false}
            onChange={onProductFilterChange}
          />
          <label htmlFor="chocker" style={{ cursor: 'pointer' }}>
            Чокер
          </label>
        </li>
        <li className={styles.listItem}>
          <input
            id="chaplet"
            type="checkbox"
            value="chaplet"
            checked={searchParams.has('product', 'chaplet') ? true : false}
            onChange={onProductFilterChange}
          />
          <label htmlFor="chaplet" style={{ cursor: 'pointer' }}>
            Чотки
          </label>
        </li>
      </ul>
      <legend className={styles.legend}>Вид каменю</legend>
      <ul>
        {stones.map(({ name, value }) => {
          return (
            <li key={value} className={styles.listItem}>
              <input
                id={value}
                type="checkbox"
                value={value}
                checked={searchParams.has('stone', value) ? true : false}
                onChange={onStonesFilterChange}
              />
              <label htmlFor={value} style={{ cursor: 'pointer' }}>
                {name}
              </label>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
