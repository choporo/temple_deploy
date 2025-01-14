import Link from "next/link";

function Logo() {
  return (
    <div className="mt-2">
      <Link href="/">
        <h2 className="xl:text-2xl text-sm text-orange-800 font-jalnan tracking-wider font-extrabold">
          절로<span className="text-green-700 "> 가</span>
        </h2>
      </Link>
    </div>
  );
}

export default Logo;
