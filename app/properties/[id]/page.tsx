import BreadCrumbs from "@/components/properties/BreadsCrumbs";
import RightSideBanner from "@/components/properties/RightSideBanner";
import ShareButton from "@/components/properties/ShareButton";
import { Separator } from "@/components/ui/separator";
import { fetchPropertyDetails } from "@/utils/action";
import { redirect } from "next/navigation";
import Description from "@/components/properties/Description";
import Amenities from "@/components/properties/Amenities";
import { FaStar } from "react-icons/fa6";
import { CarouselCard } from "@/components/card/CarouselCard";
import TempleMap from "@/components/properties/TempleMap";
import FooterAds from "@/components/ads/FooterAds";
import { Metadata } from "next";

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

  return (
    <section>
      <BreadCrumbs category={property.category} name={property.name} />
      <header className="flex justify-between items-center mt-2">
        <h1 className="sm:text-2xl text-base font-bold ">{property.title}</h1>
        <div className="sm:flex hidden text-sm lg:text-base items-center gap-x-2">
          <FaStar className="mb-1 text-muted-foreground" />
          {property.rating}(출처 : 구글)
          <div className="hidden sm:flex">
            <ShareButton name={property.name} propertyId={property.id} />
          </div>
        </div>
      </header>
      <CarouselCard
        image1={property.image1}
        image2={property.image2}
        image3={property.image3}
        // image4={property.image4}
        // image5={property.image5}
      />
      <section className=" gap-x-12 mt-5">
        <div className="lg:col-span-10 ">
          <div className="flex justify-between items-center">
            <h1 className="sm:text-2xl text-lg font-bold tracking-wider">
              {property.name}
            </h1>
            <div className="sm:hidden mb-2">
              <ShareButton name={property.name} propertyId={property.id} />
            </div>
          </div>
          <p className="whitespace-pre-line mt-2 text-muted-foreground text-sm lg:text-base leading-loose">
            {property.nameHistory}
          </p>
          <Separator className="my-4" />
          <Amenities property={property} />
          <Separator className="mt-4 mb-6" />
          <FooterAds />
          <Separator className="mt-4 mb-6" />
          <Description title="사찰 연혁" description={property.templeHistory} />
          <div className="my-5">
            <Description title="관련 설화" description={property.tale} />
          </div>
          <TempleMap lat={property.latitude} lon={property.longitude} />
        </div>
        {/* <div className="hidden xl:flex xl:col-span-2 flex-col items-center">
          <RightSideBanner />
        </div> */}
      </section>
    </section>
  );
}

export default PropertyDetailsPage;
