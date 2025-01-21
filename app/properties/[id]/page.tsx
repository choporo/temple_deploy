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
        <h1 className="sm:text-2xl text-base tracking-wider font-bold">
          {property.title}
        </h1>
        <div className="sm:flex hidden text-sm lg:text-base items-center gap-x-2">
          <FaStar className="text-yellow-500 mb-0.5" />
          <h4 className="text-center">{property.rating}(출처 : 구글)</h4>
          <div className="hidden sm:flex">
            <ShareButton name={property.name} propertyId={property.id} />
          </div>
        </div>
      </header>
      <ImageContainer mainImage={property.image1} name={property.name} />
      <section className="mt-5">
        <div>
          <h1 className="sm:text-2xl text-lg font-bold tracking-wider">
            {property.name}
          </h1>
          <p className="whitespace-pre-line tracking-wider text-sm sm:text-base leading-loose">
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
      </section>
    </section>
  );
}

export default PropertyDetailsPage;
