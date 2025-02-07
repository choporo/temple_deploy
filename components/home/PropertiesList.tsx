import InFeedAds from "../ads/InFeedAds";
import PropertyCard from "../card/PropertyCard";
import type { PropertyCardProps } from "@/utils/types";

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <div>
      <p className="text-xs mx-1 font-bold text-right tracking-wider text-red-700">
        <span className="text-yellow-500 text-sm">★</span> 출처 : Google
      </p>
      <section className="mt-4 gap-8 grid sm:grid-cols-2  lg:grid-cols-3  ">
        {properties.map((property, index) => {
          return index / index === 0 ? (
            <InFeedAds />
          ) : (
            <PropertyCard key={property.id} property={property} index={index} />
          );
        })}
      </section>
    </div>
  );
}
export default PropertiesList;
