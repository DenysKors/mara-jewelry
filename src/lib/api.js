import { cache } from 'react';

import dbConnect from './connectDB';
import Stone from '@/modelsDB/stoneModel';
import Product from '@/modelsDB/productModel';
import Article from '@/modelsDB/articleModel';
import { uploadImage } from './cloudinaryUpload';

import {
  PRODUCT_PAGINATION_LIMIT,
  ARTICLE_PAGINATION_LIMIT,
} from '@/constants/pagination';

export const getAllStones = cache(async () => {
  await dbConnect();
  try {
    const stonesData = await Stone.find({}, { _id: 0 }).sort({ name: 1 });
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

export const getAllArticles = cache(async (page = 1) => {
  const paginationPage = Number(page);
  const skip = (paginationPage - 1) * ARTICLE_PAGINATION_LIMIT;

  await dbConnect();
  try {
    const articles = await Article.find({}, '', {
      skip,
      limit: ARTICLE_PAGINATION_LIMIT,
    }).sort({ createdAt: -1 });

    const totalAmount = await Article.countDocuments();
    return {
      articles,
      totalAmount,
    };
  } catch (err) {
    console.log(err.message);
  }
});

export const getArticleByCode = cache(async articleCode => {
  await dbConnect();
  try {
    const article = await Article.findOne({ code: articleCode });
    return article;
  } catch (err) {
    console.log(err.message);
  }
});

export const getAnalytics = async () => {
  await dbConnect();
  try {
    const productsAmount = await Product.countDocuments();
    const articlesAmount = await Article.countDocuments();
    return {
      productsAmount,
      articlesAmount,
    };
  } catch (err) {
    console.log(err.message);
  }
};

export const CreateArticle = async articleData => {
  const title = articleData.get('title');
  const parts = JSON.parse(articleData.get('parts'));
  const partsAmount = parts.length;
  const ImgIdArray = [];

  for (let i = 0; i < partsAmount; i += 1) {
    let file = articleData.get(`image${i}`);
    if (
      !(
        file.type === 'image/jpeg' ||
        file.type === 'image/jpg' ||
        file.type === 'image/png' ||
        file.type === 'image/webp'
      )
    ) {
      throw new Error('Invalid File Type', { statusCode: 412 });
    }
    let fileBuffer = await file.arrayBuffer();
    let mimeType = file.type;
    let encoding = 'base64';
    let base64Data = Buffer.from(fileBuffer).toString('base64');
    let fileUri = `data:${mimeType};${encoding},${base64Data}`;
    let cloudinaryImgId = await uploadImage(fileUri);
    ImgIdArray.push(cloudinaryImgId);
  }

  parts.forEach((part, idx) => {
    part.imageUrl = ImgIdArray[idx];
  });

  const article = {
    code: Date.now().toString().slice(-4),
    title,
    parts,
  };

  await dbConnect();

  try {
    const createdArticle = await Article.create(article);
    return createdArticle;
  } catch (err) {
    console.log(err.message);
  }
};
