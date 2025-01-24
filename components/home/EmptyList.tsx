import { Button } from "../ui/button";
import Link from "next/link";

function EmptyList({
  heading = "데이터 에러",
  btnText = "back home",
}: {
  heading?: string;
  btnText?: string;
}) {
  return (
    <div className="mt-4 text-center">
      <h2 className="text-sm font-bold ">{heading}</h2>
      {/* <p className="text-sm">{message}</p> */}
      <Button
        asChild
        className="mt-4 bg-green-700 text-white capitalize"
        size="lg"
        variant={"outline"}
      >
        <Link href="/" passHref>
          {btnText}
        </Link>
      </Button>
    </div>
  );
}
export default EmptyList;
