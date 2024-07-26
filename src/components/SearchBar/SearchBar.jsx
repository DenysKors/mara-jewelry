import Image from 'next/image';
import styles from './SearchBar.module.css';

import searchIcon from '../../assets/svg/search.svg';

export default function SearchBar() {
  return (
    <form className={styles.form}>
      <button className={styles.button}>
        <Image src={searchIcon} className={styles.svg} alt="search" />
      </button>
      <input
        className={styles.input}
        type="text"
        name="text"
        placeholder="Пошук..."
      />
    </form>
  );
}
