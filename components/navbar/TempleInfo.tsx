"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import lotus from "@/public/image/lotus.png";
import { sendGTMEvent } from "@next/third-parties/google";

export default function ModeToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LuAlignLeft className="w-6 h-6 " />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex gap-x-2"
          onClick={() =>
            sendGTMEvent({ event: "aboutClicked", value: "about" })
          }
        >
          <Image
            src={lotus}
            alt="연꽃"
            className="w-6 h-6 sm:w-8 sm:h-8"
            unoptimized
          />
          <Link href={"/about"} className="text-xs sm:text-sm" passHref>
            불교 용어 해설
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
