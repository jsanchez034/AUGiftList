import sendProof from '@/utils/sendProof';

export async function POST(request: Request) {
  const { name } = await request.json();

  const gift = await sendProof(name);

  return new Response(JSON.stringify({ gift }));
}
