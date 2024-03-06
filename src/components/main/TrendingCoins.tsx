"use client";
import { useTrendingCoinsContext } from "@/context/TrendingCoinsContext";
import React, { useState } from "react";
let COINS: { name: string; change: number; src: string }[] = [
  {
    name: "Ethereum(ETH)",
    change: 8.21,
    src: "/assets/ethereum.svg",
  },
  {
    name: "Bitcoin (BTC)",
    change: 5.26,
    src: "/assets/bitcoin.svg",
  },
  {
    name: "Polygon (MATIC)",
    change: 4.32,
    src: "/assets/polygon.svg",
  },
];
const TrendingCoins = () => {
  let coins = useTrendingCoinsContext();
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg justify-center items-start w-full bg-white">
      <p className="font-[500] text-lg">{"Trending Coins (24h)"}</p>
      <ul className="flex flex-col gap-4 w-full">
        {!(coins.length > 0) &&
          COINS.map((coin) => (
            <li key={coin.name} className="flex justify-between px-2">
              <p className="flex items-center gap-2">
                <img alt={coin.name} width={24} height={24} src={coin.src} />
                {coin.name}
              </p>
              <span className="flex gap-2 bg-[#EBF9F4] text-[#14B079] px-2 py-1 rounded-md">
                <img alt="arrow" src="/assets/arrow.svg" />
                {coin.change}%
              </span>
            </li>
          ))}
        {coins.length > 0 &&
          coins.slice(0, 3).map(({ item }) => (
            <li key={item.coin_id} className="flex justify-between px-2">
              <p className="flex items-center gap-2">
                <img alt={item.name} width={24} height={24} src={item.small} />
                {item.name}
              </p>
              <span className="flex gap-2 bg-[#EBF9F4] text-[#14B079] px-2 py-1 rounded-md">
                <img alt="arrow" src="/assets/arrow.svg" />
                {item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
