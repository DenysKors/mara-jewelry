'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import ProductsList from '../ProductsList/ProductsList';
import Skeleton from '../Skeleton/Skeleton';

export default function ProductsSection() {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    if (searchParams.toString() === '') {
      fetch('/api/all-products')
        .then(res => res.json())
        .then(({ data }) => {
          setProducts(data);
          setLoading(false);
        });
    } else {
      fetch(`/api/filter-products?${searchParams.toString()}`)
        .then(res => res.json())
        .then(({ data }) => {
          setProducts(data);
          setLoading(false);
        });
    }
  }, [searchParams]);

  return (
    <>
      {!isLoading && products && products.length === 0 && (
        <p style={{ width: '100%', textAlign: 'center' }}>
          За цим запитом нічого не знайдено
        </p>
      )}
      {!isLoading && products && products.length > 0 && (
        <ProductsList products={products} />
      )}
      {isLoading && <Skeleton slotsAmount={2} />}
      {/* Add pagination component here */}
    </>
  );
}
