import React from "react";
import Image from "next/image";
import bumgo from "@/public/image/bumgo.jpg";
import { fourProducts } from "@/utils/aboutTemple";

function AboutFourProducts() {
  return (
    <article className="text-justify">
      <h2 className="text-lg text-center sm:text-start  mb-1 sm:mt-10 font-pretendard_bold tracking-wider">
        3. 사찰의 사물(四物)
      </h2>
      <p className="tracking-wider text-xs/loose sm:text-sm/loose sm:mb-2">
        {fourProducts[4].label}
      </p>
      <div className="sm:mx-2 sm:grid sm:gap-y-3 sm:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-5 ">
          {fourProducts.map((item, index) => (
            <p className="tracking-wider text-xs/loose sm:text-sm/loose sm:mb-2 ">
              {index < 4 ? item.label : null}
            </p>
          ))}
        </div>
        <div className="grid sm:col-span-7 relative h-full">
          <Image
            src={bumgo}
            alt="bumgo"
            style={{
              objectFit: "cover",
              objectPosition: "50% 60%",
            }}
            sizes="100vw"
            className="w-full sm:h-48 h-24 rounded object-cover items-center"
          />
          <p className="text-center tracking-widest text-xs sm:text-sm mt-1">
            {"<"}장안사 - 범종각{">"}
          </p>
        </div>
      </div>
    </article>
  );
}

export default AboutFourProducts;
