export async function GET (request ){
  const result = [1,2,3]
  return new Response(JSON.stringify(result));
}