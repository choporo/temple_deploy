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
      <p className="text-sm sm:text-base whitespace-pre-line tracking-widest leading-loose first-letter:ml-2">
        {description}
      </p>
    </article>
  );
};

export default Description;
