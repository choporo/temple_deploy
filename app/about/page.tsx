import React from "react";
import { Metadata } from "next";
import AboutTemple from "@/components/about/AboutTemple";
import AboutBuddha from "@/components/about/AboutBuddha";
import AboutFourProducts from "@/components/about/AboutFourProducts";
import AboutPortal from "@/components/about/AboutPortal";
import FooterAds from "@/components/ads/FooterAds";

export const metadata: Metadata = {
  title: "용어해설",
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
        알고 가면 <span className=" text-orange-800 ">좋은 것들</span>
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
