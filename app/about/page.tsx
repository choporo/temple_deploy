import React from "react";
import { Metadata } from "next";
import AboutTemple from "@/components/about/AboutTemple";
import AboutBuddha from "@/components/about/AboutBuddha";
import AboutFourProducts from "@/components/about/AboutFourProducts";
import AboutPortal from "@/components/about/AboutPortal";
import FooterAds from "@/components/ads/FooterAds";
import MobileVersion from "@/components/about/MobileVersion";
import InArticleAds from "@/components/ads/InArticleAds";

export const metadata: Metadata = {
  title: "알기 쉬운 불교 관련 용어",
  description:
    "전각의 명칭 및 불교의 상징 등 다양한 불교 용어 등을 알기 쉽게 설명",
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
    <article>
      <div>
        <div className="hidden sm:grid">
          <h1 className="text-2xl font-pretendard_bold text-green-700 tracking-wider text-center my-4">
            불교 용어
            <span className="text-gray-800 text-base"> & </span>
            <span className=" text-orange-800 ">건축물</span>
          </h1>
          <AboutTemple />
          <AboutBuddha />
          <InArticleAds />
          <AboutFourProducts />
          <AboutPortal />
        </div>
        <div className="sm:hidden flex">
          <MobileVersion />
        </div>
      </div>
    </article>
  );
}

export default AboutPage;
