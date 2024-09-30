'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import styles from './Pagination.module.css';

export default function Pagination({ totalAmount, paginationLimit }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const totalPages = Math.ceil(totalAmount / paginationLimit);
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = pageNumber => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleNextPageChange = () => {
    if (currentPage === totalPages) return;
    const pageNumber = currentPage + 1;
    replace(createPageURL(pageNumber));
  };

  const handlePrevPageChange = () => {
    if (currentPage === 1) return;
    const pageNumber = currentPage - 1;
    replace(createPageURL(pageNumber));
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        type="button"
        aria-label="prev page"
        disabled={currentPage === 1}
        onClick={handlePrevPageChange}
      >
        <svg className={`${styles.icon} ${styles.iconRotate}`}>
          <use href="/icons.svg#icon-Vector"></use>
        </svg>
        назад
      </button>
      <span className={styles.span}>{`${currentPage} / ${totalPages}`}</span>
      <button
        className={styles.button}
        type="button"
        aria-label="next page"
        disabled={currentPage === totalPages}
        onClick={handleNextPageChange}
      >
        далі
        <svg className={styles.icon}>
          <use href="/icons.svg#icon-Vector"></use>
        </svg>
      </button>
    </div>
  );
}
