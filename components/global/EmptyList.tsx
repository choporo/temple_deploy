import { cn } from "@/lib/utils";

function EmptyList({
  heading = "등록된 목록이 없습니다",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <h2 className={cn("text-sm text-orange-400 text-center my-5", className)}>
      {heading}
    </h2>
  );
}

export default EmptyList;
