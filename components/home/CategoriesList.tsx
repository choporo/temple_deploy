import React from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { categories } from "@/utils/categories";
import Link from "next/link";
import Image from "next/image";

function CategoriesList({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const searchTerm = search ? `&search=${search}` : "";

  const defaultCategory = category ? category : categories[0].label;
  const activeColor = "#4263eb";
  const inactiveColor = "#868e96";

  return (
    <section>
      <ScrollArea className="sm:py-2">
        <div className="whitespace-nowrap overflow-x-auto flex gap-x-4">
          {categories.map((item) => {
            const isActive = item.label === defaultCategory;
            const iconColor = isActive ? activeColor : inactiveColor;
            return (
              <Link
                key={item.label}
                href={`/?category=${item.label}${searchTerm}`}
              >
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer w-[100px] ${
                    isActive ? "text-cyan-700 font-extrabold" : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={50}
                    height={50}
                    style={{
                      filter: isActive
                        ? "invert(20%) sepia(20%) saturate(10000%) hue-rotate(180deg)"
                        : "none",
                    }}
                    className="w-10 h-10 "
                  />
                  <p className="capitalize text-md mt-1 tracking-widest">
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
