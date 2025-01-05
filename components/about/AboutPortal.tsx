import React from "react";
import Image from "next/image";
import bulyimun from "@/public/image/bulyimun.jpg";
import { portal } from "@/utils/aboutTemple";

function AboutPortal() {
  return (
    <div>
      <h2 className="text-lg mb-2 mt-10 font-semibold">4. 사찰의 문(門)</h2>
      <div className="mx-2 grid text-muted-foreground gap-y-3 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-5 relative h-full hidden lg:grid">
          <Image
            src={bulyimun}
            alt="bulyimun"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full h-72 rounded object-cover"
          />
          <h6 className="text-center tracking-wider text-sm">
            {"<"}건봉사 - 불이문{">"}
          </h6>
        </div>
        <div className="lg:col-span-7 tracking-wide text-sm leading-loose">
          <h4 className="mb-2">{portal[0].label}</h4>
          <h4 className="mb-2">{portal[1].label}</h4>
          <h4 className="mb-2">{portal[2].label}</h4>
          <h4 className="mb-2">{portal[3].label}</h4>
        </div>
      </div>
      {/* <h4 className="mx-2 mb-2 hidden lg:flex font-semibold tracking-wide text-sm leading-loose">
        {sanctum[7].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex font-semibold tracking-wide text-sm leading-loose">
        {sanctum[8].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex font-semibold tracking-wide text-sm leading-loose">
        {sanctum[9].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex font-semibold tracking-wide text-sm leading-loose">
        {sanctum[10].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex font-semibold tracking-wide text-sm leading-loose">
        {sanctum[11].label}
      </h4>
      <h4 className="mx-2 mb-2 hidden lg:flex font-semibold tracking-wide text-sm leading-loose">
        {sanctum[12].label}
      </h4> */}
      <div className="lg:col-span-5 relative h-full lg:hidden grid">
        <Image
          src={bulyimun}
          alt="daewoong_jeon"
          style={{
            objectFit: "cover",
            objectPosition: "50% 60%",
          }}
          sizes="100vw"
          className="w-full h-80 rounded object-cover"
        />
        <h6 className="text-center tracking-wider text-sm">
          {"<"}건봉사 - 불이문{">"}
        </h6>
      </div>
    </div>
  );
}

export default AboutPortal;
