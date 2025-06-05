import { Product } from '@/types/Product';
import path from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductDetailPage({ params }: Props) {
  const filePath = path.join(process.cwd(), 'public/data/products.json');
  const fileData = await fs.readFile(filePath, 'utf-8');
  const products: Product[] = JSON.parse(fileData);

  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <main>
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img
            //src={product.images[0] || '/placeholder.svg'}
            src={'/placeholder.svg'}
            alt={product.name}
          />
        </div>
        <div className="product-detail-content">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="artisan-name">by {product.artisan}</p>
          <p className="product-categories">
            Categories: {product.categories.join(', ')}
          </p>
          <button className="cta-button">Add Review</button>
        </div>
      </div>
    </main>
  );
}
