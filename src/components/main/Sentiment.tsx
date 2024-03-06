"use client";
import React, { useRef, useState } from "react";

const Sentiment = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [showRightBtn, setShowRightBtn] = useState<boolean>(true);

  const scrollToRightEnd = () => {
    if (parentRef.current) {
      const parentComponent = parentRef.current;
      const maxScrollLeft =
        parentComponent.scrollWidth - parentComponent.clientWidth;
      setShowRightBtn(false);
      parentComponent.scrollTo({
        left: maxScrollLeft,
        behavior: "smooth",
      });
    }
  };
  const scrollToLeftEnd = () => {
    if (parentRef.current) {
      const parentComponent = parentRef.current;
      setShowRightBtn(true);
      parentComponent.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-white p-4 md:p-8 rounded-lg flex flex-col gap-8">
      <h3 className="text-2xl font-[500]">Sentiment</h3>
      <h4 className="text-[#44475B] flex font-[500] gap-2 items-center">
        Key Events <img alt="tooltip" src="/assets/tooltip.svg" />
      </h4>
      <div className="relative">
        <div ref={parentRef} className="flex gap-4 overflow-y-hidden">
          <div className=" min-w-[80%] md:min-w-[60%] bg-[#E8F4FD] flex items-start gap-4 p-6 rounded-lg">
            <img
              alt="keyevents-1"
              className="w-[24px] md:w-[48px]"
              src="/assets/keyevents-1.svg"
            />
            <div className="text-[0.6rem] leading-2 md:text-sm flex flex-col gap-2 text-justify">
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-[#3E5765]">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
          <div className=" min-w-[80%] md:min-w-[60%] bg-[#EBF9F4] flex items-start gap-4 p-6 rounded-lg">
            <img
              alt="keyevents-2"
              className="w-[24px] md:w-[48px]"
              src="/assets/keyevents-2.svg"
            />
            <div className="text-[0.6rem] leading-2 md:text-sm flex flex-col gap-2 text-justify">
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </p>
              <p className="text-[#3E5765]">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        </div>
        {showRightBtn && (
          <button
            onClick={scrollToRightEnd}
            className="absolute top-[50%] transform-top-half right-0"
          >
            <img alt="scroll-right" src="/assets/scroll-right.svg" />
          </button>
        )}
        {!showRightBtn && (
          <button
            onClick={scrollToLeftEnd}
            className="absolute top-[50%] transform-top-half left-0"
          >
            <img
              alt="scroll-left"
              className="rotate-[180deg]"
              src="/assets/scroll-right.svg"
            />
          </button>
        )}
      </div>
      <h4 className="text-[#44475B] flex font-[500] gap-2 items-center">
        Analyst Estimates <img alt="tooltip" src="/assets/tooltip.svg" />
      </h4>
      <div className="flex items-center gap-4">
        <div className="text-2xl md:text-4xl flex justify-center items-center rounded-full w-[120px] aspect-square bg-[#EBF9F4] text-[#0FBA83]">
          76%
        </div>
        <ul className="w-full flex flex-col gap-2 text-[#7C7E8C]">
          <li className="flex gap-4 items-center">
            <p className="w-8 mr-2">Buy</p>
            <div className="h-2 rounded-sm bg-[#00B386] w-[76%]"></div>
            <p className="text-xs md:text-sm">76%</p>
          </li>
          <li className="flex gap-4 items-center">
            <p className="w-8 mr-2">Hold</p>
            <div className="h-2 rounded-sm bg-[#C7C8CE] w-[8%]"></div>
            <p className="text-xs md:text-sm">6%</p>
          </li>
          <li className="flex gap-4 items-center">
            <p className="w-8 mr-2">Sell</p>
            <div className="h-2 rounded-sm bg-[#F7324C] w-[12%]"></div>
            <p className="text-xs md:text-sm">12%</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sentiment;
