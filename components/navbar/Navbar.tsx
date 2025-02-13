import { Suspense } from "react";
import Logo from "./Logo";
import SubLogo from "./SubLogo";
import TempleInfo from "./TempleInfo";
import NavSearch from "./NavSearch";
import LoadingCards from "../card/LoadingCards";

function Navbar() {
  return (
    <nav className="border-b mx-1">
      <div className="container flex justify-between  flex-wrap sm:gap-4 py-6 items-center ">
        <Logo />
        <Suspense fallback={<LoadingCards />}>
          <NavSearch />
        </Suspense>
        <div className="flex md:gap-4 gap-2 items-center md:mr-2">
          <SubLogo />
          <div className="flex gap-2">
            <TempleInfo />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
