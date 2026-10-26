export async function onRequest(context) {
  const response = await context.next();
  const url = new URL(context.request.url);
  
  // Add noindex header for pages.dev domains
  if (url.hostname.includes('pages.dev')) {
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return newResponse;
  }
  
  return response;
}
