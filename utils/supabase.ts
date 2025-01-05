import { createClient } from "@supabase/supabase-js";

const bucket = "temple_road";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;

  const { data } = await supabase.storage.from(bucket).upload(newName, image, {
    cacheControl: "3600",
  });
  if (!data)
    throw new Error(
      "이미지 업로드에 실패했습니다. 파일 이름이 영어인지 확인해주세요"
    );
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const deleteImage = (url: string) => {
  const imageName = url.split("/").pop();
  if (!imageName) throw new Error("URL 주소가 잘못되었습니다");
  return supabase.storage.from(bucket).remove([imageName]);
};
