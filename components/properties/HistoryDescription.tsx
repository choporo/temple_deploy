"use client";
import Title from "./Title";
const Description = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <article className="mt-2">
      <Title text={title} />
      <p className="text-sm/8 sm:text-base/8 whitespace-pre-line text-justify tracking-widest ml-2.5">
        {description}
      </p>
    </article>
  );
};

export default Description;
