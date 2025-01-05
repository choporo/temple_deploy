import Title from "./Title";
import { FaSearchLocation } from "react-icons/fa";
import {
  FaLocationDot,
  FaWonSign,
  FaBus,
  FaSquareParking,
  FaBed,
} from "react-icons/fa6";
import { PropertyCardProps } from "@/utils/types";

function Amenities({ property }: { property: PropertyCardProps }) {
  return (
    <div className="items-center my-3 ">
      <div className="my-3">
        <div className="flex items-center gap-x-4 my-5">
          <FaLocationDot className="sm:h-5 h-4 sm:w-5 w-4" />
          <span className="text-sm lg:text-base text-muted-foreground">
            {property.address}
          </span>
        </div>
        <div className="flex items-center gap-x-4 my-5">
          <FaBus className="sm:h-5 h-4 sm:w-5 w-4" />
          <span className="text-sm lg:text-base text-muted-foreground">
            {property.publicBus}
          </span>
        </div>
        <div className="flex items-center gap-x-4 my-5">
          <FaSearchLocation className="sm:h-5 h-4 sm:w-5 w-4" />
          <span className="text-sm lg:text-base text-muted-foreground">
            {property.hotPlace}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-4 my-5">
        <FaBed className="sm:h-5 h-4 sm:w-5 w-4" />
        <span className="text-sm lg:text-base text-muted-foreground">
          {property.templeStay}
        </span>
      </div>
      <div className="flex items-center gap-x-4 my-5">
        <FaWonSign className="sm:h-5 h-4 sm:w-5 w-4" />
        <span className="text-sm lg:text-base text-muted-foreground">
          {property.entranceFee}
        </span>
      </div>
      <div className="flex items-center gap-x-4 my-5">
        <FaSquareParking className="sm:h-5 h-4 sm:w-5 w-4 " />
        <span className="text-sm lg:text-base text-muted-foreground">
          {property.parking}
        </span>
      </div>
    </div>
  );
}
export default Amenities;
