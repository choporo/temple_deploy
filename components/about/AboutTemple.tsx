import React from "react";
import Image from "next/image";
import buddha from "@/public/image/stoneBuddha.jpg";
import { temple } from "@/utils/aboutTemple";

function AboutTemple() {
  return (
    <div>
      <h2 className="text-lg  my-2 font-semibold">1. 사찰 대표 용어</h2>
      <div className="mx-2 grid text-muted-foreground gap-y-3 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-7 tracking-wide text-sm leading-loose">
          <h4 className="mb-2">{temple[0].label}</h4>
          <h4 className="mb-2">{temple[5].label}</h4>
          <h4 className="mb-2">{temple[6].label}</h4>
          <h4 className="mb-2">{temple[7].label}</h4>
          <h4 className="mb-2">{temple[2].label}</h4>
          <h4 className="mb-2">{temple[3].label}</h4>
          <h4 className="mb-2">{temple[4].label}</h4>

          <h4 className="mb-2">{temple[8].label}</h4>
          <h4 className="mb-2 flex lg:hidden">{temple[1].label}</h4>
        </div>
        <div className="lg:col-span-5 relative h-full">
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
          <h6 className="text-center tracking-wider text-sm">
            {"<"}용화사 - 약사여래, 관음보살, 문수보살, 보현보살{">"}
          </h6>
        </div>
      </div>
      <h4 className="mx-2 text-muted-foreground mb-2 hidden lg:flex tracking-wide text-sm leading-loose">
        {temple[1].label}
      </h4>
    </div>
  );
}

export default AboutTemple;
