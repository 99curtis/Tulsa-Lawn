import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { MenuProvider } from "../Components/MenuContext";
import { getImageUrl } from "../Components/getImageURL";


// Direct imports

const Commercial1 = getImageUrl('commercial1.webp');
const Commercial2 = getImageUrl('commercial2.webp');
const Commercial3 = getImageUrl('commercial3.webp');
const Commercial4 = getImageUrl('commercial4.webp');
const Commercial5 = getImageUrl('commercial5.webp');
const Commercial6 = getImageUrl('commercial6.webp');

const Hedge1 = getImageUrl('hedgetrimming1.webp');
const Hedge2 = getImageUrl('hedgetrimming2.webp');
const Hedge3 = getImageUrl('hedgetrimming3.webp');
const Hedge4 = getImageUrl('hedgetrimming4.webp');
const Hedge5 = getImageUrl('hedgetrimming5.webp');
const Hedge6 = getImageUrl('hedgetrimming6.webp');

const Residential1 = getImageUrl('residential1.webp');
const Residential2 = getImageUrl('residential2.webp');
const Residential3 = getImageUrl('residential3.webp');
const Residential4 = getImageUrl('residential4.webp');
const Residential5 = getImageUrl('residential5.webp');
const Residential6 = getImageUrl('residential6.webp');

const Leaf1 = getImageUrl('leafremoval1.webp');
const Leaf2 = getImageUrl('leafremoval2.webp');
const Leaf3 = getImageUrl('leafremoval3.webp');
const Leaf4 = getImageUrl('leafremoval4.webp');
const Leaf5 = getImageUrl('leafremoval5.webp');
const Leaf6 = getImageUrl('leafremoval6.webp');



// Mapping categories to their respective images
const categoryImages = {
  Commercial: [Commercial1, Commercial2, Commercial3, Commercial4, Commercial5, Commercial6],
  "Hedge Trimming": [Hedge1, Hedge2, Hedge3, Hedge4, Hedge5, Hedge6],
  Residential: [Residential1, Residential2, Residential3, Residential4, Residential5, Residential6],
  "Leaf Removal": [Leaf1, Leaf2, Leaf3, Leaf4, Leaf5, Leaf6],
};

const allImages = [].concat(...Object.values(categoryImages));

function PastProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const images = selectedCategory ? categoryImages[selectedCategory] : allImages;

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % images.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const calculateOffset = () => {
    const slideWidth = 100;
    return `-${currentSlide * slideWidth}%`;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setCurrentSlide(0);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col justify-between overflow-hidden bg-background">
      <MenuProvider>
        <NavBar />
        {/* Page Header */}
        <div className="h-[52px] pt-3 text-center font-text text-4xl font-bold tracking-tighter text-text">
          PAST PROJECTS
        </div>
        {/* Category Buttons */}
        <div className="grid grid-cols-2 gap-2 p-2 text-center font-text text-sm">
          {Object.keys(categoryImages).map((category) => (
            <div
              key={category}
              className={`rounded-full border-2 border-primary ${selectedCategory === category ? 'bg-secondary font-bold' : 'bg-background'} transition ease-in-out hover:cursor-pointer`}
              onClick={() => handleCategorySelect(category)}
            >
              <button>{category}</button>
            </div>
          ))}
        </div>
        {/* Image Carousel */}
        <div className="ml-[5%] h-[1px] w-[90%] bg-black"></div>
        <div className="relative m-2 flex-grow overflow-hidden rounded-3xl border-2 border-black h-0" {...handlers}>
          <div className="flex h-full w-full transition-transform duration-500" style={{ transform: `translateX(${calculateOffset()})` }}>
            {images.map((image, index) => (
              <div key={index} className="h-full w-full flex-shrink-0">
                <img src={image} alt={`Slide ${index + 1}`} className="block h-full w-full object-cover" />
              </div>
            ))}
          </div>
          {/* Navigation Icons */}
          <FaChevronLeft
            onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"
          />
          <FaChevronRight
            onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-30 text-5xl text-background"
          />
        </div>
        <Footer />
      </MenuProvider>
    </div>
  );
}

export default PastProjectsPage;