import { getImageProps } from 'next/image';

export default function NecklaceImage() {
  const common = { alt: 'Necklace Example' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 422,
    height: 291,
    quality: 100,
    src: '/necklace@1x_l.jpg',
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 226,
    height: 157,
    quality: 100,
    src: '/necklace@1x_m.jpg',
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 158,
    height: 145,
    quality: 100,
    src: '/necklace@1x_s.jpg',
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
