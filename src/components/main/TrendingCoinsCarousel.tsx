"use client";
import { TrendingCoins } from "@/context/TrendingCoinsContext";
import React, { useEffect, useRef, useState } from "react";

const TrendingCoinsCarousel = ({ coins }: { coins: TrendingCoins }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showLeftBtn, setShowLeftBtn] = useState<boolean>(false);
  const [showRightBtn, setShowRightBtn] = useState<boolean>(true);

  function cleanPrice(priceString: string): string {
    if (priceString.includes("<sub")) {
      const match = priceString.match(/title="([^']+)"/);
      const price = match ? match[1] : null;

      const formattedPrice = price ? `$${price}` : priceString;

      return formattedPrice;
    } else {
      return priceString;
    }
  }
  const scrollToRightEnd = () => {
    if (parentRef.current) {
      const parentComponent = parentRef.current;
      const maxScroll = parentComponent.clientWidth;
      parentComponent.scrollTo({
        left: (currentPosition + 1) * maxScroll,
        behavior: "smooth",
      });

      setCurrentPosition((prev) => prev + 1);
    }
  };
  const scrollToLeftEnd = () => {
    if (parentRef.current) {
      const parentComponent = parentRef.current;
      const maxScroll = parentComponent.clientWidth;
      parentComponent.scrollTo({
        left: (currentPosition - 1) * maxScroll,
        behavior: "smooth",
      });
      setCurrentPosition((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const container = parentRef.current;
    if (container) {
      const handleScroll = () => {
        setShowLeftBtn(container.scrollLeft !== 0);
        setShowRightBtn(
          container.scrollLeft !== container.scrollWidth - container.clientWidth
        );
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div className="relative">
      <div ref={parentRef} className="flex gap-4 p-8 overflow-y-hidden">
        {coins.map(({ item }) => (
          <div
            className="min-w-[180px] md:min-w-[280px] p-4 outline outline-1 outline-[#E3E3E3] rounded-lg flex flex-col justify-between"
            key={item.coin_id}
          >
            <div className="flex gap-2 md:gap-4 items-center">
              <img alt={item.name} src={item.small} width={20} height={20} />
              <p className="text-xs md:text-sm font-[500]">{item.name}</p>
              <span className="flex gap-2 text-[0.6rem]  md:text-xs bg-[#EBF9F4] text-[#14B079] px-2 py-1 rounded-md">
                <img alt="arrow" src="/assets/arrow.svg" />
                {item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </span>
            </div>
            <p className="text-sm">{cleanPrice(item.data.price)}</p>
            <img
              alt={item.name + " sparkline"}
              className=" w-full"
              src={item.data.sparkline}
            />
          </div>
        ))}
      </div>

      {showRightBtn && (
        <button
          onClick={scrollToRightEnd}
          className="absolute bg-white top-[50%] transform-top-half shadow-md rounded-full right-0"
        >
          <img alt="scroll-right" width={48} src="/assets/scroll-right.svg" />
        </button>
      )}

      {showLeftBtn && (
        <button
          onClick={scrollToLeftEnd}
          className="absolute bg-white top-[50%] transform-top-half shadow-md rounded-full left-0"
        >
          <img
            alt="scroll-left"
            width={48}
            className="rotate-[180deg]"
            src="/assets/scroll-right.svg"
          />
        </button>
      )}
    </div>
  );
};

export default TrendingCoinsCarousel;
