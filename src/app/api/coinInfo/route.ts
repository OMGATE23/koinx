export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const param = searchParams.get("coin");
    let res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${param}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
    );
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
