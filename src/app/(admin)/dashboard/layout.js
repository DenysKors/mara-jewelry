import Image from 'next/image';
import dynamic from 'next/dynamic';

import styles from './page.module.css';
import Logo from '../../../assets/images/Logo.png';

const DashboardNav = dynamic(
  () => import('../../../components/DashboardNav/DashboardNav'),
  {
    ssr: false,
  }
);

export default function DashboardLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Image
          width={32}
          height={32}
          src={Logo}
          priority
          className={styles.image}
          alt="Mara Jewelry Logo"
        />
        <strong className={styles.title}>Панель адміністратора</strong>
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
