'use client';

import { CldUploadWidget } from 'next-cloudinary';

export default function CloudinaryWidget() {
  return (
    <CldUploadWidget
      signatureEndpoint="/api/sign-cloudinary-params"
      onSuccess={results => console.log(results.info)}
    >
      {({ open }) => {
        return <button onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
}
