import React from "react";
import { Metadata } from "next";
import AboutTemple from "@/components/about/AboutTemple";
import AboutBuddha from "@/components/about/AboutBuddha";
import AboutFourProducts from "@/components/about/AboutFourProducts";
import AboutPortal from "@/components/about/AboutPortal";
import FooterAds from "@/components/ads/FooterAds";

export const metadata: Metadata = {
  title: "알기 쉬운 불교 용어",
  description: "전각의 명칭 및 다양한 불교 용어 등을 알기 쉽게 설명",
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
    },
  },
};

function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-green-700 tracking-wider text-center my-4">
        불교 용어
        <span className="text-gray-800 text-base"> & </span>
        <span className=" text-orange-800 ">전각 명칭</span>
      </h1>
      <AboutTemple />
      <AboutBuddha />
      <FooterAds />
      <AboutFourProducts />
      <AboutPortal />
    </div>
  );
}

export default AboutPage;
