import Link from "next/link";
import Image from "next/image";
import moktak from "@/public/image/moktak.png";

function Logo() {
  return (
    <div className="my-auto md:ml-2 mt-1">
      <Link
        href="/"
        passHref
        className="flex gap-x-1 items-center justify-center"
      >
        <h2 className="md:text-2xl text-lg text-center text-orange-800 font-jalnan tracking-widest font-extrabold ">
          절로<span className="text-green-700 "> 가</span>
        </h2>
        <Image
          src={moktak}
          alt="목탁"
          className="md:w-10 md:h-10 w-8 h-8 mb-1"
        />
      </Link>
    </div>
  );
}

export default Logo;
