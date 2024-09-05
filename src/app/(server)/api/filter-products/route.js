import { getFilteredProducts } from '@/lib/api';

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const productParams = searchParams.getAll('product');
  const stoneParams = searchParams.getAll('stone');
  const page = searchParams.get('page') || 1;
  const data = await getFilteredProducts(productParams, stoneParams, page);
  return Response.json(data);
}
