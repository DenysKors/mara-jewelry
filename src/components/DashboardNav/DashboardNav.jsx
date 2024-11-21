'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './DashboardNav.module.css';

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        title="Аналітика"
        className={`${
          pathname === `/dashboard` ? styles.navLink_active : styles.navLink
        }`}
        href="/dashboard"
      >
        <svg
          className={`${
            pathname === `/dashboard` ? styles.icon_active : styles.icon
          }`}
        >
          <use href="/icons.svg#icon-analytics"></use>
        </svg>
      </Link>
      <Link
        title="Додати товар"
        className={`${
          pathname === `/dashboard/add-product`
            ? styles.navLink_active
            : styles.navLink
        }`}
        href="/dashboard/add-product"
      >
        <svg
          className={`${
            pathname === `/dashboard/add-product`
              ? styles.icon_active
              : styles.icon
          }`}
        >
          <use href="/icons.svg#icon-add-product"></use>
        </svg>
      </Link>
      <Link
        title="Додати статтю"
        className={`${
          pathname === `/dashboard/add-article`
            ? styles.navLink_active
            : styles.navLink
        }`}
        href="/dashboard/add-article"
      >
        <svg
          className={`${
            pathname === `/dashboard/add-article`
              ? styles.icon_active
              : styles.icon
          }`}
        >
          <use href="/icons.svg#icon-add-article"></use>
        </svg>
      </Link>
      <Link
        title="Додати камінь"
        className={`${
          pathname === `/dashboard/add-stone`
            ? styles.navLink_active
            : styles.navLink
        }`}
        href="/dashboard/add-stone"
      >
        <svg
          className={`${
            pathname === `/dashboard/add-stone`
              ? styles.icon_active
              : styles.icon
          }`}
        >
          <use href="/icons.svg#icon-add-stone"></use>
        </svg>
      </Link>
      <Link
        title="Видалити"
        className={`${
          pathname === `/dashboard/delete`
            ? styles.navLink_active
            : styles.navLink
        }`}
        href="/dashboard/delete"
      >
        <svg
          className={`${
            pathname === `/dashboard/delete` ? styles.icon_active : styles.icon
          }`}
        >
          <use href="/icons.svg#icon-delete"></use>
        </svg>
      </Link>
    </nav>
  );
}
