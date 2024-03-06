"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type CoinData = {
  inr: number;
  coinName: string;
  inr_24h_change: number;
  usd: number;
  usd_24h_change: number;
};

const useCoinData = (coin: string = "bitcoin") => {
  let params = useParams();
  coin = (params.coin as string) || coin;
  const [coinData, setCoinData] = useState<CoinData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/coin?coin=${coin}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        const coinName = Object.keys(data)[0];
        const coinData = { coinName, ...data[coinName] };
        setCoinData(coinData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        console.error(err);
        setLoading(false);
      });
  }, [coin]);

  return { coinData, loading, error };
};

export default useCoinData;
