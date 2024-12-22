import { getProductByCode } from '@/lib/api';

export async function GET(_, { params }) {
  const productCode = (await params).code;
  const data = await getProductByCode(productCode);

  if (!data) {
    return new Response(_, {
      status: 404,
      statusText: 'Product not found',
    });
  } else {
    return Response.json(data);
  }
}
