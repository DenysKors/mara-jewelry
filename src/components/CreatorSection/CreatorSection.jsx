import styles from './CreatorSection.module.css';

import CreatorImage from '../CreatorImage/CreatorImage';

export default function CreatorSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Про творця</h2>
      <div className={styles.box}>
        <div className={styles.background}></div>
        <div className={styles.thumb}>
          <CreatorImage />
        </div>
      </div>
      <p className={styles.text}>
        Мене звуть Юлія і я з дитинства захоплююсь каменями та мінералами.
        Завжди відчувала незвичайну прив&apos;язанність до прикрас саме з
        каменю, які не лише красиві, а й мають енергію землі. <br />З часом моє
        захоплення каменями переросло в бажання створювати прикраси. Завдяки
        вивченню літотерапії кожна прикраса поєднує в собі не лише естетичні
        аспекти, а і гармонізує енергетично свого власника. Обираючи собі
        прикрасу, Ви обираєте своє відображення в природі, підкресливши Вашу
        особистість.
      </p>
    </section>
  );
}
