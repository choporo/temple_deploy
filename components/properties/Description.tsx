"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Title from "./Title";
const Description = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };

  const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 100).join(" ") + "..."
      : description;

  return (
    <article className="mt-2">
      <Title text={title} />
      <p className="text-sm whitespace-pre-line leading-loose">
        {displayedDescription}
      </p>
      {isLongDescription && (
        <Button
          variant="link"
          className="pl-0 text-green-700 text-xs leading-loose"
          onClick={toggleDescription}
        >
          {isFullDescriptionShown ? "그만보기" : "자세히보기"}
        </Button>
      )}
    </article>
  );
};

export default Description;
