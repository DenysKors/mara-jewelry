import mongoose from 'mongoose';

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
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['чокер', 'намисто', 'браслет', 'чотки', 'сережки'],
      required: true,
    },
    stones: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sell_status: {
      type: String,
      enum: ['в наявності', 'немає в наявності', 'під замовлення'],
      required: true,
    },
  },
  { timeStamps: true }
);
export default mongoose.models.Product || mongoose.model('Product', Product);
