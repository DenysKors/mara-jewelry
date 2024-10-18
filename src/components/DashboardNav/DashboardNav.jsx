'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './DashboardNav.module.css';

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
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
    </nav>
  );
}
