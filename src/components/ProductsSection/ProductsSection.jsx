'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

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
    if (!searchParams.has('product') && !searchParams.has('stone')) {
      fetch(`/api/all-products?${searchParams.toString()}`)
        .then(res => res.json())
        .then(data => {
          setProductsData(data);
        })
        .finally(setLoading(false));
    } else {
      fetch(`/api/filter-products?${searchParams.toString()}`)
        .then(res => res.json())
        .then(data => {
          setProductsData(data);
        })
        .finally(setLoading(false));
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
        <ProductsList products={productsData.products} />
      )}
      {/* !isLoading && productsData && productsData.totalAmount > PAGINATION_LIMIT && <Pagination totalAmount={productsData.totalAmount} /> */}
      {isLoading && <Skeleton slotsAmount={2} />}
    </>
  );
}
