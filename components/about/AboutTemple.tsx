import React from "react";
import Image from "next/image";
import buddha from "@/public/image/stoneBuddha.jpg";
import { temple } from "@/utils/aboutTemple";

function AboutTemple() {
  return (
    <article className="text-justify">
      <h2 className="text-lg my-2 font-pretendard_bold">1. 불교 용어</h2>
      <div className="mx-2 grid gap-y-3 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-7 tracking-wider  sm:text-sm/loose">
          <p className="mb-2 first-letter:ml-1">{temple[0].label}</p>
          <p className="mb-2 first-letter:ml-1">{temple[5].label}</p>
          <p className="mb-2 first-letter:ml-1">{temple[6].label}</p>
          <p className="mb-2 first-letter:ml-1">{temple[7].label}</p>
          <p className="mb-2 first-letter:ml-1">{temple[2].label}</p>
          <p className="mb-2 first-letter:ml-1">{temple[3].label}</p>
          <p className="mb-2 first-letter:ml-1">{temple[4].label}</p>
          <p className="mb-2 first-letter:ml-1">{temple[8].label}</p>
          <p className="mb-2 hidden sm:flex lg:hidden">
            &nbsp;{temple[1].label}
          </p>
        </div>
        <div className="lg:col-span-5 relative h-full hidden sm:grid">
          <Image
            src={buddha}
            alt="buddha"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full lg:h-80 rounded object-cover"
          />
          <p className="text-center tracking-widest text-sm">
            {"<"}용화사 - 약사여래, 관음보살, 문수보살, 보현보살{">"}
          </p>
        </div>
      </div>
      <div className="tracking-wider text-justify">
        <p className="mx-2 first-letter:ml-1 mb-2 text-sm leading-loose">
          {temple[1].label}
        </p>
        <p className="mx-2 first-letter:ml-1 mb-2 text-sm leading-loose">
          {temple[9].label}
        </p>
        <p className="mx-2 first-letter:ml-1 mb-2 text-sm leading-loose">
          {temple[10].label}
        </p>
      </div>
    </article>
  );
}

export default AboutTemple;
