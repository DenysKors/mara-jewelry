import Image from 'next/image';
import SearchBar from '../SearchBar/SearchBar';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

import Logo from '../../assets/images/Logo.png';

import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <SearchBar />
        <Image
          src={Logo}
          className={styles.image}
          alt="Mara Jewelry Logo"
          priority
        />
        <>
          <Link href="/dashboard">Dashboard</Link>
        </>
      </div>
      <Navigation />
    </header>
  );
}
