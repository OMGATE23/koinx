import React from "react";
import BreadCrumb from "./BreadCrumb";
import CoinOverview from "./CoinOverview";
import BannerComponent from "./BannerComponent";
import TrendingCoins from "./TrendingCoins";
import YouMayAlsoLike from "./YouMayAlsoLike";

const Main = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="mx-4 relative md:mx-12 mb-12 flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start gap-12">
        <CoinOverview />
        <div className="w-[30%] sticky top-8 md:flex hidden flex-col justify-center gap-8">
          <BannerComponent />
          <TrendingCoins />
        </div>
      </div>
      <YouMayAlsoLike />
      <div className="w-full  md:hidden flex flex-col justify-center gap-8">
        <BannerComponent />
        <TrendingCoins />
      </div>
    </div>
  );
};

export default Main;
