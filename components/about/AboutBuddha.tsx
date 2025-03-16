import React from "react";
import Image from "next/image";
import { sanctum } from "@/utils/aboutTemple";
import daewoong from "@/public/image/daewoong.jpg";

function AboutBuddha() {
  return (
    <article className="text-justify">
      <h2 className="sm:text-xl text-base sm:mb-2 sm:mt-10 font-pretendard_bold">
        2. 전각(殿閣)의 종류
        <span className="text-sm">
          &nbsp;- 불상을 모신 곳은 전(殿), 그 외는 각(閣)이라고 함
        </span>
      </h2>
      <div className="xl:grid xl:gap-y-3 lg:grid-cols-12 lg:gap-x-5">
        <div className="xl:col-span-5 relative h-full hidden sm:grid">
          <Image
            src={daewoong}
            alt="daewoong_jeon"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full rounded object-cover"
            unoptimized
          />
          <p className="text-center tracking-widest text-sm">
            {"<"}수덕사 - 대웅전{">"}
          </p>
        </div>
        <div className="xl:col-span-7 tracking-wider text-justify ">
          {sanctum.map((item, index) => (
            <p
              className="mb-1 tracking-wider text-justify text-xs/loose sm:text-base/loose"
              key={index}
            >
              {index < 6 ? item.label : null}
            </p>
          ))}
        </div>
      </div>
      <div>
        {sanctum.map((item, index) => (
          <p
            className="mb-1 tracking-wider text-justify text-xs/loose sm:text-base/loose"
            key={index}
          >
            {index > 6 ? item.label : null}{" "}
          </p>
        ))}
      </div>
      <div className="lg:col-span-5 relative h-full sm:hidden grid">
        <Image
          src={daewoong}
          alt="daewoong_jeon"
          style={{
            objectFit: "cover",
            objectPosition: "50% 60%",
          }}
          sizes="100vw"
          className="w-full rounded object-cover"
          unoptimized
        />
        <p className="text-center tracking-widest text-sm">
          {"<"}수덕사 - 대웅전{">"}
        </p>
      </div>
    </article>
  );
}

export default AboutBuddha;
