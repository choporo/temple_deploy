import React from "react";
import Image from "next/image";
import bumgo from "@/public/image/bumgo.jpg";
import { fourProducts } from "@/utils/aboutTemple";

function AboutFourProducts() {
  return (
    <article className="text-justify">
      <h2 className="text-xl text-center sm:text-start mb-1 sm:mt-10 font-pretendard_bold tracking-wider">
        3. 사찰의 사물(四物)
      </h2>
      <p className="tracking-wider sm:text-base/loose text-sm/loose sm:mb-2 first-letter:ml-1">
        {fourProducts[4].label}
      </p>
      <div className="sm:grid sm:gap-y-3 xl:grid-cols-12 lg:gap-x-5">
        <div className="grid xl:col-span-5 ">
          {fourProducts.map((item, index) => (
            <p
              className="tracking-wider sm:text-base/loose text-sm/loose sm:mb-1 "
              key={index}
            >
              {index < 4 ? item.label : null}
            </p>
          ))}
        </div>
        <div className="grid xl:col-span-7 relative h-full gap-x-2 items-center">
          <Image
            src={bumgo}
            alt="bumgo"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full sm:h-72 h-28 rounded object-cover items-center"
          />
          <p className="text-center tracking-widest text-xs sm:text-sm">
            {"<"}장안사 - 범종각{">"}
          </p>
        </div>
      </div>
    </article>
  );
}

export default AboutFourProducts;
