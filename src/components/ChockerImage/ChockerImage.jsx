import { getImageProps } from 'next/image';

export default function ChockerImage() {
  const common = { alt: 'Chocker Example' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 333,
    height: 305,
    quality: 100,
    src: '/chocker@1x_l.jpg',
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 176,
    height: 161,
    quality: 100,
    src: '/chocker@1x_m.jpg',
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 158,
    height: 145,
    quality: 100,
    src: '/chocker@1x_s.jpg',
  });

  return (
    <picture>
      <source media="(min-width: 1200px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <source media="(max-width: 767px)" srcSet={mobile} />
      <img {...rest} style={{ width: '100%', height: 'auto' }} />
    </picture>
  );
}
