import React from "react";
const DATA_ARRAY = [
  { title: "Bitcoin Price", value: "$16,815.46" },
  { title: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
  { title: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
  { title: "Trading Volume", value: "$23,249,202,782" },
  { title: "Market Cap Rank", value: "#1" },
  { title: "Market Cap", value: "$323,507,290,047" },
  { title: "Market Cap Dominance", value: "38.343%" },
  { title: "Volume / Market Cap", value: "0.0718" },
];

const Performance = () => {
  return (
    <div className="min-h-[80vh] bg-white p-4 md:p-8 rounded-lg flex flex-col gap-12">
      <h3 className="font-[500] text-2xl">Performance</h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center py-2 gap-4 justify-between w-full">
          <p className="gap-2 flex flex-col text-xs md:text-sm justify-center items-start ">
            <span className="gap-2 text-[#44475B] font-[300]">Today's Low</span>{" "}
            <span className="text-base  text-[#44475B] font-[500]">
              46,930.22
            </span>
          </p>
          <div className="w-full relative">
            <div className="h-1 rounded-full w-full range-bar"></div>
            <div
              className={`absolute top-2 left-[70.75%] flex flex-col items-center slider justify-center`}
            >
              <img width={12} src="/assets/arrow-up.svg" />
              <p className="text-[#44475B] font-[300]">$48,637.83</p>
            </div>
          </div>
          <p className="gap-2 flex flex-col text-xs md:text-sm justify-center items-end ">
            <span className="gap-2  text-right  text-[#44475B] font-[300]">
              Today's High
            </span>{" "}
            <span className="text-base  text-[#44475B] font-[500]  ">
              49,743.83
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4 justify-between w-full">
          <p className="gap-1 flex flex-col text-xs md:text-sm justify-center items-start ">
            <span className="gap-2  text-[#44475B] font-[300]">52W Low</span>{" "}
            <span className="text-base  text-[#44475B] font-[500]">
              16,930.22
            </span>
          </p>
          <div className="w-full relative">
            <div className="h-1 rounded-full w-full range-bar"></div>
          </div>
          <p className="gap-2 flex flex-col text-xs md:text-sm justify-center items-end ">
            <span className="gap-2   text-[#44475B] font-[300]">52W High</span>{" "}
            <span className="text-base  text-[#44475B] font-[500]  ">
              49,743.83
            </span>
          </p>
        </div>
      </div>

      <div>
        <h4 className="flex items-center gap-2 font-[500] text-lg">
          Fundamentals <img src="/assets/tooltip.svg" />
        </h4>
        <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2 gap-x-8 ">
          <div className="flex flex-col justify-center items-center w-full">
            {DATA_ARRAY.slice(0, 5).map(({ title, value }) => (
              <div
                key={title}
                className="flex justify-between items-center w-full h-12 border-b-[1px] border-[#D3E0E6 w-full] text-xs md:text-sm"
              >
                <span className="text-[#768396]">{title}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-left items-center w-full">
            {DATA_ARRAY.slice(5).map(({ title, value }) => (
              <div
                key={title}
                className="flex justify-between items-center w-full h-12 border-b-[1px] border-[#D3E0E6 w-full] text-xs md:text-sm"
              >
                <span className="text-[#768396]">{title}</span>
                <span>{value}</span>
              </div>
            ))}
            <div className="flex justify-between items-center w-full h-12 border-b-[1px] border-[#D3E0E6 w-full] text-xs md:text-sm">
              <span className="text-[#768396]">All-Time High</span>
              <div className="flex flex-col items-end gap-">
                <span>
                  $69,044.77 <span className="text-[#F7324C]">-75.6%</span>
                </span>
                <span className="text-xs">{"Nov 10, 2021 (about 1 year)"}</span>
              </div>
            </div>
            <div className="flex justify-between items-center w-full h-12 border-b-[1px] border-[#D3E0E6 w-full] text-xs md:text-sm">
              <span className="text-[#768396]">All-Time Low</span>
              <div className="flex flex-col items-end gap-">
                <span>
                  $67.81 <span className="text-[#0FBA83]">24729.1%</span>
                </span>
                <span className="text-xs">{"Jul 06, 2013 (over 9 years)"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
