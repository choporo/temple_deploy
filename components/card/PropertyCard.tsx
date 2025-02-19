"use client";
import Image from "next/image";
import Link from "next/link";
import { PropertyCardProps } from "@/utils/types";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

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
    rating,
    parking,
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
        <div className="flex justify-between items-center mx-2">
          <h1 className="xl:text-base text-sm font-pretendard_bold tracking-wider">
            {name}
          </h1>
          <div className="flex xl:text-sm text-xs items-center gap-x-2 tracking-wide">
            <FaStar className="text-yellow-500 mb-0.5" />
            <p className="text-center">{rating}</p>
          </div>
        </div>
        <p className="xl:text-sm text-xs mx-2 mt-1 tracking-wide">{title}</p>
        <div className="flex justify-between mx-2 items-center my-1 tracking-wide xl:text-sm text-xs ">
          <div className="flex">
            <p>
              {address.split(" ")[0]} {address.split(" ")[1]}
            </p>

            {parking.split(":")[1] === "무료" ? null : (
              <p>
                {"("}
                {parking}
                {")"}
              </p>
            )}
          </div>
          <p>{templeStay === "-" ? "" : templeStay}</p>
        </div>
      </Link>
      <div className="absolute top-5 right-5 z-5"></div>
    </motion.article>
  );
}
export default PropertyCard;
