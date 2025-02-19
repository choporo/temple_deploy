import { StringValidation } from "zod";

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
  mainImage: string;
  id: string;
  name: string;
  title: string;
  address: string;
  rating: string;
  templeStay: string;
  parking: string
};

export type AdminProps = {
id: string,
name: string,
category: string,
}

export type NaverMap = naver.maps.Map;

type Lng = number
type Lat = number

export type Coordinates = [Lat, Lng];

