import { getSearchedProducts } from '@/lib/api';

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const queryParams = searchParams.get('search');
  const decodedQuery = decodeURI(queryParams);
  const page = searchParams.get('page') || 1;

  const data = await getSearchedProducts(decodedQuery, page);
  return Response.json(data);
}
