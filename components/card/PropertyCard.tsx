"use client";
import Image from "next/image";
import Link from "next/link";
import { PropertyCardProps } from "@/utils/types";
import { motion } from "framer-motion";

function PropertyCard({
  property,
  index,
}: {
  property: PropertyCardProps;
  index: number;
}) {
  const {
    id: propertyId,
    title,
    templeStay,
    address,
    name,
    mainImage,
  } = property;

  return (
    <motion.article
      className="group relative border-2 border-gray-100 rounded-sm shadow-sm"
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={`/properties/${propertyId}`} passHref>
        <div className="relative h-[220px] xl:h-[250px] mb-2 overflow-hidden rounded-md">
          <Image
            src={mainImage}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            priority
            blurDataURL={mainImage}
            placeholder="blur"
            alt={name}
            className="p-1 rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500 "
          />
        </div>
        <div className="flex justify-between items-center mx-1">
          <h3 className="xl:text-base text-sm font-semibold">{name}</h3>
        </div>
        <p className="xl:text-sm text-xs mx-1 mt-1">{title}</p>
        <div className="flex justify-between mx-1 items-center my-1">
          <p className="xl:text-sm text-xs ">
            {address.split(" ")[1]} {address.split(" ")[2]}
          </p>
          <p className="xl:text-sm text-xs mr-1">{templeStay}</p>
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-5"></div>
    </motion.article>
  );
}
export default PropertyCard;
