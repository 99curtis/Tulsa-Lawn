import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import LawnExample1 from "../assets/residential5.webp";
import LawnExample2 from "../assets/residential2.webp";
import LawnExample3 from "../assets/residential3.webp";
import LawnExample4 from "../assets/residential4.webp";
import LawnExample5 from "../assets/residential1.webp";
import LawnExample6 from "../assets/residential6.webp";

import ResidentialIcon from "../assets/residential_icon.png";

const images = [
  LawnExample1,
  LawnExample2,
  LawnExample3,
  LawnExample4,
  LawnExample5,
  LawnExample6,
];

function ResidentialLawnService() {
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
      <div className="flex h-[13%] items-center justify-between text-3xl font-bold">
        <div className="h-full w-1/2">Residential Lawn Care</div>
        <div className="flex h-full w-1/2 justify-end">
          <img src={ResidentialIcon} alt="" className="h-[90px] w-[90px] object-cover" />
        </div>
      </div>

      <div className="flex h-[35%] flex-col justify-between rounded-3xl bg-background p-2 border-[1px] border-text">
        <div className="px-2 leading-tight">
          Our residential lawn care excels in delivering detailed mowing, precise edging, and targeted fertilization, ensuring your garden remains lush and vibrant. With our specialized attention, we transform your outdoor area into a cherished, healthy retreat that stands out.
        </div>
        <div className="text-center text-xs font-bold">
          Pricing starts at $40/yard or $30/weekly
        </div>
      </div>

      <div className="flex h-[5%] items-end justify-center font-bold">
        past residential projects
      </div>
      <div className="relative flex border-2 h-[45%] border-black w-full overflow-hidden rounded-3xl" {...handlers}>
        <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(${calculateOffset()})` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Residential Lawn Service ${index + 1}`} className="h-full w-full object-cover flex-shrink-0" />
          ))}
        </div>
        <FaChevronLeft onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-5xl bg-text bg-opacity-60 text-background" />
        <FaChevronRight onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-5xl bg-text bg-opacity-60 text-background" />
      </div>
    </div>
  );
}

export default ResidentialLawnService;
