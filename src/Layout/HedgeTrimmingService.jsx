import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import LawnExample1 from "/assets/hedgetrimming1.webp";
import LawnExample2 from "/assets/hedgetrimming2.webp";
import LawnExample3 from "/assets/hedgetrimming3.webp";
import LawnExample4 from "/assets/hedgetrimming4.webp";
import LawnExample5 from "/assets/hedgetrimming5.webp";
import LawnExample6 from "/assets/hedgetrimming6.webp";

import HedgeIcon from "/assets/hedgetrimming_icon.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  LawnExample3,
  LawnExample2,
  LawnExample1,
  LawnExample4,
  LawnExample5,
  LawnExample6,
];

function HedgeTrimmingService() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const calculateOffset = () => {
    const slideWidth = 100; // Assuming each slide takes up 100% of the carousel width
    return `-${currentSlide * slideWidth}%`;
  };

  return (
    <div className="h-full overflow-hidden p-4 font-text text-text">
      <div className="flex h-[13%] items-center justify-between text-3xl font-bold md:px-4">
        <div className="h-full w-1/2">
          Hedge
          Trimming
        </div>
        <div className="flex h-full w-1/2 justify-end bg-contain">
          <img
            src={HedgeIcon}
            alt=""
            className="h-[90px] w-[90px] -translate-y-3 scale-x-[-1] object-cover"
          />
        </div>
      </div>

      <div className="flex h-[35%] flex-col justify-between rounded-3xl bg-background p-2 border-[1px] border-text md:mx-20">
        <div className="px-2 leading-tight md:text-lg">
          Our hedge trimming services offer precision and detail, sculpting your
          hedges to perfection. We enhance your landscape's natural beauty,
          creating an inviting and refined space for everyone to enjoy.
        </div>
        <div className="text-center text-xs md:text-base font-bold">
          Pricing starts at $60/lot or $50/monthly
        </div>
      </div>

      <div className="flex h-[5%] items-end justify-center font-bold">
        past hedge trimming projects
      </div>
      <div className="relative flex border-2 h-[45%] md:scale-90 border-black w-full overflow-hidden rounded-3xl" {...handlers}>
        <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(${calculateOffset()})` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hedge Trimming ${index + 1}`}
              className="h-full w-full object-cover flex-shrink-0" // Ensure images fill the div and are shown side by side
              style={{ width: '100vw' }} // Adjust as needed to fit your design
            />
          ))}
        </div>
        <FaChevronLeft
          onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-5xl bg-text bg-opacity-60 text-background"
        />
        <FaChevronRight
          onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-5xl bg-text bg-opacity-60 text-background"
        />
      </div>
    </div>
  );
}

export default HedgeTrimmingService;