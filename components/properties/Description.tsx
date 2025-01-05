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
  return (
    <article className="mt-2">
      <Title text={title} />
      <p className="text-sm lg:text-base text-muted-foreground whitespace-pre-line tracking-widest leading-loose">
        {description}
      </p>
    </article>
  );
};

export default Description;
