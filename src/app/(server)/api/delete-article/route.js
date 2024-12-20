import { deleteArticle } from '@/lib/api';

export async function DELETE(request) {
  const articleCode = await request.json();
  const result = await deleteArticle(articleCode);

  if (result.deletedCount === 0) {
    return new Response(_, {
      status: 404,
      statusText: 'Article not found',
    });
  } else {
    return Response.json(result);
  }
}
