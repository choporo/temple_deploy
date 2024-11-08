import { fetchProperties } from "@/utils/action";
import PropertiesList from "./PropertiesList";
import EmptyList from "./EmptyList";
import type { PropertyCardProps } from "@/utils/types";

async function PropertiesContainer({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="등록된 사찰 정보가 없습니다"
        message="빠른 시간안에 사찰 정보를 등록하겠습니다"
        btnText="Back Home"
      />
    );
  }

  return <PropertiesList properties={properties} />;
}
export default PropertiesContainer;
