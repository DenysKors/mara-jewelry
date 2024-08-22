'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import styles from './FilterSection.module.css';

export default function FilterSection({ stones }) {
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
      <ul>
        <li className={styles.listItem}>
          <input
            id="bracelet"
            type="checkbox"
            value="bracelet"
            checked={
              searchParams.get('bracelet'?.toString()) === 'true' ? true : false
            }
            onChange={onFilterChange}
          />
          <label htmlFor="bracelet">Браслет</label>
        </li>
        <li className={styles.listItem}>
          <input
            id="necklace"
            type="checkbox"
            value="necklace"
            checked={
              searchParams.get('necklace'?.toString()) === 'true' ? true : false
            }
            onChange={onFilterChange}
          />
          <label htmlFor="necklace">Намисто</label>
        </li>
        <li className={styles.listItem}>
          <input
            id="earrings"
            type="checkbox"
            value="earrings"
            checked={
              searchParams.get('earrings'?.toString()) === 'true' ? true : false
            }
            onChange={onFilterChange}
          />
          <label htmlFor="earrings">Сережки</label>
        </li>
        <li className={styles.listItem}>
          <input
            id="chocker"
            type="checkbox"
            value="chocker"
            checked={
              searchParams.get('chocker'?.toString()) === 'true' ? true : false
            }
            onChange={onFilterChange}
          />
          <label htmlFor="chocker">Чокер</label>
        </li>
        <li className={styles.listItem}>
          <input
            id="chaplet"
            type="checkbox"
            value="chaplet"
            checked={
              searchParams.get('chaplet'?.toString()) === 'true' ? true : false
            }
            onChange={onFilterChange}
          />
          <label htmlFor="chaplet">Чотки</label>
        </li>
      </ul>
      <legend className={styles.legend}>Вид каменю</legend>
      <ul>
        {stones.map(({ _id, name, value }) => {
          return (
            <li key={_id} className={styles.listItem}>
              <input
                id={value}
                type="checkbox"
                value={value}
                checked={
                  searchParams.get(`${value}`?.toString()) === 'true'
                    ? true
                    : false
                }
                onChange={onFilterChange}
              />
              <label htmlFor={value}>{name}</label>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
