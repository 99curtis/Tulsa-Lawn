import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import LawnExample1 from "/assets/LawnExample1@2x.jpg";
import LawnExample2 from "/assets/LawnExample2@2x.jpg";
import LawnExample3 from "/assets/LawnExample3@2x.jpg";
import LawnExample4 from "/assets/LawnExample4@2x.jpg";
import LawnExample5 from "/assets/LawnExample5@2x.jpg";
import LawnExample6 from "/assets/LawnExample6@2x.jpg";
import LawnExample7 from "/assets/LawnExample7@2x.jpg";
import LawnExample8 from "/assets/LawnExample8@2x.jpg";
import LawnExample9 from "/assets/LawnExample9@2x.jpg";
import LawnExample10 from "/assets/LawnExample10@2x.jpg";
import { Link } from "react-router-dom";

function Portfolio() {
  const images = [
    LawnExample1,
    LawnExample2,
    LawnExample3,
    LawnExample4,
    LawnExample5,
    LawnExample6,
    LawnExample7,
    LawnExample8,
    LawnExample9,
    LawnExample10,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const calculateOffset = () => {
    const slideWidth = 100; // Assuming each slide takes up 100% of the carousel width
    return `-${currentSlide * slideWidth}%`;
  };

  return (
    <>
      <div className="mt-20 h-28 px-5 font-text text-text overflow-hidden">
        <Link to="/past-projects">
          <div className="text-center text-2xl font-bold md:text-4xl">
            Projects
          </div>
        </Link>
        <div className="mb-10 text-center text-xs md:text-base">
          Any size, any difficulty. Tulsa Lawn has done it all for 20 years, and
          we will continue to provide only the best.
        </div>
      </div>
      <div className="">
        <div className="w-screen flex justify-center">
          <div
            className="relative flex h-[400px] w-[90%] overflow-hidden rounded-3xl border-2 border-black md:h-[600px] lg:h-[700px] md:w-[80%] lg:w-[60%]"
            {...handlers}
          >
            <div
              className="flex h-full w-full transition-transform duration-500"
              style={{ transform: `translateX(${calculateOffset()})` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="h-full min-w-full flex-shrink-0 object-cover"
                />
              ))}
            </div>
            <FaChevronLeft
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + images.length) % images.length,
                )
              }
              className="absolute top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-text bg-opacity-60 text-5xl text-background"
            />
            <FaChevronRight
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % images.length)
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-text bg-opacity-60 text-5xl text-background"
            />
          </div>
        </div>
      </div>
      <div className="h-24"></div>
    </>
  );
}

export default Portfolio;
