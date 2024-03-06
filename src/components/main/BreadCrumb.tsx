import { useParams } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
  const { coin } = useParams();
  return (
    <span className="flex w-fit p-4 py-3 justify-center items-center gap-2">
      <p className="text-[#3E5765]">Cryptocurrencies</p>{" "}
      <img src="/assets/breadcrumb.svg" />{" "}
      <p className="captilize">{coin || "Bitcoin"}</p>
    </span>
  );
};

export default BreadCrumb;
