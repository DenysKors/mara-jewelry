import { deleteStone } from '@/lib/api';

export async function DELETE(request) {
  const stoneName = await request.json();
  const deletedStone = await deleteStone(stoneName);
  return Response.json(deletedStone);
}
