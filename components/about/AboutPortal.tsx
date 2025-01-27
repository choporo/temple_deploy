import React from "react";
import Image from "next/image";
import bulyimun from "@/public/image/bulyimun.jpg";
import { portal } from "@/utils/aboutTemple";

function AboutPortal() {
  return (
    <article className="text-justify">
      <h2 className="text-lg mb-2 mt-10 font-semibold">4. 사찰의 문(門)</h2>
      <div className="mx-2 grid gap-y-3 lg:grid-cols-12 lg:gap-x-5">
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
          <p className="text-center tracking-widest text-sm ">
            {"<"}건봉사 - 불이문{">"}
          </p>
        </div>
        <div className="lg:col-span-7 tracking-wide text-sm leading-loose">
          <p className="mb-2  first-letter:ml-1">{portal[0].label}</p>
          <p className="mb-2 first-letter:ml-1">{portal[1].label}</p>
          <p className="mb-2 first-letter:ml-1">{portal[2].label}</p>
          <p className="mb-2 first-letter:ml-1">{portal[3].label}</p>
        </div>
      </div>
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
        <h6 className="text-center tracking-widest text-sm">
          {"<"}건봉사 - 불이문{">"}
        </h6>
      </div>
    </article>
  );
}

export default AboutPortal;
