import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import LazyLoad from "react-lazy-load";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import LawnExample1 from "../assets/LawnExample1@2x.jpg";
import LawnExample2 from "../assets/LawnExample2@2x.jpg";
import LawnExample3 from "../assets/LawnExample3@2x.jpg";
import LawnExample4 from "../assets/LawnExample4@2x.jpg";
import LawnExample5 from "../assets/LawnExample5@2x.jpg";
import LawnExample6 from "../assets/LawnExample6@2x.jpg";
import LawnExample7 from "../assets/LawnExample7@2x.jpg";
import LawnExample8 from "../assets/LawnExample8@2x.jpg";
import LawnExample9 from "../assets/LawnExample9@2x.jpg";
import LawnExample10 from "../assets/LawnExample10@2x.jpg";

function Portfolio() {
  const images = [
    LawnExample3,
    LawnExample2,
    LawnExample1,
    LawnExample4,
    LawnExample5,
    LawnExample6,
    LawnExample7,
    LawnExample8,
    LawnExample9,
    LawnExample10,
  ];
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
    <>
      <div className="mt-20 h-28 px-5 font-text text-text">
        <div className="text-center text-2xl font-bold">Projects</div>
        <div className="mb-10 text-center text-xs">
          Any size, any difficulty. Tulsa Lawn has done it all for 20 years, and
          we will continue to provide only the best
        </div>
      </div>
      <div className="relative flex h-[400px] w-full p-5" {...handlers}>
        <LazyLoad offset={100} height={400} width="100%">
          <img
            src={images[currentImageIndex]}
            alt="portfolio"
            className="h-full w-full rounded-lg object-cover"
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
      <div className="h-24"></div>
    </>
  );
}

export default Portfolio;
