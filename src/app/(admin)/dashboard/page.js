import dynamic from 'next/dynamic';

import styles from './page.module.css';

const DashboardNav = dynamic(
  () => import('../../../components/DashboardNav/DashboardNav'),
  {
    ssr: false,
  }
);

export default function DashboardPage() {
  return (
    <main className={styles.main}>
      <aside className={styles.sidebar}>
        <DashboardNav />
      </aside>
    </main>
  );
}
