import React from "react";
import Image from "next/image";
import bumgo from "@/public/image/bumgo.jpg";
import { fourProducts } from "@/utils/aboutTemple";

function AboutFourProducts() {
  return (
    <div>
      <h2 className="text-lg mb-2 mt-10 font-semibold">3. 사찰의 사물(四物)</h2>
      <h4 className="mx-2 text-muted-foreground text-sm leading-loose mb-2">
        {fourProducts[4].label}
      </h4>
      <div className="mx-2 text-muted-foreground grid gap-y-3 lg:grid-cols-12 lg:gap-x-5">
        <div className="lg:col-span-5 tracking-wide text-sm leading-loose">
          <h4 className="mb-2">{fourProducts[0].label}</h4>
          <h4 className="mb-2">{fourProducts[1].label}</h4>
          <h4 className="mb-2">{fourProducts[2].label}</h4>
          <h4 className="mb-2">{fourProducts[3].label}</h4>
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
          <h6 className="text-center tracking-wider text-sm">
            {"<"}장안사 - 범종각{">"}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AboutFourProducts;
