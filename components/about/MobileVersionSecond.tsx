import { temple } from "@/utils/aboutTemple";
import Image from "next/image";
import daewoong from "@/public/image/daewoong.jpg";

export default function MobileVersionSecond() {
  return (
    <article className="text-justify">
      <div className="tracking-wider text-sm/loose ">
        {temple.map((item, index) => (
          <p className="my-2" key={index}>
            {index > 7 ? item.label : null}
          </p>
        ))}
      </div>
    </article>
  );
}
