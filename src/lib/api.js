import { cache } from 'react';

import dbConnect from './connectDB';
import Stone from '@/modelsDB/stoneModel';
import Product from '@/modelsDB/productModel';
import Article from '@/modelsDB/articleModel';
import { uploadImage } from './cloudinaryUpload';
import { deleteImage } from './cloudinaryDelete';

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

export const createProduct = async productData => {
  const title = productData.get('title');
  const description = productData.get('description');
  const category = productData.get('category');
  const stones = JSON.parse(productData.get('stones'));
  const images = productData.getAll('image');
  const wideImage = productData.get('wideImage');
  const price = productData.get('price');
  const imagesAmount = images.length;
  const ImgIdArray = [];

  for (let i = 0; i < imagesAmount; i += 1) {
    let file = images[i];

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

  if (
    !(
      wideImage.type === 'image/jpeg' ||
      wideImage.type === 'image/jpg' ||
      wideImage.type === 'image/png' ||
      wideImage.type === 'image/webp'
    )
  ) {
    throw new Error('Invalid File Type', { statusCode: 412 });
  }

  let wideImageBuffer = await wideImage.arrayBuffer();
  let mimeType = wideImage.type;
  let encoding = 'base64';
  let base64Data = Buffer.from(wideImageBuffer).toString('base64');
  let wideImageUri = `data:${mimeType};${encoding},${base64Data}`;
  const cloudinaryWideImgId = await uploadImage(wideImageUri);

  const product = {
    code: Date.now().toString().slice(-4),
    title,
    description,
    category,
    stones,
    imagesUrl: ImgIdArray,
    wideImageUrl: cloudinaryWideImgId,
    price,
    sell_status: 'в наявності',
  };

  await dbConnect();

  try {
    const createdProduct = await Product.create(product);
    return createdProduct;
  } catch (err) {
    console.log(err.message);
  }
};

export const createArticle = async articleData => {
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

export const getAllStonesAdmin = async () => {
  await dbConnect();
  try {
    const stones = await Stone.find({}, { _id: 0 }).sort({ name: 1 });
    return stones;
  } catch (err) {
    console.log(err.message);
  }
};

export const createStone = async stoneData => {
  await dbConnect();

  try {
    const createdStone = await Stone.create(stoneData);
    return createdStone;
  } catch (err) {
    if (err.code === 11000) {
      throw new Error(
        `Значення ${
          err.keyValue.name ? err.keyValue.name : err.keyValue.value
        } вже існує`
      );
    } else console.log(err);
  }
};

export const deleteStone = async stoneName => {
  await dbConnect();

  try {
    const deletedStone = await Stone.deleteOne({ name: stoneName });
    return deletedStone;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteProduct = async productCode => {
  await dbConnect();

  try {
    const product = await Product.findOne({ code: productCode });

    if (!product) return { deletedCount: 0 };

    const { imagesUrl, wideImageUrl } = product;
    imagesUrl.push(wideImageUrl);

    await deleteImage(imagesUrl);

    const result = await Product.deleteOne({ code: productCode });
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteArticle = async articleCode => {
  await dbConnect();

  try {
    const article = await Article.findOne({ code: articleCode });

    if (!article) return { deletedCount: 0 };

    const { parts } = article;
    const ImgIdArray = [];

    parts.forEach(part => {
      ImgIdArray.push(part.imageUrl);
    });

    await deleteImage(ImgIdArray);

    const result = await Article.deleteOne({ code: articleCode });
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

export const updateProduct = async productData => {
  await dbConnect();

  try {
    const updatedProduct = await Product.updateOne(
      { code: productData.code },
      { price: productData.price, sell_status: productData.sell_status }
    );
    return updatedProduct;
  } catch (err) {
    console.log(err.message);
  }
};
