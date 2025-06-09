
import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Props = {
  params: { id: string };
};

export default async function ProductDetailPage({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: {
      categories: {
        include: { category: true },
      },
      artisan: true,
    },
  });

  if (!product) return notFound();

  const categoryNames = product.categories.map((c) => c.category.name);

  return (
    <main>
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img
            //src={product.images[0] || '/placeholder.jpg'}
            src={'/placeholder.svg'}
            alt={product.name}
          />
        </div>
        <div className="product-detail-content">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="artisan-name">by {product.artisan.name}</p>
          <p className="product-categories">
            Categories: {categoryNames.join(', ')}
          </p>
          <button className="cta-button">Add to Cart</button>
        </div>
      </div>
    </main>
  );
}