import Image from 'next/image';

import styles from './page.module.css';
import Logo from '../../../assets/images/Logo.png';

export default function LoginLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Image
          width={64}
          height={64}
          src={Logo}
          className={styles.image}
          priority
          alt="Mara Jewelry Logo"
        />
      </header>
      {children}
      <footer className={styles.footer}>
        <span className={styles.copy}>
          &copy; 2024 MaraJewelry, All Rights Reserved
        </span>
        <span className={styles.dev}>Created by DenExplorer</span>
      </footer>
    </>
  );
}
