import Image from 'next/image';

import styles from './page.module.css';
import Logo from '../../../assets/images/Logo.png';

export default function LoginLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Image
          src={Logo}
          className={styles.image}
          alt="Mara Jewelry Logo"
          priority
        />
      </header>
      {children}
      <footer className={styles.footer}>
        <div className={styles.copyBox}>
          <span className={styles.copy}>
            &copy; 2024 MaraJewelry, All Rights Reserved
          </span>
          <span className={styles.dev}>Created by DenExplorer</span>
        </div>
      </footer>
    </>
  );
}
