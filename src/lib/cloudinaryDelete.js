// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

import cloudinary from '@/utils/cloudinary';

export const deleteImage = async publicID => {
  try {
    const result = await cloudinary.api.delete_resources(publicID);
    return result;
  } catch (error) {
    console.error(error);
  }
};
