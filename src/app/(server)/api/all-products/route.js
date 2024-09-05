import { getAllProducts } from '@/lib/api';

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.get('page') || 1;
  const data = await getAllProducts(page);
  return Response.json(data);
}
