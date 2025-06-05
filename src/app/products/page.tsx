'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
// import { Product } from '@prisma/client';
import { Product } from '@/types/Product';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    priceMin: '',
    priceMax: '',
  });

  const fetchProducts = async () => {
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`/api/products?${query}`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <div style={{ maxWidth: '960px', width: '100%' }}>
        <SearchBar
          filters={filters}
          setFilters={setFilters}
          onSearch={fetchProducts}
        />
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
