import React from "react";
import Image from "next/image";
import { sanctum } from "@/utils/aboutTemple";
import daewoong from "@/public/image/daewoong.jpg";

function AboutTemple() {
  return (
    <article className="text-justify">
      <h2 className="text-lg mb-2 mt-10 font-semibold">
        2. 전각(殿閣)의 종류 -{" "}
        <span className="text-sm">
          불상을 모신 곳은 전(殿), 그 외는 각(閣)이라고 함
        </span>
      </h2>
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
          <p className="text-center tracking-widest text-sm">
            {"<"}수덕사 - 대웅전{">"}
          </p>
        </div>
        <div className="lg:col-span-7  tracking-wide text-sm leading-loose">
          <p className="mb-2 first-letter:ml-1">{sanctum[0].label}</p>
          <p className="mb-2 first-letter:ml-1">{sanctum[1].label}</p>
          <p className="mb-2 first-letter:ml-1">{sanctum[2].label}</p>
          <p className="mb-2 first-letter:ml-1">{sanctum[3].label}</p>
          <p className="mb-2 first-letter:ml-1">{sanctum[4].label}</p>
          <p className="mb-2 first-letter:ml-1">{sanctum[5].label}</p>
          <p className="mb-2 first-letter:ml-1">{sanctum[6].label}</p>
          <p className="mb-2 first-letter:ml-1 flex lg:hidden">
            &nbsp;{sanctum[7].label}
          </p>
          <p className="mb-2 flex lg:hidden">&nbsp;{sanctum[8].label}</p>
          <p className="mb-2 flex lg:hidden">&nbsp;{sanctum[9].label}</p>
          <p className="mb-2 flex lg:hidden">&nbsp;{sanctum[10].label}</p>
          <p className="mb-2 flex lg:hidden">&nbsp;{sanctum[11].label}</p>
          <p className="mb-2 flex lg:hidden">&nbsp;{sanctum[12].label}</p>
        </div>
      </div>

      <p className="mx-2  mb-2 hidden lg:flex  tracking-wide text-sm leading-loose">
        &nbsp;{sanctum[7].label}
      </p>
      <p className="mx-2 mb-2 hidden lg:flex  tracking-wide text-sm leading-loose">
        &nbsp;{sanctum[8].label}
      </p>
      <p className="mx-2 mb-2 hidden lg:flex tracking-wide text-sm leading-loose">
        &nbsp;{sanctum[9].label}
      </p>
      <p className="mx-2 mb-2 hidden lg:flex  tracking-wide text-sm leading-loose">
        &nbsp;{sanctum[10].label}
      </p>
      <p className="mx-2 mb-2 hidden lg:flex  tracking-wide text-sm leading-loose">
        &nbsp;{sanctum[11].label}
      </p>
      <p className="mx-2 mb-2 hidden lg:flex tracking-wide text-sm leading-loose">
        &nbsp;{sanctum[12].label}
      </p>
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
        <p className="text-center tracking-widest text-sm">
          {"<"}수덕사 - 대웅전{">"}
        </p>
      </div>
    </article>
  );
}

export default AboutTemple;
