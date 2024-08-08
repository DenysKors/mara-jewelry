import styles from './InstagramSection.module.css';

export default function InstagramSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Ми в instagram</h2>
      <div className={styles.container}>
        <div className={styles.boxText}>дізнавайтесь першими про новинки!</div>
        <div className={styles.boxImage1}></div>
        <div className={styles.boxLink}>
          <div className={styles.boxImage2}></div>
          <a
            className={styles.link}
            href="https://www.instagram.com/mara_jewelryua?igsh=MTN5emJhbTNsc2NnYQ=="
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
          >
            перейти в instagram
            <svg
              className={styles.svg}
              viewBox="0 0 157 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="3.5" x2="152" y2="3.5" stroke="#096A61" />
              <path
                d="M153.516 0.669824L153.517 0.670522L156.343 3.19384C156.41 3.25392 156.448 3.30762 156.47 3.35265L156.92 3.13628L156.47 3.35265C156.491 3.39627 156.502 3.44338 156.502 3.50022C156.502 3.55706 156.491 3.60417 156.47 3.6478C156.448 3.69282 156.41 3.74652 156.343 3.80661L156.662 4.16432L156.343 3.80661L153.517 6.32992C153.403 6.43126 153.302 6.47651 153.21 6.49255C153.117 6.50875 153 6.50118 152.847 6.44256C152.691 6.38321 152.613 6.3155 152.573 6.25957C152.534 6.20674 152.502 6.12925 152.502 5.99881V1.00117C152.502 0.871248 152.533 0.794096 152.572 0.741357C152.613 0.685439 152.691 0.617493 152.847 0.557751C153.001 0.498827 153.118 0.491267 153.211 0.507414C153.302 0.523385 153.403 0.568496 153.516 0.669824Z"
                fill="#096A61"
                stroke="#096A61"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
