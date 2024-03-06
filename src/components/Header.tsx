import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between bg-white items-center px-6 md:px-12 border-b-[1px] border-[#DEDFE2]">
      <Link href="/">
        <img alt="logo" src="/assets/logo.svg" />
      </Link>
      <div className="hidden md:flex justify-evenly font-[500] items-center gap-8">
        <Link href="/">Crypto Taxes</Link>
        <Link href="/">Free Tools</Link>
        <Link href="/">Resource Center</Link>
        <Link
          className="ml-2 px-4 py-2 text-white rounded-lg header-link-bg"
          href="/"
        >
          Get Started
        </Link>
      </div>
      <div className="md:hidden">
        <button>
          <img alt="hamburger" src="/assets/hamburger.svg" />
        </button>
      </div>
    </div>
  );
};

export default Header;
