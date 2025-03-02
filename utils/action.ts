"use server";
import { redirect } from "next/navigation";
import { imageSchema, propertySchema, validateWithZodSchema } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";
import db from "./db";
import { revalidatePath } from "next/cache";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message:
      error instanceof Error ? error.message : "알 수 없는 에러가 발생했습니다",
  };
};

export const createPropertyAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("mainImage") as File;
    const file1 = formData.get("image1") as File;
    const file2 = formData.get("image2") as File;
    const file3 = formData.get("image3") as File;
    const file4 = formData.get("image4") as File;
    const file5 = formData.get("image5") as File;

    const validatedFields = validateWithZodSchema(propertySchema, rawData);

    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const validatedFile1 = validateWithZodSchema(imageSchema, { image: file1 });
    const validatedFile2 = validateWithZodSchema(imageSchema, { image: file2 });
    const validatedFile3 = validateWithZodSchema(imageSchema, { image: file3 });
    const validatedFile4 = validateWithZodSchema(imageSchema, { image: file4 });
    const validatedFile5 = validateWithZodSchema(imageSchema, { image: file5 });

    const fullPath = await uploadImage(validatedFile.image);
    const fullPath1 = await uploadImage(validatedFile1.image);
    const fullPath2 = await uploadImage(validatedFile2.image);
    const fullPath3 = await uploadImage(validatedFile3.image);
    const fullPath4 = await uploadImage(validatedFile4.image);
    const fullPath5 = await uploadImage(validatedFile5.image);

    await db.property.create({
      data: {
        ...validatedFields,
        mainImage: fullPath,
        image1: fullPath1,
        image2: fullPath2,
        image3: fullPath3,
        image4: fullPath4,
        image5: fullPath5,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  revalidatePath(`/admin/property`);
  return { message: "상품등록이 완료되었다네.. 허허허" };
};

export const fetchAllProperties = async () => {
  const properties = await db.property.findMany({
    orderBy: {
      category: "desc",
    },
    select: {
      id: true,
      updatedAt: true
    },
  });

  return properties;
};

export const fetchPropertiesRss = async () => {
  const properties = await db.property.findMany({
  
    select: {
      id: true,
      name: true,
      title: true,
      templeStay: true,
      updatedAt: true
    },
  });

  return properties;
};

export const fetchProperties = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  // const defaultCategory = category ? category : "서울";
  // const defaultSearch = search ? undefined  : defaultCategory

  const properties = await db.property.findMany({
    
    where: {
      category,
      OR:[
        {name: {contains: search, mode:"insensitive"}},
        {address: {contains: search, mode: 'insensitive'}},
        {title: {contains: search, mode: 'insensitive'}},
        {templeStay: {contains: search, mode: 'insensitive'}},
        {category: {contains: search, mode: 'insensitive'}},
        {parking: {contains: search, mode: 'insensitive'}}
      ]
    },
    orderBy: {
      updatedAt:"desc",
    },
    select: {
      mainImage: true,
        id: true,
        name: true,
        title: true,
        address: true,
        rating: true,
        templeStay: true,
        category: true,
        parking: true
    },
  });
  return properties;
};

export const fetchAdminProperties = async ({
  category,
}: {
  category?: string;
}) => {
  const properties = await db.property.findMany({
    where: {
      category
    },
    orderBy: {
      updatedAt:"desc",
    },
    select: {
        id: true,
        name: true,
        category: true,
    },
  });
  return properties;
};

export const fetchPropertyEdit= async (id: string) => {
  return db.property.findUnique({
    where: {
      id,
    },
    select:{
        mainImage: true,
        image1: true,
        id: true,
        name: true,
        title: true,
        address: true,
        parking: true,
        entranceFee: true,
        publicBus: true,
        tale: true,
        nameHistory: true,
        rating: true,
        templeHistory: true,
        templeStay: true,
        hotPlace: true,
        longitude: true,
        latitude: true,
        category: true,
    }
  });
};

export const fetchPropertyDetails = async (id: string) => {
  return db.property.findUnique({
    where: {
      id,
    },
    select:{
        image1: true,
        name: true,
        title: true,
        address: true,
        parking: true,
        entranceFee: true,
        publicBus: true,
        tale: true,
        nameHistory: true,
        rating: true,
        templeHistory: true,
        templeStay: true,
        hotPlace: true,
        longitude: true,
        latitude: true,
        category: true,
    }
  });
};

export const updatePropertyImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const propertyId = formData.get("id") as string;
  const oldImageUrl = formData.get("url") as string;

  try {
    const file = formData.get("mainImage") as File;
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await deleteImage(oldImageUrl);

    await db.property.update({
      where: {
        id: propertyId,
      },
      data: {
        mainImage: fullPath,
      },
    });
    revalidatePath(`/admin/property/${propertyId}/edit`);
    return { message: "이미지 업로드 완료" };
  } catch (error) {
    return renderError(error);
  }
};

