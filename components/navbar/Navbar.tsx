import Logo from "./Logo";
import SubLogo from "./SubLogo";
import TempleInfo from "./TempleInfo";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex flex-row justify-between  flex-wrap gap-4 py-5">
        <Logo />
        {/* <Suspense fallback={<LoadingCards />}>
          <NavSearch />
        </Suspense> */}
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
