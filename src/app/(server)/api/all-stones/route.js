import { getAllStonesAdmin } from '@/lib/api';

export async function GET() {
  const data = await getAllStonesAdmin();
  return Response.json(data);
}
