"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type TrendingCoins = {
  item: {
    coin_id: number;
    name: string;
    small: string;
    data: {
      sparkline: string;
      price: string;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}[];
const TrendingCoinsContext = createContext<TrendingCoins>([]);

export function useTrendingCoinsContext() {
  let context = useContext(TrendingCoinsContext);
  if (!context) {
    throw new Error("Out of Trending Coins Context Provider");
  }
  return context;
}
const TrendingCoinsContextProdiver = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    fetch("/api/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrendingCoins(data.coins);
      });
  }, []);
  return (
    <TrendingCoinsContext.Provider value={trendingCoins}>
      {children}
    </TrendingCoinsContext.Provider>
  );
};

export default TrendingCoinsContextProdiver;
