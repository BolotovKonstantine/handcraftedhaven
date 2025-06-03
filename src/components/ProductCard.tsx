// import { Product } from '@prisma/client';

import Link from 'next/link';
import { Product } from '@/types/Product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      {//<img src={product.images[0] || '/placeholder.jpg'} alt={product.name} />
      }
      <img src={'/placeholder.svg'} alt={product.name} />
      <Link href={`/products/${product.id}`}>
        <h3>{product.name}</h3>
      </Link>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
      <p style={{ fontSize: '0.85rem', color: '#666' }}>by {product.artisan}</p>
    </div>
  );
}