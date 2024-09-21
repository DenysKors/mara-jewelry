'use client';

import { CldImage as CldImageDefault } from 'next-cloudinary';

export default function CloudinaryImage(props) {
  return <CldImageDefault {...props} />;
}
