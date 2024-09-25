'use client';

import { useRouter } from 'next/navigation';

import styles from './SearchBar.module.css';

import { pageData } from '@/app/pageData';

export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = evt => {
    evt.preventDefault();
    const userQuery = evt.currentTarget.elements.query.value.trim();
    router.push(`${pageData[1].href}?search=${userQuery}`);
    evt.currentTarget.elements.query.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button type="submit" className={styles.button} aria-label="search">
        <svg className={styles.svg}>
          <use href="/icons.svg#icon-search"></use>
        </svg>
      </button>
      <input
        className={styles.input}
        type="text"
        name="query"
        placeholder="Пошук..."
      />
    </form>
  );
}
