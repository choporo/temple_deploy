import { StringValidation } from "zod";

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
  mainImage: string;
  // image1: string;
  // image2: string;
  // image3: string;
  id: string;
  name: string;
  title: string;
  address: string;
  // parking: string;
  // entranceFee: string;
  // publicBus: string;
  // tale: string;
  // nameHistory: string;
  // rating: string;
  // templeHistory: string;
  templeStay: string;
  // hotPlace: string;
};

