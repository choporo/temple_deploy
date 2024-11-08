import React from "react";
import Image from "next/image";
import gwaneum from "@/public/image/gwaneum.jpg";
import { temple } from "@/utils/aboutTemple";
import AboutTemple from "@/components/about/AboutTemple";

function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-green-700 tracking-wider p-2 text-center">
        알고 가면 <span className=" text-orange-800 ">좋은 것들</span>
      </h1>
      <AboutTemple />
    </div>
  );
}

export default AboutPage;
