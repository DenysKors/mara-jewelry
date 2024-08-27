'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import ProductsList from '../ProductsList/ProductsList';

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.toString() === '') {
      fetch('/api/all-products')
        .then(res => res.json())
        .then(({ data }) => {
          setProducts(data);
        });
    } else {
      for (const key of searchParams.keys()) {
        console.log(key);
      }
    }
  }, [searchParams]);

  return (
    <>
      {products.length === 0 && (
        <p style={{ width: '100%', textAlign: 'center' }}>
          За цим запитом нічого не знайдено
        </p>
      )}
      {products.length > 0 && <ProductsList products={products} />}
      {/* Add pagination component here */}
    </>
  );
}
