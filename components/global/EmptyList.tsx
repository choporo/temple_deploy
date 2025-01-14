import { cn } from "@/lib/utils";

function EmptyList({
  heading,
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
