import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { MenuProvider } from "../Components/MenuContext";

// Direct imports

import Commercial1 from "/assets/commercial1.webp";
import Commercial2 from "/assets/commercial2.webp";
import Commercial3 from "/assets/commercial3.webp";
import Commercial4 from "/assets/commercial4.webp";
import Commercial5 from "/assets/commercial5.webp";
import Commercial6 from "/assets/commercial6.webp";

import Hedge1 from "/assets/hedgetrimming1.webp";
import Hedge2 from "/assets/hedgetrimming2.webp";
import Hedge3 from "/assets/hedgetrimming3.webp";
import Hedge4 from "/assets/hedgetrimming4.webp";
import Hedge5 from "/assets/hedgetrimming5.webp";
import Hedge6 from "/assets/hedgetrimming6.webp";

import Residential1 from "/assets/residential1.webp";
import Residential2 from "/assets/residential2.webp";
import Residential3 from "/assets/residential3.webp";
import Residential4 from "/assets/residential4.webp";
import Residential5 from "/assets/residential5.webp";
import Residential6 from "/assets/residential6.webp";

import Leaf1 from "/assets/leafremoval1.webp";
import Leaf2 from "/assets/leafremoval2.webp";
import Leaf3 from "/assets/leafremoval3.webp";
import Leaf4 from "/assets/leafremoval4.webp";
import Leaf5 from "/assets/leafremoval5.webp";
import Leaf6 from "/assets/leafremoval6.webp";

const categories = {
  Commercial: [
    Commercial1,
    Commercial2,
    Commercial3,
    Commercial4,
    Commercial5,
    Commercial6,
  ],
  "Hedge Trimming": [Hedge1, Hedge2, Hedge3, Hedge4, Hedge5, Hedge6],
  Residential: [
    Residential1,
    Residential2,
    Residential3,
    Residential4,
    Residential5,
    Residential6,
  ],
  "Leaf Removal": [Leaf1, Leaf2, Leaf3, Leaf4, Leaf5, Leaf6],
};

function PastProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Commercial");

  const images = categories[selectedCategory];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % images.length),
    onSwipedRight: () =>
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length),
    trackMouse: true,
  });

  // Correctly update currentSlide for previous and next navigation
  const navigateSlide = (direction) => {
    setCurrentSlide((prev) => {
      let nextIndex = prev + direction;
      if (nextIndex < 0) {
        nextIndex = images.length - 1;
      } else if (nextIndex >= images.length) {
        nextIndex = 0;
      }
      return nextIndex;
    });
  };

  return (
    <div className="flex min-h-screen w-screen flex-col justify-between overflow-hidden bg-background">
      <MenuProvider>
        <NavBar />
        <div className="h-[52px] pt-3 text-center font-text text-4xl font-bold tracking-tighter text-text">
          PAST PROJECTS
        </div>
        <div className="grid grid-cols-2 gap-2 p-2 text-center font-text text-sm">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentSlide(0);
              }}
              className={`rounded-full border-2 border-primary ${selectedCategory === category ? "bg-secondary font-bold" : "bg-background"} transition ease-in-out hover:cursor-pointer`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="ml-[5%] h-[1px] w-[90%] bg-black"></div>
        {/* Image Carousel */}
        <div
          className="relative m-2 flex-grow overflow-hidden rounded-3xl border-2 border-black h-0"
          {...handlers}
        >
          <div
            className="flex h-full transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="block h-full flex-shrink-0 object-cover"
              />
            ))}
          </div>
          <FaChevronLeft
            onClick={() => navigateSlide(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"
          />
          <FaChevronRight
            onClick={() => navigateSlide(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"
          />
        </div>
        <Footer />
      </MenuProvider>
    </div>
  );
}

export default PastProjectsPage;
