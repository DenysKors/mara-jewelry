import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" placeholder="Пошук..." />
    </div>
  );
}
