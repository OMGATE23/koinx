export async function GET(request: Request) {
  try {
    let res = await fetch("https://api.coingecko.com/api/v3/search/trending");
    if (!res.ok) {
      throw new Error("Something went wrong" + res.statusText);
    }
    let data = await res.json();

    return new Response(JSON.stringify(data));
  } catch (error) {
    let err = error as BodyInit | null | undefined;
    return new Response(err);
  }
}
