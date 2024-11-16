import { createArticle } from '@/lib/api';

export async function POST(request) {
  const articleData = await request.formData();

  const newArticle = await createArticle(articleData);
  return Response.json(newArticle);
}
