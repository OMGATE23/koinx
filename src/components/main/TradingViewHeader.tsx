"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
const OPTIONS: string[] = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

const TradingViewHeader = () => {
  let [selectedPill, setSelectedPill] = useState(0);
  let { coin } = useParams();
  function getPillStyles(index: number): string {
    if (index === selectedPill) {
      return "text-[#0141CF] bg-[#E2ECFE]";
    } else {
      return "text-[#5D667B]";
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-between">
      <p className="text-lg font-[500] capitalize">{`${
        coin || "Bitcoin"
      } Price Chart (USD)`}</p>
      <div className="flex items-center text-xs gap-1">
        {OPTIONS.map((option, i) => (
          <button
            key={option}
            onClick={() => setSelectedPill(i)}
            className={`${getPillStyles(i)} px-1 py-1 rounded-full text-xs`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TradingViewHeader;
