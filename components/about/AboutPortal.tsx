import React from "react";
import Image from "next/image";
import bulyimun from "@/public/image/bulyimun.jpg";
import { portal } from "@/utils/aboutTemple";

function AboutPortal() {
  return (
    <article className="text-justify">
      <h2 className="sm:text-xl sm:text-start text-center mb-2 sm:mt-10 font-pretendard_bold tracking-wider">
        4. 사찰의 문(門)
      </h2>
      <div className="mx-2 grid gap-y-3 xl:grid-cols-12 lg:gap-x-5">
        <div className="xl:col-span-5 relative h-full hidden sm:grid">
          <Image
            src={bulyimun}
            alt="bulyimun"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full md:h-72 h-32 rounded object-cover"
          />
          <p className="text-center tracking-widest text-sm ">
            {"<"}건봉사 - 불이문{">"}
          </p>
        </div>
        <div className="xl:col-span-7">
          {portal.map((item, index) => (
            <p
              className="sm:text-base/loose text-sm/loose  tracking-wider text-justify sm:mb-2"
              key={index}
            >
              {item.label}
            </p>
          ))}
        </div>
      </div>
      <div className="sm:hidden grid mt-3">
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
