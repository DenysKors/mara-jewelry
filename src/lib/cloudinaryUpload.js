// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

import cloudinary from '@/utils/cloudinary';

export const uploadImage = async fileUri => {
  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      resource_type: 'image',
      overwrite: true,
    });
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};
