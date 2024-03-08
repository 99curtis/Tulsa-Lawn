import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import LawnExample1 from "/assets/commercial1.webp";
import LawnExample2 from "/assets/commercial2.webp";
import LawnExample3 from "/assets/commercial3.webp";
import LawnExample4 from "/assets/commercial4.webp";
import LawnExample5 from "/assets/commercial5.webp";
import LawnExample6 from "/assets/commercial6.webp";

import CommercialIcon from "/assets/commercial_icon.png";

const images = [
  LawnExample1,
  LawnExample2,
  LawnExample3,
  LawnExample4,
  LawnExample5,
  LawnExample6,
];

function CommercialLawnService() {
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
        <div className="h-full w-1/2">Commercial Lawn Care</div>
        <div className="flex h-full w-1/2 justify-end">
          <img src={CommercialIcon} alt="" className="h-[90px] w-[90px] object-cover" />
        </div>
      </div>

      <div className="flex h-[35%] flex-col justify-between rounded-3xl p-2 border-[1px] border-text bg-secondary">
        <div className="px-2 leading-tight">
          Specializing in commercial lawn maintenance, we provide expert mowing, precise edging, and essential fertilization to boost your business facade. Our solutions keep your property looking professional and immaculate, mirroring the high standards of your company.
        </div>
        <div className="text-center text-xs font-bold">
          Pricing starts at $100/lot or $80/weekly
        </div>
      </div>

      <div className="flex h-[5%] items-end justify-center font-bold">
        past commercial projects
      </div>
      <div className="relative flex border-2 h-[45%] border-black w-full overflow-hidden rounded-3xl" {...handlers}>
        <div className="flex transition-transform duration-500 h-full" style={{ transform: `translateX(${calculateOffset()})` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Commercial Lawn Service ${index + 1}`} className="h-full w-full object-cover flex-shrink-0" />
          ))}
        </div>
        <FaChevronLeft onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-5xl bg-text bg-opacity-60 text-background" />
        <FaChevronRight onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-5xl bg-text bg-opacity-60 text-background" />
      </div>
    </div>
  );
}

export default CommercialLawnService;
