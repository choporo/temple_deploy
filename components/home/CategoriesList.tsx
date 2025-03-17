import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { categories } from "@/utils/categories";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";

function CategoriesList({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const searchTerm = search ? `&search=${search}` : "";

  // const defaultCategory = category ? category : categories[0].label;

  return (
    <section>
      <ScrollArea className="sm:py-2">
        <div
          className="whitespace-nowrap overflow-x-auto flex gap-x-4"
          onClick={() =>
            sendGTMEvent({ event: "categoryClicked", value: `${categories}` })
          }
        >
          {categories.map((item) => {
            const isActive = item.label === category;
            // const iconColor = isActive ? activeColor : inactiveColor;
            return (
              <Link
                key={item.label}
                href={`/?category=${item.label}${searchTerm}`}
                passHref
              >
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer w-[100px] ${
                    isActive ? "text-red-700 font-bold" : ""
                  }`}
                >
                  <item.icon
                    style={{ fill: isActive ? "#c81e1e" : "#111827" }}
                    className="xl:w-[40px] w-[30px] xl:h-[40px] h-[30px]"
                  />
                  <p className="capitalize xl:text-base text-sm mt-1 tracking-widest">
                    {item.label}
                  </p>
                </article>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
export default CategoriesList;
