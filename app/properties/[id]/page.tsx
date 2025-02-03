import BreadCrumbs from "@/components/properties/BreadsCrumbs";
import ShareButton from "@/components/properties/ShareButton";
import { Separator } from "@/components/ui/separator";
import { fetchPropertyDetails } from "@/utils/action";
import { redirect } from "next/navigation";
import Description from "@/components/properties/Description";
import Amenities from "@/components/properties/Amenities";
import { FaStar } from "react-icons/fa6";
import TempleMap from "@/components/properties/TempleMap";
import FooterAds from "@/components/ads/FooterAds";
import { Metadata } from "next";
import ImageContainer from "@/components/properties/ImageContainer";
import HistoryDescription from "@/components/properties/HistoryDescription";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetch(
    `https://www.templeroad.kr/properties/${params.id}`
  );
  const post = await fetchPropertyDetails(params.id);

  return {
    title: post?.name,
    description: post?.nameHistory,
    robots: {
      follow: true,
      index: true,
      googleBot: {
        index: true,
      },
    },
  };
}

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");

  const {
    category,
    name,
    title,
    rating,
    image1,
    id,
    nameHistory,
    templeHistory,
    tale,
    latitude,
    longitude,
    address,
    publicBus,
    hotPlace,
    templeStay,
    entranceFee,
    parking,
  } = property;

  return (
    <section>
      <BreadCrumbs category={category} name={name} />
      <header className="flex justify-between items-center mt-2">
        <h1 className="sm:text-2xl text-base tracking-wider font-bold">
          {title}
        </h1>
        <div className="sm:flex hidden text-sm lg:text-base items-center gap-x-2">
          <FaStar className="text-yellow-500 mb-0.5" />
          <h4 className="text-center">{rating}(출처 : 구글)</h4>
          <div className="hidden sm:flex">
            <ShareButton name={name} propertyId={id} />
          </div>
        </div>
      </header>
      <ImageContainer mainImage={image1} name={name} />
      <section className="mt-5">
        <div>
          <h1 className="sm:text-2xl text-lg font-bold tracking-wider ml-1">
            {name}
          </h1>
          <p className="whitespace-pre-line tracking-wider text-sm mt-1 sm:text-base leading-loose first-letter:ml-1">
            {nameHistory}
          </p>
          <Separator className="my-4" />
          <Amenities
            address={address}
            publicBus={publicBus}
            parking={parking}
            entranceFee={entranceFee}
            hotPlace={hotPlace}
            templeStay={templeStay}
          />
          <Separator className="mt-4 mb-6" />
          <FooterAds />
          <Separator className="mt-4 mb-6" />
          <HistoryDescription title="사찰 연혁" description={templeHistory} />
          <div className="my-5">
            <Description title="관련 설화" description={tale} />
          </div>
          <TempleMap lat={latitude} lon={longitude} />
        </div>
      </section>
    </section>
  );
}

export default PropertyDetailsPage;
