import Link from "next/link";
import Image from "next/image";
import moktak from "@/public/image/moktak.png";

function Logo() {
  return (
    <div className="md:ml-2 items-center">
      <Link href="/" passHref className="flex gap-x-1 justify-center">
        <h2 className="sm:text-2xl text-sm mt-1 sm:mt-2 text-center text-orange-800 font-jalnan tracking-widest font-extrabold ">
          절로<span className="text-green-700 "> 가</span>
        </h2>
        <Image
          src={moktak}
          alt="목탁"
          className="hidden sm:flex sm:w-10 sm:h-10 sm:mt-0.5"
        />
      </Link>
    </div>
  );
}

export default Logo;
