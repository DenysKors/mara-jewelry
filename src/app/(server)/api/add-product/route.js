import { createProduct } from '@/lib/api';

export async function POST(request) {
  const productData = await request.formData();

  const newProduct = await createProduct(productData);
  return Response.json(newProduct);
}
