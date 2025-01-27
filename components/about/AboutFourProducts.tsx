import React from "react";
import Image from "next/image";
import bumgo from "@/public/image/bumgo.jpg";
import { fourProducts } from "@/utils/aboutTemple";

function AboutFourProducts() {
  return (
    <article className="text-justify">
      <h2 className="text-lg mb-2 mt-10 font-semibold">3. 사찰의 사물(四物)</h2>
      <p className="mx-2 first-letter:ml-1 text-sm leading-loose mb-2">
        {fourProducts[4].label}
      </p>
      <div className="mx-2 grid gap-y-3 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-5 tracking-wide text-sm leading-loose">
          <p className="mb-2 first-letter:ml-1">{fourProducts[0].label}</p>
          <p className="mb-2 first-letter:ml-1">{fourProducts[1].label}</p>
          <p className="mb-2 first-letter:ml-1">{fourProducts[2].label}</p>
          <p className="mb-2 first-letter:ml-1">{fourProducts[3].label}</p>
        </div>
        <div className="lg:col-span-7 relative h-full">
          <Image
            src={bumgo}
            alt="bumgo"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full h-48 rounded object-cover items-center"
          />
          <p className="text-center tracking-widest text-sm">
            {"<"}장안사 - 범종각{">"}
          </p>
        </div>
      </div>
    </article>
  );
}

export default AboutFourProducts;
