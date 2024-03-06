import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import LazyLoad from "react-lazy-load";

import LawnExample1 from "../assets/hedgetrimming1.webp";
import LawnExample2 from "../assets/hedgetrimming2.webp";
import LawnExample3 from "../assets/hedgetrimming3.webp";
import LawnExample4 from "../assets/hedgetrimming4.webp";
import LawnExample5 from "../assets/hedgetrimming5.webp";
import LawnExample6 from "../assets/hedgetrimming6.webp";

import HedgeIcon from "../assets/hedgetrimming_icon.png";
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
        <div className="h-full w-1/2">
          Hedge
          <br />
          Trimming
        </div>
        <div className="flex h-full w-1/2 justify-end bg-contain">
          <img
            src={HedgeIcon}
            alt=""
            className="h-max w-[50%] -translate-y-3 scale-x-[-1] object-cover"
          />
        </div>
      </div>

      <div className="flex h-[35%] flex-col justify-between rounded-3xl bg-background p-2">
        <div className="px-2 leading-tight">
          Our hedge trimming services offer precision and detail, sculpting your
          hedges to perfection. We enhance your landscape's natural beauty,
          creating an inviting and refined space for everyone to enjoy.
        </div>
        <div className="text-center text-xs font-bold">
          Pricing starts at $60/lot or $50/monthly
        </div>
      </div>

      <div className="flex h-[5%] items-end justify-center font-bold">
        past hedge trimming projects
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

export default HedgeTrimmingService;
