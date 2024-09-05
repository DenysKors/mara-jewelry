import { cache } from 'react';
import dbConnect from './connectDB';
import Stone from '@/modelsDB/stoneModel';
import Product from '@/modelsDB/productModel';

import { PAGINATION_LIMIT } from '@/constants/pagination';

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

export const getAllProducts = async (page = 1) => {
  const paginationPage = Number(page);
  const skip = (paginationPage - 1) * PAGINATION_LIMIT;

  await dbConnect();
  try {
    const products = await Product.find({}, '', {
      skip,
      limit: PAGINATION_LIMIT,
    }).sort({ title: 1 });

    const totalAmount = await Product.countDocuments();
    return {
      products,
      totalAmount,
    };
  } catch (err) {
    console.log(err.message);
  }
};

export const getFilteredProducts = async (
  productParams,
  stoneParams,
  page = 1
) => {
  const paginationPage = Number(page);
  const skip = (paginationPage - 1) * PAGINATION_LIMIT;
  await dbConnect();
  try {
    const products = await Product.find(
      {
        $or: [
          { category: { $in: productParams } },
          { 'stones.value': { $in: stoneParams } },
        ],
      },
      '',
      {
        skip,
        limit: PAGINATION_LIMIT,
      }
    ).sort({ title: 1 });

    const totalAmount = await Product.countDocuments({
      $or: [
        { category: { $in: productParams } },
        { 'stones.value': { $in: stoneParams } },
      ],
    });

    return {
      products,
      totalAmount,
    };
  } catch (err) {
    console.log(err.message);
  }
};
