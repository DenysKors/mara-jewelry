import styles from './Skeleton.module.css';

export default function Skeleton({ slotsAmount = 3 }) {
  return (
    <div className={styles.container}>
      {[...Array(slotsAmount)].map((_, idx) => {
        return (
          <div key={idx}>
            <div className={styles.thumb}>
              <div className={`${styles.img} ${styles.skeleton}`}></div>
              <div className={styles.textBox}>
                <div className={`${styles.linkTitle} ${styles.skeleton}`}></div>
                <div className={`${styles.linkText} ${styles.skeleton}`}></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
