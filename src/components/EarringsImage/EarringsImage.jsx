import { getImageProps } from 'next/image';

export default function EarringsImage() {
  const common = { alt: 'Earrings Example' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 598,
    height: 291,
    quality: 100,
    src: '/earrings@1x_l.jpg',
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 332,
    height: 157,
    quality: 100,
    src: '/earrings@1x_m.jpg',
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 335,
    height: 163,
    quality: 100,
    src: '/earrings@1x_s.jpg',
  });

  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img {...rest} style={{ width: '100%', height: '100%' }} />
    </picture>
  );
}
