import { createStone } from '@/lib/api';

export async function POST(request) {
  try {
    const stoneData = await request.json();
    const newStone = await createStone(stoneData);
    return Response.json(newStone);
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error.message), {
      status: 422,
    });
  }
}
