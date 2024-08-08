'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './HeroCarousel.module.css';
import { Carousel } from 'react-responsive-carousel';

export default function HeroCarousel() {
  return (
    <>
      <Carousel
        animationHandler="fade"
        interval={5000}
        autoPlay={true}
        infiniteLoop={true}
        useKeyboardArrows={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        swipeable={false}
        stopOnHover={false}
      >
        <div className={styles.image1}></div>
        <div className={styles.image2}></div>
        <div className={styles.image3}></div>
        <div className={styles.image4}></div>
        <div className={styles.image5}></div>
        <div className={styles.image6}></div>
      </Carousel>
    </>
  );
}
