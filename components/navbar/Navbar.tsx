import { Suspense } from "react";
import Logo from "./Logo";
import SubLogo from "./SubLogo";
import TempleInfo from "./TempleInfo";
import NavSearch from "./NavSearch";
import LoadingCards from "../card/LoadingCards";
import Link from "next/link";
import Image from "next/image";
import play from "@/public/image/play.png";

function Navbar() {
  return (
    <nav className="border-b mx-1">
      <div className="container flex justify-between  flex-wrap sm:gap-4 py-6 items-center ">
        <Logo />
        <Suspense fallback={<LoadingCards />}>
          <NavSearch />
        </Suspense>
        <div className="flex md:gap-4 gap-2 items-center md:mr-2">
          {/* <SubLogo /> */}
          <div className="w-full h-16 hidden xl:flex items-center">
            <Link
              href="https://play.google.com/store/apps/details?id=com.choporo.temple"
              passHref
              aria-label="google_play"
            >
              <Image
                src={play}
                alt="google_play"
                priority
                unoptimized
                sizes="100vw"
                className="w-28 h-9 mx-auto"
              />
            </Link>
          </div>
          <div className="flex gap-2">
            <TempleInfo />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
