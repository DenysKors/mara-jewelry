'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Navigation.module.css';

import { pageData } from '../../app/pageData';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.list}>
        {pageData.map(({ title, href }) => (
          <li key={title}>
            <Link
              className={`${
                pathname === `${href}` ? styles.navLink_active : styles.navLink
              }`}
              href={href}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
