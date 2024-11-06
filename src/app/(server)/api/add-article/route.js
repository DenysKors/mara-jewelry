import { CreateArticle } from '@/lib/api';

export async function POST(request) {
  const articleData = await request.formData();

  const newArticle = await CreateArticle(articleData);
  return Response.json(newArticle);
}
