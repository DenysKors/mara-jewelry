import { cache } from 'react';
import dbConnect from './connectDB';
import Stone from '@/modelsDB/stoneModel';
import Product from '@/modelsDB/productModel';

export const getAllStones = cache(async () => {
  await dbConnect();
  try {
    const stonesData = await Stone.find({}).sort({ name: 1 });
    const stones = JSON.parse(JSON.stringify(stonesData));
    return stones;
  } catch (err) {
    console.log(err.message);
  }
});

export const getAllProducts = async () => {
  await dbConnect();
  try {
    const products = await Product.find({}).sort({ title: 1 });
    console.log(products);
    return products;
  } catch (err) {
    console.log(err.message);
  }
};

export const getFilteredProducts = async (productParams, stoneParams) => {
  await dbConnect();
  try {
    const products = await Product.find({
      $or: [
        { category: { $in: productParams } },
        { 'stones.value': { $in: stoneParams } },
      ],
    }).sort({ title: 1 });
    return products;
  } catch (err) {
    console.log(err.message);
  }
};
