import Image from 'next/image';
import dynamic from 'next/dynamic';

import styles from './page.module.css';
import Logo from '../../../assets/images/Logo.png';

const NavSection = dynamic(
  () => import('../../../components/DashboardNav/DashboardNav'),
  {
    ssr: false,
  }
);

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
      </header>
      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <NavSection />
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
