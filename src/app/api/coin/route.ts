import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const param = request.nextUrl.searchParams.get("coin");
    let res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${
        param || "bitcoin"
      }&vs_currencies=inr%2Cusd&include_24hr_change=true`
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
