import { getAllProducts } from '@/lib/api';

export async function GET() {
  const data = await getAllProducts();
  return Response.json({ data });
}
