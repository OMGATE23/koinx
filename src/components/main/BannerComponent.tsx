import Link from "next/link";
import React from "react";

const BannerComponent = () => {
  return (
    <div className="bg-[#0052FE] my-8 mx-4 md:m-0 rounded-lg text-white text-center flex flex-col justify-center items-center gap-4 p-8">
      <h2 className="font-semibold text-xl leading-[2rem]">
        Get Started with KoinX for FREE
      </h2>
      <p className=" text-xs leading-6">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src="/assets/app-demo.svg" />
      <Link
        href="/"
        className="text-black bg-white flex gap-4 px-4 
            py-3 rounded-md font-semibold"
      >
        Get Started for FREE <img src="/assets/right-arrow.svg" />
      </Link>
    </div>
  );
};

export default BannerComponent;
