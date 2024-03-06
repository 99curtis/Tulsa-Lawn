import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import LazyLoad from "react-lazy-load";

import LawnExample1 from "../assets/leafremoval3.webp";
import LawnExample2 from "../assets/leafremoval2.webp";
import LawnExample3 from "../assets/leafremoval1.webp";
import LawnExample4 from "../assets/leafremoval4.webp";
import LawnExample5 from "../assets/leafremoval5.webp";
import LawnExample6 from "../assets/leafremoval6.webp";

import LeafIcon from "../assets/leafremoval_icon.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  LawnExample3,
  LawnExample2,
  LawnExample1,
  LawnExample4,
  LawnExample5,
  LawnExample6,
];

function LeafRemovalService() {
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
        <div className="h-full w-1/2 ">
          Leaf
          <br />
          Removal
        </div>
        <div className="flex h-full w-1/2 justify-end bg-contain">
          <img
            src={LeafIcon}
            alt=""
            className="h-max w-[45%] -translate-y-2 scale-x-[-1] object-cover"
          />
        </div>
      </div>

      <div className="flex h-[35%] flex-col justify-between rounded-3xl bg-secondary p-2">
        <div className="text- px-2 leading-tight">
          Efficiently clear your outdoor spaces of leaf clutter with our leaf
          removal service. Our fast and thorough approach enhances your lawn's
          beauty and health, ensuring a pristine environment for you and your
          guests.
        </div>
        <div className="text-center text-xs font-bold">
          Pricing starts at $50/yard or $150/lot
        </div>
      </div>

      <div className="flex h-[5%] items-end justify-center font-bold">
        past leaf removal projects
      </div>
      <div className="relative flex h-1/2 w-full px-2 pb-6" {...handlers}>
        <LazyLoad offset={100} width="100%" height="100%" threshold={0.95}>
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

export default LeafRemovalService;
