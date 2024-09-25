'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import styles from './ProductsSection.module.css';
import ProductsList from '../ProductsList/ProductsList';
import Skeleton from '../Skeleton/Skeleton';
import Pagination from '../Pagination/Pagination';
import { PAGINATION_LIMIT } from '@/constants/pagination';

export default function ProductsSection() {
  const [productsData, setProductsData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    if (
      !searchParams.has('product') &&
      !searchParams.has('stone') &&
      !searchParams.has('search')
    ) {
      fetch(`/api/all-products?${searchParams.toString()}`)
        .then(res => res.json())
        .then(data => {
          setProductsData(data);
          setLoading(false);
        });
    } else if (searchParams.has('search')) {
      fetch(`/api/search-products?${searchParams.toString()}`)
        .then(res => res.json())
        .then(data => {
          setProductsData(data);
          setLoading(false);
        });
    } else {
      fetch(`/api/filter-products?${searchParams.toString()}`)
        .then(res => res.json())
        .then(data => {
          setProductsData(data);
          setLoading(false);
        });
    }
  }, [searchParams]);

  return (
    <>
      {!isLoading && productsData && productsData.products.length === 0 && (
        <p style={{ width: '100%', textAlign: 'center' }}>
          За цим запитом нічого не знайдено
        </p>
      )}
      {!isLoading && productsData && productsData.products.length > 0 && (
        <div className={styles.container}>
          <ProductsList products={productsData.products} />
          {productsData.totalAmount > PAGINATION_LIMIT && (
            <Pagination totalAmount={productsData.totalAmount} />
          )}
        </div>
      )}
      {isLoading && <Skeleton slotsAmount={2} />}
    </>
  );
}
