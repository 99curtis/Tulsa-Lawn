import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { MenuProvider } from "../Components/MenuContext";

function PastProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Commercial");

  const categories = {
    "Commercial": Array.from({ length: 6 }, (_, i) => import(`/assets/commercial${i + 1}.webp`)),
    "Hedge Trimming": Array.from({ length: 6 }, (_, i) => import(`/assets/hedgetrimming${i + 1}.webp`)),
    "Residential": Array.from({ length: 6 }, (_, i) => import(`/assets/residential${i + 1}.webp`)),
    "Leaf Removal": Array.from({ length: 6 }, (_, i) => import(`/assets/leafremoval${i + 1}.webp`)),
  };

  const imagesPromise = categories[selectedCategory];

  const [images, setImages] = useState([]);

  Promise.all(imagesPromise).then((loadedImages) => {
    setImages(loadedImages.map((module) => module.default));
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length),
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