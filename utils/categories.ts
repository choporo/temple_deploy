import seoul from "@/public/icons/seoul.png";
import busan from "@/public/icons/busan.png";
import incheon from "@/public/icons/incheon.png";
import daegu from "@/public/icons/daegu.png";
import daejeon from "@/public/icons/daejeon.png";
import ulsan from "@/public/icons/ulsan.png";
import gangwon from "@/public/icons/gangwon.png";
import gyeonggi from "@/public/icons/gyeonggi.png";
import chungnam from "@/public/icons/chungnam.png";
import chungbuk from "@/public/icons/chungbuk.png";
import jeonnam from "@/public/icons/jeonnam.png";
import jeonbuk from "@/public/icons/jeonbuk.png";
import gyeongnam from "@/public/icons/gyeongnam.png";
import gyeongbuk from "@/public/icons/gyeongbuk.png";
import { StaticImageData } from "next/image";

type Category = {
  label: CategoryLabel;
  icon: StaticImageData;
};

export type CategoryLabel =
  | "서울"
  | "부산"
  | "대구"
  | "인천"
  | "광주/전남"
  | "대전/세종"
  | "울산"
  | "경기"
  | "강원"
  | "충남"
  | "충북"
  | "경남"
  | "경북"
  | "전북";

export const categories: Category[] = [
  {
    label: "서울",
    icon: seoul,
  },
  {
    label: "부산",
    icon: busan,
  },
  {
    label: "대구",
    icon: daegu,
  },
  {
    label: "광주/전남",
    icon: jeonnam,
  },
  {
    label: "인천",
    icon: incheon,
  },
  {
    label: "대전/세종",
    icon: daejeon,
  },
  {
    label: "울산",
    icon: ulsan,
  },
  {
    label: "경기",
    icon: gyeonggi,
  },
  {
    label: "강원",
    icon: gangwon,
  },
  {
    label: "충남",
    icon: chungnam,
  },
  {
    label: "충북",
    icon: chungbuk,
  },
  {
    label: "전북",
    icon: jeonbuk,
  },
  {
    label: "경남",
    icon: gyeongnam,
  },
  {
    label: "경북",
    icon: gyeongbuk,
  },
];
