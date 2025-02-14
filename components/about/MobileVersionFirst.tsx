import { temple } from "@/utils/aboutTemple";
import React from "react";

export default function MobileVersionFirst() {
  return (
    <article className="text-justify">
      <h2 className="text-base my-2 font-pretendard_bold text-center">
        1. 불교 용어
      </h2>
      <div className="mx-2 lg:gap-x-5">
        <div className="tracking-wider text-xs/loose">
          {temple.map((item, index) => (
            <p className="my-2">{index < 8 ? item.label : null}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
