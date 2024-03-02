import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import LawnExample1 from "../assets/LawnExample1.jpg";
import LawnExample2 from "../assets/LawnExample2.jpg";
import LawnExample3 from "../assets/LawnExample3.jpg";
import LawnExample4 from "../assets/LawnExample4.jpg";
import LawnExample5 from "../assets/LawnExample5.jpg";
import LawnExample6 from "../assets/LawnExample6.jpg";
import LawnExample7 from "../assets/LawnExample7.jpg";
import LawnExample8 from "../assets/LawnExample8.jpg";
import LawnExample9 from "../assets/LawnExample9.jpg";
import LawnExample10 from "../assets/LawnExample10.jpg";

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
        <img
          src={images[currentImageIndex]}
          alt="portfolio"
          className="h-full w-full rounded-lg object-cover"
        />
        <FaChevronLeft
          onClick={handlePrevClick}
          className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer rounded-full text-6xl text-background"
        />
        <FaChevronRight
          onClick={handleNextClick}
          className="cursur-pointer absolute right-3 top-1/2 -translate-y-1/2 rounded-full text-6xl text-background"
        />
      </div>
      <div className="h-20"></div>
    </>
  );
}

export default Portfolio;
