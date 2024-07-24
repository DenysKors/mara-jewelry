'use client';

import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import hero1_s from '../../assets/images/hero_bg1@1x_s.jpg';
import hero2_s from '../../assets/images/hero_bg2@1x_s.jpg';
import hero3_s from '../../assets/images/hero_bg3@1x_s.jpg';
import hero4_s from '../../assets/images/hero_bg4@1x_s.jpg';
import hero5_s from '../../assets/images/hero_bg5@1x_s.jpg';
import hero6_s from '../../assets/images/hero_bg6@1x_s.jpg';

export default function HeroCarousel() {
  return (
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
    >
      <div>
        <Image src={hero1_s} alt="image1" />
      </div>
      <div>
        <Image src={hero2_s} alt="image2" />
      </div>
      <div>
        <Image src={hero3_s} alt="image3" />
      </div>
      <div>
        <Image src={hero4_s} alt="image4" />
      </div>
      <div>
        <Image src={hero5_s} alt="image5" />
      </div>
      <div>
        <Image src={hero6_s} alt="image6" />
      </div>
    </Carousel>
  );
}
