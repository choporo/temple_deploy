import InFeedAds from "../ads/InFeedAds";
import PropertyCard from "../card/PropertyCard";
import type { PropertyCardProps } from "@/utils/types";

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <section className="mt-4 gap-8 grid sm:grid-cols-2  lg:grid-cols-3  ">
      {properties.map((property, index) => {
        // if (index === 5) return <InFeedAds key={index} />;
        return <PropertyCard key={property.id} property={property} />;
      })}
    </section>
  );
}
export default PropertiesList;
