import Image from 'next/image';
import styles from './SearchBar.module.css';

import searchIcon from '../../assets/svg/header/search.svg';

export default function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <Image src={searchIcon} className={styles.svg} alt="search" priority />
      </button>
      <input className={styles.input} type="text" placeholder="Пошук..." />
    </div>
  );
}
