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
    return <EmptyList heading="등록된 사찰 정보가 없습니다" btnText="메인" />;
  }

  return <PropertiesList properties={properties} category={category} />;
}
export default PropertiesContainer;
