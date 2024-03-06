"use client";
import React, { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import TradingViewHeader from "./TradingViewHeader";
import Navbar from "./Navbar";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import AboutBitcoin from "./AboutBitcoin";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import useCoinData from "@/hooks/useCoinData";
import { useParams } from "next/navigation";
import useCoinInfo from "@/hooks/useCoinInfo";

const CoinOverview = () => {
  let { coinData } = useCoinData();
  let { coinInfo } = useCoinInfo();
  return (
    <div className=" w-[100%] md:w-[70%] flex flex-col gap-6">
      <div className="bg-white p-4 flex flex-col  gap-8 rounded-lg">
        <div className="flex justify-left gap-6">
          <p className="flex items-center justify-left gap-2 text-xl">
            <img
              width={36}
              src={coinInfo?.image.small || "/assets/bitcoin.svg"}
            />
            <span className="capitalize">
              {coinData?.coinName || "Bitcoin"}
            </span>
            <span className="uppercase text-sm text-slate-700">
              {coinInfo?.symbol}
            </span>
          </p>
          <span className="bg-[#768396] border-[1px] border-[#808A9D] text-white rounded-lg px-2 py-1">
            Rank #1
          </span>
        </div>
        <div className="flex justify-left items-start gap-4">
          <div>
            <p className="text-2xl font-[500]">
              ${coinData?.usd || "46,953.04"}
            </p>
            <p className="text-lg">₹ {coinData?.inr || "39,42,343"}</p>
          </div>
          <span className="flex justify-center items-center gap-2 px-2 py-1 rounded-md bg-[#EBF9F4] text-[#14B079]">
            <img src="/assets/arrow.svg" />
            {coinData?.usd_24h_change.toFixed(2) || "2.51%"}
          </span>
          <p className="text-[#768396]">{"(24H)"}</p>
        </div>

        <div className="h-[50vh] md:h-[70vh] flex flex-col justify-center items-stretch border-t-[1px] border-[#DEE1E6] gap-6 py-4">
          <TradingViewHeader />
          <TradingViewWidget />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Navbar />
        <Performance />
        <Sentiment />
        <AboutBitcoin />
        <Tokenomics />
        <Team />
      </div>
    </div>
  );
};

export default CoinOverview;
