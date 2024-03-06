"use client";
import React, { useState } from "react";
let NAVBAR: string[] = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  function getOptionStyles(index: number): string {
    if (selectedOption === index) {
      return "border-b-[3px] border-[#0052FE] text-[#0141CF] pb-1";
    } else {
      return "text-[#3E424A] pb-[7px]";
    }
  }
  return (
    <div>
      <ul className="flex items-center overflow-y-scroll gap-6 border-b-[1px] border-[#D3E0E6]">
        {NAVBAR.map((option, index) => (
          <li key={option} className={`${getOptionStyles(index)}`}>
            <button onClick={() => setSelectedOption(index)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
