import React from "react";
import Image from "next/image";
import buddha from "@/public/image/stoneBuddha.jpg";
import { sanctum } from "@/utils/aboutTemple";
import daewoong from "@/public/image/daewoong.jpg";

function AboutTemple() {
  return (
    <div>
      <h2 className="text-lg mb-2 mt-10 font-semibold">2. 전각의 종류</h2>
      <div className="mx-2 grid gap-y-3 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-5 relative h-full hidden lg:grid">
          <Image
            src={daewoong}
            alt="daewoong_jeon"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full rounded object-cover"
          />
          <h6 className="text-center tracking-wider text-sm">
            {"<"}수덕사 - 대웅전{">"}
          </h6>
        </div>
        <div className="lg:col-span-7  tracking-wide text-sm leading-loose">
          <h4 className="mb-2">{sanctum[0].label}</h4>
          <h4 className="mb-2">{sanctum[1].label}</h4>
          <h4 className="mb-2">{sanctum[2].label}</h4>
          <h4 className="mb-2">{sanctum[3].label}</h4>
          <h4 className="mb-2">{sanctum[4].label}</h4>
          <h4 className="mb-2">{sanctum[5].label}</h4>
          <h4 className="mb-2">{sanctum[6].label}</h4>
          <h4 className="mb-2 flex lg:hidden">{sanctum[7].label}</h4>
          <h4 className="mb-2 flex lg:hidden">{sanctum[8].label}</h4>
          <h4 className="mb-2 flex lg:hidden">{sanctum[9].label}</h4>
          <h4 className="mb-2 flex lg:hidden">{sanctum[10].label}</h4>
          <h4 className="mb-2 flex lg:hidden">{sanctum[11].label}</h4>
          <h4 className="mb-2 flex lg:hidden">{sanctum[12].label}</h4>
        </div>
      </div>

      <h4 className="mx-2  mb-2 hidden lg:flex  tracking-wide text-sm leading-loose">
        {sanctum[7].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex  tracking-wide text-sm leading-loose">
        {sanctum[8].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex tracking-wide text-sm leading-loose">
        {sanctum[9].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex  tracking-wide text-sm leading-loose">
        {sanctum[10].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex  tracking-wide text-sm leading-loose">
        {sanctum[11].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex tracking-wide text-sm leading-loose">
        {sanctum[12].label}
      </h4>
      <div className="lg:col-span-5 relative h-full lg:hidden grid">
        <Image
          src={daewoong}
          alt="daewoong_jeon"
          style={{
            objectFit: "cover",
            objectPosition: "50% 60%",
          }}
          sizes="100vw"
          className="w-full rounded object-cover"
        />
        <h6 className="text-center tracking-wider text-sm">
          {"<"}수덕사 - 대웅전{">"}
        </h6>
      </div>
    </div>
  );
}

export default AboutTemple;
