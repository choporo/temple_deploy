"use client";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import AboutPortal from "./AboutPortal";
import AboutFourProducts from "./AboutFourProducts";
import MobileVersionFirst from "./MobileVersionFirst";
import MobileVersionSecond from "./MobileVersionSecond";
import MobileVertionBuddhaFirst from "./MobileVertionBuddhaFirst";
import MobileVertionBuddhaSecond from "./MobileVertionBuddhaSecond";

function MobileVersion({ className }: { className?: string }) {
  const items = [
    <MobileVersionFirst key={0} />,
    <MobileVersionSecond key={1} />,
    <MobileVertionBuddhaFirst key={2} />,
    <MobileVertionBuddhaSecond key={3} />,
    <AboutFourProducts key={4} />,
    <AboutPortal key={5} />,
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([] as any);

  const rightClickHandler = () => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  };

  const leftClickHandler = () => {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
  };

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler();
    prevIndex.current = index;
  }, [index]);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative w-[350px] h-[700px] flex items-center justify-center overflow-hidden"
      >
        {items.map((item, index) => (
          <motion.div
            initial={{ x: "100%" }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 p-3 rounded-md mt-3"
            key={index}
            ref={(el) => slides.current.push(el)}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
      <div className="flex gap-x-4 mt-5">
        <Button
          variant="ghost"
          onClick={() => {
            setDirection(true);
            setIndex(index - 1);
          }}
          className={`${
            index === 0
              ? "opacity-30 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          } hover:scale-150 transition-all`}
          size="sm"
        >
          <IoIosArrowBack />
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            setDirection(false);
            setIndex(index + 1);
          }}
          className={`${
            index === items.length - 1
              ? "opacity-30 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          } hover:scale-150 transition-all`}
          size="sm"
        >
          <IoIosArrowForward />
        </Button>
      </div>
    </div>
  );
}

export default MobileVersion;