export const updatePropertyImageAction1 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const propertyId = formData.get("id") as string;
  const oldImageUrl1 = formData.get("url1") as string;

  try {
    const file = formData.get("image1") as File;
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await deleteImage(oldImageUrl1);

    await db.property.update({
      where: {
        id: propertyId,
      },
      data: {
        image1: fullPath,
      },
    });
    revalidatePath(`/admin/property/${propertyId}/edit`);
    return { message: "이미지 업로드 완료" };
  } catch (error) {
    return renderError(error);
  }
};

export const updatePropertyImageAction2 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const propertyId = formData.get("id") as string;
  const oldImageUrl = formData.get("url2") as string;

  try {
    const file = formData.get("image2") as File;
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await deleteImage(oldImageUrl);

    await db.property.update({
      where: {
        id: propertyId,
      },
      data: {
        image2: fullPath,
      },
    });
    revalidatePath(`/admin/property/${propertyId}/edit`);
    return { message: "이미지 업로드 완료" };
  } catch (error) {
    return renderError(error);
  }
};

export const updatePropertyImageAction3 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const propertyId = formData.get("id") as string;
  const oldImageUrl = formData.get("url3") as string;

  try {
    const file = formData.get("image3") as File;
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await deleteImage(oldImageUrl);

    await db.property.update({
      where: {
        id: propertyId,
      },
      data: {
        image3: fullPath,
      },
    });
    revalidatePath(`/admin/property/${propertyId}/edit`);
    return { message: "이미지 업로드 완료" };
  } catch (error) {
    return renderError(error);
  }
};

export const updatePropertyImageAction4 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const propertyId = formData.get("id") as string;
  const oldImageUrl = formData.get("url4") as string;

  try {
    const file = formData.get("image4") as File;
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await deleteImage(oldImageUrl);

    await db.property.update({
      where: {
        id: propertyId,
      },
      data: {
        image4: fullPath,
      },
    });
    revalidatePath(`/admin/property/${propertyId}/edit`);
    return { message: "이미지 업로드 완료" };
  } catch (error) {
    return renderError(error);
  }
};

export const updatePropertyImageAction5 = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const propertyId = formData.get("id") as string;
  const oldImageUrl = formData.get("url5") as string;

  try {
    const file = formData.get("image5") as File;
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await deleteImage(oldImageUrl);

    await db.property.update({
      where: {
        id: propertyId,
      },
      data: {
        image5: fullPath,
      },
    });
    revalidatePath(`/admin/property/${propertyId}/edit`);
    return { message: "이미지 업로드 완료" };
  } catch (error) {
    return renderError(error);
  }
};

export const updatePropertyAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const propertyId = formData.get("id") as string;
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(propertySchema, rawData);

    await db.property.update({
      where: {
        id: propertyId,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath(`/admin/property/${propertyId}/edit`);
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin");
};

export const deletePropertyAction = async (prevState: {
  packageId: string;
}) => {
  const { packageId } = prevState;
  try {
    const property = await db.property.delete({
      where: {
        id: packageId,
      },
    });
    await deleteImage(property.mainImage);
    await deleteImage(property.image1);
    await deleteImage(property.image2);
    await deleteImage(property.image3);
    await deleteImage(property.image4);
    await deleteImage(property.image5);
    revalidatePath("/dashboard/property");
    return { message: "삭제되었습니다" };
  } catch (error) {
    return renderError(error);
  }
};
