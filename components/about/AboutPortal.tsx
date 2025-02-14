import React from "react";
import Image from "next/image";
import bulyimun from "@/public/image/bulyimun.jpg";
import { portal } from "@/utils/aboutTemple";

function AboutPortal() {
  return (
    <article className="text-justify">
      <h2 className="sm:text-lg sm:text-start text-center mb-2 sm:mt-10 font-pretendard_bold tracking-wider">
        4. 사찰의 문(門)
      </h2>
      <div className="mx-2 grid gap-y-3 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-5 relative h-full hidden sm:grid">
          <Image
            src={bulyimun}
            alt="bulyimun"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full sm:h-72 h-32 rounded object-cover"
          />
          <p className="text-center tracking-widest text-sm ">
            {"<"}건봉사 - 불이문{">"}
          </p>
        </div>
        <div className="lg:col-span-7 tracking-wide ">
          {portal.map((item) => (
            <p className="sm:text-sm/loose text-xs/loose sm:mb-2">
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="sm:hidden grid">
        <Image
          src={bulyimun}
          alt="daewoong_jeon"
          style={{
            objectFit: "cover",
            objectPosition: "50% 60%",
          }}
          sizes="100vw"
          className="w-full h-40 rounded object-cover"
        />
        <p className="text-center tracking-widest text-xs">
          {"<"}건봉사 - 불이문{">"}
        </p>
      </div>
    </article>
  );
}

export default AboutPortal;
