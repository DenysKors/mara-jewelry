import { cache } from 'react';
import dbConnect from './connectDB';
import Stone from '@/modelsDB/stoneModel';
import Product from '@/modelsDB/productModel';
import Article from '@/modelsDB/articleModel';

import {
  PRODUCT_PAGINATION_LIMIT,
  ARTICLE_PAGINATION_LIMIT,
} from '@/constants/pagination';

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
  const skip = (paginationPage - 1) * PRODUCT_PAGINATION_LIMIT;

  await dbConnect();
  try {
    const products = await Product.find({}, '', {
      skip,
      limit: PRODUCT_PAGINATION_LIMIT,
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
  const skip = (paginationPage - 1) * PRODUCT_PAGINATION_LIMIT;
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
        limit: PRODUCT_PAGINATION_LIMIT,
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

export const getSearchedProducts = async (decodedQuery, page = 1) => {
  const paginationPage = Number(page);
  const skip = (paginationPage - 1) * PRODUCT_PAGINATION_LIMIT;
  await dbConnect();
  try {
    const products = await Product.find({ title: decodedQuery }, '', {
      skip,
      limit: PRODUCT_PAGINATION_LIMIT,
    })
      .collation({ locale: 'uk', strength: 1 })
      .sort({ title: 1 });

    const totalAmount = await Product.countDocuments({
      title: decodedQuery,
    }).collation({ locale: 'uk', strength: 1 });
    return {
      products,
      totalAmount,
    };
  } catch (err) {
    console.log(err.message);
  }
};

export const getProductByCode = cache(async productCode => {
  await dbConnect();
  try {
    const product = await Product.findOne({ code: productCode });
    return product;
  } catch (err) {
    console.log(err.message);
  }
});

export const getAllArticles = async (page = 1) => {
  const paginationPage = Number(page);
  const skip = (paginationPage - 1) * ARTICLE_PAGINATION_LIMIT;

  await dbConnect();
  try {
    const articles = await Article.find({}, '', {
      skip,
      limit: ARTICLE_PAGINATION_LIMIT,
    }).sort({ title: 1 });

    const totalAmount = await Article.countDocuments();
    return {
      articles,
      totalAmount,
    };
  } catch (err) {
    console.log(err.message);
  }
};
