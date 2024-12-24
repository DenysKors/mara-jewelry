import { updateProduct } from '@/lib/api';

export async function PATCH(request) {
  const productData = await request.json();
  const updatedProduct = await updateProduct(productData);
  return Response.json(updatedProduct);
}
