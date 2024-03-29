"use client";
import useCoinInfo from "@/hooks/useCoinInfo";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const { coinInfo, error, loading } = useCoinInfo();
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current && coinInfo) {
      if (container.current.querySelector("script")) return;
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
              {
                "autosize": true,
                "symbol": "BITSTAMP:${coinInfo?.symbol || "BTC"}USD",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "calendar": false,
                "support_host": "https://www.tradingview.com"
              }`;
      container.current.appendChild(script);
    }
  }, [coinInfo]);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
      {loading && (
        <div className="w-full h-full flex justify-center items-center">
          <p>Loading</p>
        </div>
      )}
      {error && (
        <div className="w-full h-full flex justify-center items-center">
          <p>Oops! There was some error while fetchig the graph!</p>
        </div>
      )}
    </div>
  );
}

export default memo(TradingViewWidget);
