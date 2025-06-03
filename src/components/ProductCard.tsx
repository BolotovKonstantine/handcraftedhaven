// import { Product } from '@prisma/client';

import { Product } from '@/types/Product';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <img
        src={product.images[0] || '/placeholder.jpg'}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price}</p>
    </div>
  );
}