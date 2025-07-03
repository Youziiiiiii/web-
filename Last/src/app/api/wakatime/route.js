export const dynamic = 'force-dynamic';

export async function GET() {
  const response = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=waka_2446d246-3458-4cdd-bdff-2a21de3c9fec');
  return new Response(response.body, {
    headers: {
      'Access-Control-Allow-Origin': '*' 
    }
  });
}