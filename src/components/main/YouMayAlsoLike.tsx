"use client";
import { useTrendingCoinsContext } from "@/context/TrendingCoinsContext";
import React from "react";
import TrendingCoinsCarousel from "./TrendingCoinsCarousel";

const YouMayAlsoLike = () => {
  let coins = useTrendingCoinsContext();
  return (
    <>
      {coins.length > 0 && (
        <div className="bg-white p-4 md:p-8 md:rounded-lg flex flex-col gap-2 md:gap-8">
          <h3 className="text-2xl font-[500]">You May Also Like</h3>
          <TrendingCoinsCarousel coins={coins} />
          <h3 className="text-2xl font-[500]">Trending Coins</h3>
          <TrendingCoinsCarousel coins={coins} />
        </div>
      )}
    </>
  );
};

export default YouMayAlsoLike;
