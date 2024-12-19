import { deleteProduct } from '@/lib/api';

export async function DELETE(request) {
  const productCode = await request.json();
  const result = await deleteProduct(productCode);

  if (result.deletedCount === 0) {
    return new Response(_, {
      status: 404,
      statusText: 'Product not found',
    });
  } else {
    return Response.json(result);
  }
}
