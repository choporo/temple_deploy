import { FaSearchLocation } from "react-icons/fa";
import {
  FaLocationDot,
  FaWonSign,
  FaBus,
  FaSquareParking,
  FaBed,
} from "react-icons/fa6";

function Amenities({
  address,
  publicBus,
  hotPlace,
  templeStay,
  entranceFee,
  parking,
}: {
  address: string;
  publicBus: string;
  hotPlace: string;
  templeStay: string;
  entranceFee: string;
  parking: string;
}) {
  return (
    <div className="items-center my-3 ">
      <div className="my-3 mx-2">
        <div className="flex items-center gap-x-4 my-5">
          <FaLocationDot className="sm:h-5 h-4 sm:w-5 w-4" />
          <span className="text-sm tracking-wider">{address}</span>
        </div>
        <div className="flex items-center gap-x-4 my-5">
          <FaBus className="sm:h-5 h-4 sm:w-5 w-4" />
          <span className="text-sm tracking-wider">{publicBus}</span>
        </div>
        <div className="flex items-center gap-x-4 my-5">
          <FaSearchLocation className="sm:h-5 h-4 sm:w-5 w-4" />
          <span className="text-sm tracking-wider">{hotPlace}</span>
        </div>
        <div className="flex items-center gap-x-4 my-5">
          <FaBed className="sm:h-5 h-4 sm:w-5 w-4" />
          <span className="text-sm tracking-wider">
            {templeStay === "-" ? "템플스테이 미운영" : templeStay}
          </span>
        </div>
        <div className="flex items-center gap-x-4 my-5">
          <FaWonSign className="sm:h-5 h-4 sm:w-5 w-4" />
          <span className="text-sm tracking-wider">{entranceFee}</span>
        </div>
        <div className="flex items-center gap-x-4 my-5">
          <FaSquareParking className="sm:h-5 h-4 sm:w-5 w-4 " />
          <span className="text-sm tracking-wider">
            {parking.split(":")[1]}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Amenities;
