import { sanctum } from "@/utils/aboutTemple";

function MobileVertionBuddhaFirst() {
  return (
    <article className="text-justify">
      <h2 className="text-base/loose tracking-wider font-pretendard_bold text-center">
        2. 전각(殿閣)의 종류
      </h2>
      <p className="text-xs/loose font-pretendard_bold tracking-wider text-center mb-2">
        -불상을 모신 곳은 전(殿), 그 외는 각(閣)이라고 함-
      </p>
      <div className="tracking-wide text-justify ">
        {sanctum.map((item, index) => (
          <p className="mb-2 text-sm/loose">{index < 7 ? item.label : null}</p>
        ))}
      </div>
    </article>
  );
}

export default MobileVertionBuddhaFirst;
