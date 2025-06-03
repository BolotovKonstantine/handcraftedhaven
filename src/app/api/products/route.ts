import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(req: NextRequest) {
  const filePath = path.join(process.cwd(), 'public/data/products.json');
  const fileData = await fs.readFile(filePath, 'utf-8');
  const products = JSON.parse(fileData);

  const { searchParams } = req.nextUrl;
  const search = searchParams.get('search')?.toLowerCase() || '';
  const category = searchParams.get('category')?.toLowerCase();
  const priceMin = parseFloat(searchParams.get('priceMin') || '0');
  const priceMax = parseFloat(searchParams.get('priceMax') || '999999');

  const filtered = products.filter((product: any) => {
    const matchName = product.name.toLowerCase().includes(search);
    const matchCategory = category
      ? product.categories.some((cat: string) => cat.toLowerCase() === category)
      : true;
    const matchPrice = product.price >= priceMin && product.price <= priceMax;

    return matchName && matchCategory && matchPrice;
  });

  return NextResponse.json(filtered);
}
