"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

export function CarouselCard({
  image1,
  image2,
}: // image3,
// image4,
// image5,
{
  image1: string;
  image2: string;
  // image3: string;
  // image4: string;
  // image5: string;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const images = [image1, image2];

  return (
    <Carousel
      plugins={[plugin.current as any]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play as any}
    >
      <CarouselContent>
        {images.map((image, index) => {
          return (
            <CarouselItem key={index} className="h-[300px] md:h-[500px] mt-2">
              <Card className="h-full">
                <CardContent className=" p-1 relative h-full">
                  <Image
                    src={image}
                    alt="이미지"
                    fill
                    priority
                    style={{
                      objectFit: "cover",
                      objectPosition: "50% 60%",
                    }}
                    sizes="100vw"
                    className="rounded-md"
                    // placeholder="blur"
                    // blurDataURL={image}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
