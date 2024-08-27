import { cache } from 'react';
import dbConnect from './connectDB';
import Stone from '@/models/stoneModel';
import Product from '@/models/productModel';

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
    // const products = JSON.parse(JSON.stringify(productsData));
    return products;
  } catch (err) {
    console.log(err.message);
  }
};
