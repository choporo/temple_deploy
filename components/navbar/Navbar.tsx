import React, { Suspense } from "react";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import SubLogo from "./SubLogo";
import TempleInfo from "./TempleInfo";
import LoadingCards from "../card/LoadingCards";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-row justify-between sm:items-center flex-wrap gap-4 py-5">
        <Logo />
        <Suspense fallback={<LoadingCards />}>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center ">
          <div className="hidden sm:flex">
            <SubLogo />
          </div>
          <div className="flex gap-2">
            {/* <DarkMode /> */}
            <TempleInfo />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
