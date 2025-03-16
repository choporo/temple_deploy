import { sanctum } from "@/utils/aboutTemple";
import Image from "next/image";
import daewoong from "@/public/image/daewoong.jpg";

function MobileVertionBuddhaSecond() {
  return (
    <article className="text-justify">
      <div className="tracking-wide text-justify ">
        {sanctum.map((item, index) => (
          <p className="text-sm/loose" key={index}>
            {index > 6 ? item.label : null}
          </p>
        ))}
      </div>
      <div className="sm:col-span-5 relative h-full ">
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
        <p className="text-center tracking-widest text-xs">
          {"<"}수덕사 - 대웅전{">"}
        </p>
      </div>
    </article>
  );
}

export default MobileVertionBuddhaSecond;
