import { SubmitButton } from "@/components/form/Button";
import CategoriesInput from "@/components/form/CategoriesInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Separator } from "@/components/ui/separator";
import {
  fetchPropertyDetails,
  updatePropertyAction,
  updatePropertyImageAction,
  updatePropertyImageAction1,
  updatePropertyImageAction2,
  updatePropertyImageAction3,
  updatePropertyImageAction4,
  updatePropertyImageAction5,
} from "@/utils/action";
import React from "react";

async function EditPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const property = await fetchPropertyDetails(id);
  const {
    mainImage,
    image1,
    image2,
    image3,
    image4,
    image5,
    name,
    title,
    address,
    parking,
    entranceFee,
    publicBus,
    tale,
    nameHistory,
    rating,
    templeHistory,
    templeStay,
    category,
    hotPlace,
    latitude,
    longitude,
  } = property!;

  return (
    <section className="border rounded-sm p-2">
      <div className="grid grid-cols-3 gap-x-2 p-8 rounded">
        <ImageInputContainer
          action={updatePropertyImageAction}
          name="mainImage"
          image={mainImage}
          text="update main"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={mainImage} />
        </ImageInputContainer>
        <ImageInputContainer
          action={updatePropertyImageAction1}
          name="image1"
          image={image1}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url1" value={image1} />
        </ImageInputContainer>
        <ImageInputContainer
          action={updatePropertyImageAction2}
          name="image2"
          image={image2}
          text="update image2"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url2" value={image2} />
        </ImageInputContainer>
        <ImageInputContainer
          action={updatePropertyImageAction3}
          name="image3"
          image={image3}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url3" value={image3} />
        </ImageInputContainer>
        <ImageInputContainer
          action={updatePropertyImageAction4}
          name="image4"
          image={image4}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url4" value={image4} />
        </ImageInputContainer>
        <ImageInputContainer
          action={updatePropertyImageAction5}
          name="image5"
          image={image5}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url5" value={image5} />
        </ImageInputContainer>
      </div>
      <Separator />
      <div>
        <FormContainer action={updatePropertyAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="사찰명"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="title"
              label="title"
              defaultValue={title}
            />
            <FormInput
              type="text"
              name="address"
              label="주소"
              defaultValue={address}
            />
            <FormInput
              type="text"
              name="rating"
              label="평점"
              defaultValue={rating}
            />
            <FormInput
              type="text"
              name="entranceFee"
              label="입장료"
              defaultValue={entranceFee}
            />
            <FormInput
              type="text"
              name="parking"
              label="주차"
              defaultValue={parking}
            />
            <FormInput
              type="text"
              name="publicBus"
              label="대중교통"
              defaultValue={publicBus}
            />
            <FormInput
              type="text"
              name="templeStay"
              label="템플스테이"
              defaultValue={templeStay}
            />
            <FormInput
              type="text"
              name="hotPlace"
              label="주변 여행지/음식점"
              defaultValue={hotPlace}
            />
            <CategoriesInput defaultValue={category} />
            <FormInput
              type="text"
              name="latitude"
              label="위도"
              defaultValue={latitude}
            />
            <FormInput
              type="text"
              name="longitude"
              label="경도"
              defaultValue={longitude}
            />
          </div>
          <TextAreaInput
            name="nameHistory"
            labelText="사찰명 유래"
            defaultValue={nameHistory}
          />
          <TextAreaInput
            name="templeHistory"
            labelText="사찰연혁"
            defaultValue={templeHistory}
          />
          <TextAreaInput
            name="tale"
            labelText="관련 설화"
            defaultValue={tale}
          />
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default EditPage;