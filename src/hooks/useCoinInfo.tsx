"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type CoinInfo = {
  symbol: string;
  image: {
    small: string;
  };
};
function getApiUrl(coin: string): string {
  return `https://api.coingecko.com/api/v3/coins/${coin}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
}
const useCoinInfo = (coin: string = "bitcoin") => {
  let params = useParams();
  coin = (params.coin as string) || coin;
  const [coinInfo, setCoinInfo] = useState<CoinInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    setLoading(true);
    fetch(getApiUrl(coin))
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setCoinInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err);
        setLoading(false);
      });
  }, [coin]);

  return { coinInfo, loading, error };
};

export default useCoinInfo;
