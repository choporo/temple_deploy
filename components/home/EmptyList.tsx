import { Button } from "../ui/button";
import Link from "next/link";

function EmptyList({
  heading = "데이터 에러",
  message = "등록된 데이터를 불러올 수 없습니다. 다시 시도해주세요",
  btnText = "back home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) {
  return (
    <div className="mt-4 text-center">
      <h2 className="text-sm font-bold ">{heading}</h2>
      <p className="text-sm">{message}</p>
      <Button
        asChild
        className="mt-4 bg-green-700 text-white capitalize"
        size="lg"
        variant={"outline"}
      >
        <Link href="/">{btnText}</Link>
      </Button>
    </div>
  );
}
export default EmptyList;
