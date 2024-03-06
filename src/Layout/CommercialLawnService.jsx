import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import LazyLoad from "react-lazy-load";

import LawnExample1 from "../assets/commercial1.webp";
import LawnExample2 from "../assets/commercial2.webp";
import LawnExample3 from "../assets/commercial3.webp";
import LawnExample4 from "../assets/commercial4.webp";
import LawnExample5 from "../assets/commercial5.webp";
import LawnExample6 from "../assets/commercial6.webp";

import CommercialIcon from "../assets/commercial_icon.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  LawnExample3,
  LawnExample2,
  LawnExample1,
  LawnExample4,
  LawnExample5,
  LawnExample6,
];

function CommercialLawnService() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () =>
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length,
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handlePrevClick = (event) => {
    event.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleNextClick = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="h-full overflow-hidden p-4 font-text text-text">
      <div className="flex h-[13%] items-center justify-between text-3xl font-bold">
        <div className="h-full w-1/2 ">Commercial Lawn Care</div>
        <div className="flex h-full w-1/2 justify-end bg-contain">
          <img
            src={CommercialIcon}
            alt=""
            className="h-[90px] w-[90px] -translate-y-3 scale-x-[-1] object-cover"
          />
        </div>
      </div>

      <div className="flex h-[35%] flex-col justify-between rounded-3xl bg-secondary p-2">
        <div className="px-2 leading-tight">
          Specializing in commercial lawn maintenance, we provide expert mowing,
          precise edging, and essential fertilization to boost your business
          facade. Our solutions keep your property looking professional and
          immaculate, mirroring the high standards of your company.
        </div>
        <div className="text-center text-xs font-bold">
          Pricing starts at $100/lot or $80/weekly
        </div>
      </div>

      <div className="flex h-[5%] items-end justify-center font-bold">
        past commercial projects
      </div>
      <div className="relative flex h-1/2 w-full px-2 pb-6" {...handlers}>
        <LazyLoad offset={100} width="100%">
          <img
            src={images[currentImageIndex]}
            alt="portfolio"
            className="h-full w-full rounded-3xl bg-center bg-no-repeat object-cover"
          />
        </LazyLoad>
        <FaChevronLeft
          onClick={handlePrevClick}
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-6xl text-background"
        />
        <FaChevronRight
          onClick={handleNextClick}
          className="cursur-pointer absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-background"
        />
      </div>
    </div>
  );
}

export default CommercialLawnService;
