import mongoose from 'mongoose';

import { CATEGORIES_ENUMS, SELL_STATUS_ENUMS } from '@/constants/enums';

const Product = mongoose.Schema(
  {
    code: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: Object.keys(CATEGORIES_ENUMS),
      required: true,
    },
    stones: {
      type: [{ name: String, value: String }],
      required: true,
    },
    imagesUrl: {
      type: [String],
      required: true,
    },
    wideImageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sell_status: {
      type: String,
      enum: Object.values(SELL_STATUS_ENUMS),
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Product || mongoose.model('Product', Product);
