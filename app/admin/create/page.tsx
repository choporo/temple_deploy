import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/action";
import { SubmitButton } from "@/components/form/Button";
import CategoriesInput from "@/components/form/CategoriesInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ImageInput from "@/components/form/ImageInput";

function CreateProperty() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create temple</h1>
      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput name="name" type="text" label="사찰이름" />
            <FormInput name="title" type="text" label="사찰 부제" />
            <FormInput name="parking" type="text" label="주차비" />
            <FormInput name="entranceFee" type="text" label="입장료" />
            <FormInput name="publicBus" type="text" label="대중교통" />
            <FormInput name="rating" type="text" label="구글 별점" />
            <FormInput name="address" type="text" label="주소" />
            <CategoriesInput />
            <FormInput name="hotPlace" type="text" label="주변 여행지/음식점" />
            <FormInput name="templeStay" type="text" label="템플스테이" />
            <FormInput name="latitude" type="text" label="위도" />
            <FormInput name="longitude" type="text" label="경도" />
          </div>
          <div className="grid sm:grid-cols-3 gap-8 mt-4">
            <ImageInput name="mainImage" />
            <ImageInput name="image1" />
            <ImageInput name="image2" />
            <ImageInput name="image3" />
            {/* <ImageInput name="image4" />
            <ImageInput name="image5" /> */}
          </div>
          <TextAreaInput name="nameHistory" labelText="사찰명의 유래" />
          <TextAreaInput name="templeHistory" labelText="사찰의 역사" />
          <TextAreaInput name="tale" labelText="사찰 관련 설화" />

          <SubmitButton text="create temple" className="mt-12 bg-green-700" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProperty;
