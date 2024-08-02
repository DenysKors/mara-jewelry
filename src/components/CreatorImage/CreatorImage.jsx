import { getImageProps } from 'next/image';

export default function CreatorImage() {
  const common = { alt: 'Yulia' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 510,
    height: 551,
    quality: 100,
    src: '/creator@1x_l.png',
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 274,
    height: 475,
    quality: 100,
    src: '/creator@1x_m.png',
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 274,
    height: 411,
    quality: 100,
    src: '/creator@1x_s.png',
  });

  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img {...rest} alt="Yulia" style={{ width: '100%', height: '100%' }} />
    </picture>
  );
}
