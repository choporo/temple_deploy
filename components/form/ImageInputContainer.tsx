"use client";
import Image from "next/image";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Button";
import { type actionFunction } from "@/utils/types";
import { Button } from "../ui/button";
import { useState } from "react";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        width={200}
        height={200}
        // fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-md object-cover mb-4"
        alt={name}
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput name={name} />
            <SubmitButton className="mt-3" size="sm" text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
export default ImageInputContainer;
