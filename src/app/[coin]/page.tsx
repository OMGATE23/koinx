"use client";
import Header from "@/components/Header";
import Main from "@/components/main/Main";
import { useParams } from "next/navigation";

export default function Home() {
  return (
    <div className="bg-[#EFF2F5]">
      <Header />
      <Main />
    </div>
  );
}
