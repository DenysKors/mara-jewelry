'use client';

import { useState, useEffect } from 'react';

import styles from './ReviewsSection.module.css';

import { reviewData } from '@/app/reviewData';

export default function ReviewsSection() {
  const [review, setReview] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setReview(prevState =>
        review === reviewData.length - 1 ? 0 : prevState + 1
      );
    }, 4500);
    return () => clearInterval(intervalId);
  }, [review]);

  const handleLeftClick = () => {
    setReview(prevState =>
      review === 0 ? reviewData.length - 1 : prevState - 1
    );
  };

  const handleRightClick = () => {
    setReview(prevState =>
      review === reviewData.length - 1 ? 0 : prevState + 1
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{reviewData[review].title}</h2>
        <p className={styles.text}>{reviewData[review].text}</p>
        <p className={styles.author}>{reviewData[review].author}</p>
      </div>
      <div className={styles.box}></div>
      <button
        className={styles.btnLeft}
        type="button"
        aria-label="Prev slide"
        onClick={handleLeftClick}
      >
        <svg
          className={styles.svg}
          viewBox="0 0 84 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="84" y1="3.5" x2="4" y2="3.5" stroke="#096A61" />
          <path
            d="M3.48596 0.669824L3.48518 0.670522L0.659097 3.19384C0.591803 3.25392 0.553897 3.30762 0.532286 3.35265L0.0815229 3.13628L0.532285 3.35265C0.511344 3.39627 0.5 3.44338 0.5 3.50022C0.5 3.55706 0.511344 3.60417 0.532285 3.6478C0.553897 3.69282 0.591803 3.74652 0.659096 3.80661L0.339713 4.16432L0.659097 3.80661L3.48518 6.32992C3.59868 6.43126 3.7002 6.47651 3.79188 6.49255C3.88448 6.50875 4.00183 6.50118 4.15517 6.44256C4.31046 6.38321 4.38847 6.3155 4.42941 6.25957C4.46808 6.20674 4.49973 6.12925 4.5 5.99881V1.00117C4.5 0.871248 4.46855 0.794096 4.42995 0.741357C4.38902 0.685439 4.31079 0.617493 4.15483 0.557751C4.00101 0.498827 3.88362 0.491267 3.79133 0.507414C3.70005 0.523385 3.59897 0.568496 3.48596 0.669824Z"
            fill="#096A61"
            stroke="#096A61"
          />
        </svg>
      </button>
      <button
        className={styles.btnRight}
        type="button"
        aria-label="Next slide"
        onClick={handleRightClick}
      >
        <svg
          className={styles.svg}
          viewBox="0 0 84 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-0.5"
            x2="80"
            y2="-0.5"
            transform="matrix(1 0 0 -1 0 3)"
            stroke="#096A61"
          />
          <path
            d="M80.514 0.669824L80.5148 0.670522L83.3409 3.19384C83.4082 3.25392 83.4461 3.30762 83.4677 3.35265L83.9185 3.13628L83.4677 3.35265C83.4887 3.39627 83.5 3.44338 83.5 3.50022C83.5 3.55706 83.4887 3.60417 83.4677 3.6478C83.4461 3.69282 83.4082 3.74652 83.3409 3.80661L83.6603 4.16432L83.3409 3.80661L80.5148 6.32992C80.4013 6.43126 80.2998 6.47651 80.2081 6.49255C80.1155 6.50875 79.9982 6.50118 79.8448 6.44256C79.6895 6.38321 79.6115 6.3155 79.5706 6.25957C79.5319 6.20674 79.5003 6.12925 79.5 5.99881V1.00117C79.5 0.871248 79.5314 0.794096 79.57 0.741357C79.611 0.685439 79.6892 0.617493 79.8452 0.557751C79.999 0.498827 80.1164 0.491267 80.2087 0.507414C80.3 0.523385 80.401 0.568496 80.514 0.669824Z"
            fill="#096A61"
            stroke="#096A61"
          />
        </svg>
      </button>
    </section>
  );
}
