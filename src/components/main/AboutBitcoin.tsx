import Link from "next/link";
import React from "react";

const AboutBitcoin = () => {
  return (
    <div className="bg-white p-4 md:p-8 rounded-lg flex flex-col gap-8">
      <h3 className="text-2xl font-[500]">About Bitcoin</h3>
      <div className="border-b-[1px] border-[#C9CFDD99]">
        <p className="mb-4 text-lg font-[500]">What is Bitcoin?</p>
        <p className="leading-7 mb-6">
          {"Bitcoin's"} price today is US$16,951.82, with a 24-hour trading
          volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
          currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40%
          from its 7-day all-time low of $16,394.75. BTC has a circulating
          supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className="border-b-[1px] border-[#C9CFDD99]">
        <p className="mb-4 text-lg font-[500]">Lorem ipsum dolor sit amet</p>
        <p className="leading-7 mb-6">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.{" "}
        </p>
        <p className="leading-7 mb-6">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
        <p className="leading-7 mb-6">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
      <h3 className="text-2xl font-[500]">About Bitcoin</h3>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="bitcoin-gradient-1 p-4 flex items-start gap-8 rounded-lg md:w-[50%]">
          <img
            className="w-[40%] md:w-fit aspect-square block"
            src="/assets/placeholder-1.png"
          />
          <div className="flex flex-col gap-4">
            <p className=" md:text-xl font-semibold text-white">
              Calculate your Profits
            </p>
            <Link
              href="/"
              className="flex gap-2 md:gap-4 justify-center w-fit px-2 py-1 bg-white rounded-lg text-sm"
            >
              Check Now <img src="/assets/right-arrow.svg" />
            </Link>
          </div>
        </div>
        <div className="bitcoin-gradient-2 p-4 flex items-start gap-8 rounded-lg md:w-[50%]">
          <img
            className="w-[40%] md:w-fit aspect-square block"
            src="/assets/placeholder-2.png"
          />
          <div className=" flex flex-col gap-4">
            <p className=" md:text-xl font-semibold text-white">
              Calculate your tax liability
            </p>
            <Link
              href="/"
              className="flex gap-2 md:gap-4 justify-center w-fit px-2 py-1 bg-white rounded-lg text-sm"
            >
              Check Now <img src="/assets/right-arrow.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBitcoin;
