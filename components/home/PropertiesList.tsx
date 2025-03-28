"use client";
import { useState } from "react";
import InFeedAds from "../ads/InFeedAds";
import PropertyCard from "../card/PropertyCard";
import type { PropertyCardProps } from "@/utils/types";
import PaginationSection from "../properties/PaginationSection";

function PropertiesList({
  properties,
  category,
}: {
  properties: PropertyCardProps[];
  category?: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = properties.slice(firstItemIndex, lastItemIndex);

  return (
    <div className="sm:p-1 mt-2">
      <p className="text-xs mx-1 font-bold text-right tracking-wider text-red-700">
        <span className="text-yellow-500 text-sm">★</span> 출처 : Google
      </p>

      <section className="mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3  ">
        {currentItems.map((property, index) =>
          properties.length > 50 && index === 4 ? (
            <InFeedAds key={index} />
          ) : (
            <PropertyCard key={property.id} property={property} index={index} />
          )
        )}
        {/* <div className="xl:flex hidden">
          {currentItems.length < 6 && currentItems.length !== 3 ? (
            <InFeedAds />
          ) : null}
        </div> */}
      </section>
      <div className="my-5">
        <PaginationSection
          totalItems={properties.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
export default PropertiesList;
