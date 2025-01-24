import Image from 'next/image';

import styles from './page.module.css';
import Logo from '../../../assets/images/Logo.png';

import DashboardNav from '@/components/DashboardNav/DashboardNav';
import { signOut } from '@/auth';

export default function DashboardLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imageBox}>
          <Image
            src={Logo}
            priority
            className={styles.image}
            alt="Mara Jewelry Logo"
          />
          <strong className={styles.title}>Панель адміністратора</strong>
        </div>
        <button
          type="button"
          aria-label="sing-out"
          title="Вийти"
          style={{ backgroundColor: 'inherit' }}
        >
          <svg className={styles.icon}>
            <use href="/icons.svg#icon-sign-out"></use>
          </svg>
        </button>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button type="submit">Вийти</button>
        </form>
      </header>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <DashboardNav />
        </aside>
        {children}
      </main>
      <footer className={styles.footer}>
        <span className={styles.copy}>
          &copy; 2024 MaraJewelry, All Rights Reserved
        </span>
        <span className={styles.dev}>Created by DenExplorer</span>
      </footer>
    </>
  );
}
