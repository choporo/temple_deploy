import React from "react";
import Image from "next/image";
import buddha from "@/public/image/stoneBuddha.jpg";
import { temple } from "@/utils/aboutTemple";

function AboutTemple() {
  return (
    <article className="text-justify">
      <h2 className="text-xl my-2 font-pretendard_bold">1. 불교 용어</h2>
      <div className="mx-1 grid gap-y-3 xl:grid-cols-12 gap-x-5">
        <div className="xl:col-span-7">
          {temple.map((item, index) => (
            <p className="xl:text-base/loose text-sm/loose tracking-wider ">
              {index < 8 ? item.label : null}
            </p>
          ))}
        </div>
        <div className="xl:col-span-5 relative h-full hidden sm:grid">
          <Image
            src={buddha}
            alt="buddha"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full rounded object-cover"
          />
          <p className="text-center tracking-widest text-sm">
            {"<"}용화사 - 약사여래, 관음보살, 문수보살, 보현보살{">"}
          </p>
        </div>
      </div>
      <div>
        {temple.map((item, index) => (
          <p className="xl:col-span-7 mx-1 text-base/loose tracking-wider text-justify">
            {index > 7 ? item.label : null}
          </p>
        ))}
      </div>
    </article>
  );
}

export default AboutTemple;
