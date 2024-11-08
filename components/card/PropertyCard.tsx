import Image from "next/image";
import Link from "next/link";
import { PropertyCardProps } from "@/utils/types";

function PropertyCard({ property }: { property: PropertyCardProps }) {
  const { name, mainImage } = property;
  const { id: propertyId, title, templeStay, address } = property;

  return (
    <article className="group relative border-2 border-gray-100 rounded-sm shadow-sm">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={mainImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            alt={name}
            className="p-1 rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500 "
          />
        </div>
        <div className="flex justify-between items-center mx-1">
          <h3 className="text-base font-semibold mt-1">{name}</h3>
        </div>
        <p className="text-sm mx-1 mt-1">{title}</p>
        <div className="flex justify-between mx-1 items-center my-1">
          <p className="text-sm">
            {address.split(" ")[0]} {address.split(" ")[1]}
          </p>
          <p className="text-sm mr-1">{templeStay}</p>
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-5">
        {/* favorite toggle button */}
      </div>
    </article>
  );
}
export default PropertyCard;
