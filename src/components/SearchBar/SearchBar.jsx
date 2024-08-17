import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <form className={styles.form}>
      <button className={styles.button}>
        <svg className={styles.svg}>
          <use href="./icons.svg#icon-search"></use>
        </svg>
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
