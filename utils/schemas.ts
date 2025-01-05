import * as z from "zod";
import { ZodSchema } from "zod";

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(", "));
  }
  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  // const maxUploadSize = 5024 * 5024;
  const acceptedFileTypes = ["image/"];
  return (
    z
      .instanceof(File)
      // .refine((file) => {
      //   // return !file || file.size <= maxUploadSize;
      // }, `파일은 5MB 이하로 올리게`)
      .refine((file) => {
        return (
          !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
        );
      }, "반드시 영어 이름으로 된 파일을 등록하게, 한글 이름은 안되네")
  );
}

export const propertySchema = z.object({
  name: z.string(),
  title: z.string(),
  address: z.string(),
  parking: z.string(),
  entranceFee: z.string(),
  publicBus: z.string(),
  category: z.string(),
  tale: z.string(),
  nameHistory: z.string(),
  rating: z.string(),
  templeHistory: z.string(),
  templeStay: z.string(),
  hotPlace: z.string(),
  latitude: z.string(),
  longitude: z.string(),
});
