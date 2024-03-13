import residentualIcon from "/assets/residential_icon.png";
import commercialIcon from "/assets/commercial_icon.png";
import leafIcon from "/assets/leafremoval_icon.png";
import hedgeIcon from "/assets/hedgetrimming_icon.png";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function ServiceCards() {
  return (
    <>
      <div className="bg-secondary overflow-hidden">
        <div className="flex h-fit flex-col items-center pt-20 font-text text-text">
          <Link to="/services">
            <div className="text-2xl font-bold md:text-4xl">Services</div>
          </Link>
          <div className="mb-10 text-center text-xs md:text-base">
            Expert care, affordable pricing, and a commitment to excellence
          </div>
        </div>

        {/* Wrapper div for the service cards with grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-8 lg:px-[15%]">
          {/* Adjust each service card div with proper sizing for md screens */}
          <Link
            to="/services/residential-lawn"
            className="mr-4 mt-5 flex h-[200px] w-fit flex-col overflow-hidden rounded-br-[50px] rounded-tl-[50px] border-2 border-primary border-opacity-50 bg-background transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:border-opacity-100 hover:bg-primary hover:bg-opacity-10 md:h-[300px]"
          >
            <div className="flex w-full justify-end">
              <div className="mr-5 pr-1 text-center font-text text-xl font-bold text-primary md:text-2xl lg:text-3xl ">
                RESIDENTIAL LAWN
              </div>
            </div>

            <div className="flex h-full w-full items-center">
              <div className="ml-2 h-[105px] w-1/4 items-center overflow-hidden bg-contain bg-center bg-no-repeat md:w-1/2 lg:h-full">
                <LazyLoad offset={100}>
                  <img src={residentualIcon} alt="" />
                </LazyLoad>
              </div>
              <div className="flex w-full justify-end">
                <div className="mr-1 flex h-full w-full items-center px-1 text-end font-text text-sm md:text-base lg:text-lg">
                  Cultivating lush lawns across Tulsa, our comprehensive care
                  includes precise mowing, detailed edging, and thorough cleanup
                  for a pristine outdoor canvas, season after season.
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/services/commercial-lawn"
            className="ml-4 mt-5 flex h-[200px] w-fit flex-col overflow-hidden rounded-bl-[50px] rounded-tr-[50px] border-2 border-primary border-opacity-50 bg-background transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:border-opacity-100 hover:bg-primary hover:bg-opacity-10 md:h-[300px]"
          >
            <div className="flex w-full justify-start">
              <div className="ml-5 pl-1 text-center font-text text-xl font-bold text-primary md:text-2xl lg:text-3xl">
                COMMERCIAL LAWN
              </div>
            </div>

            <div className="flex h-full w-full items-center">
              <div className="w-full">
                <div className="ml-1 flex h-full w-full items-center px-1 text-start font-text text-sm md:text-base lg:text-lg">
                  Boost your curb appeal with our top-tier commercial lawn care.
                  Our experts provide meticulous maintenance, landscape
                  perfection, and custom care for a standout business presence.
                </div>
              </div>
              <div className="mr-2 h-[105px] w-1/4 items-center overflow-hidden bg-contain bg-center bg-no-repeat md:w-1/2 lg:h-full">
                <LazyLoad offset={100}>
                  <img src={commercialIcon} alt="" />
                </LazyLoad>
              </div>
            </div>
          </Link>

          <Link
            to="/services/leaf-removal"
            className="mr-4 mt-5 flex h-[200px] w-fit flex-col overflow-hidden rounded-br-[50px] rounded-tl-[50px] border-2 border-primary border-opacity-50 bg-background transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:border-opacity-100 hover:bg-primary hover:bg-opacity-10 md:h-[300px]"
          >
            <div className="flex w-full justify-end">
              <div className="mr-5 pr-1 text-center font-text text-xl font-bold text-primary md:text-2xl lg:text-3xl ">
                LEAF REMOVAL
              </div>
            </div>

            <div className="flex h-full w-full items-center">
              <div className="ml-2 h-[105px] w-1/4 items-center overflow-hidden bg-contain bg-center bg-no-repeat md:h-[110px] lg:h-full lg:w-1/2">
                <LazyLoad offset={100}>
                  <img src={leafIcon} alt="" />
                </LazyLoad>
              </div>
              <div className="flex w-full justify-end">
                <div className="mr-1 flex h-full w-full items-center px-1 text-end font-text text-sm md:text-base lg:text-lg">
                  Enhance your outdoor space with our efficient leaf removal
                  service. We swiftly clear foliage to maintain a tidy and
                  vibrant lawn, ensuring your property stays immaculate
                  throughout the fall.
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/services/hedge-trimming"
            className="ml-4 mt-5 flex h-[200px] w-fit flex-col overflow-hidden rounded-bl-[50px] rounded-tr-[50px] border-2 border-primary border-opacity-50 bg-background transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:border-opacity-100 hover:bg-primary hover:bg-opacity-10 md:h-[300px]"
          >
            <div className="flex w-full justify-start">
              <div className="ml-5 pl-1 text-center font-text text-xl font-bold text-primary md:text-2xl lg:text-3xl">
                HEDGE TRIMMING
              </div>
            </div>

            <div className="flex h-full w-full items-center">
              <div className="w-full">
                <div className="ml-1 flex h-full w-full items-center pl-1 text-start font-text text-sm md:text-base lg:text-lg">
                  Experience precision with our hedge trimming service. We
                  sculpt and shape your hedges to perfection, providing a clean,
                  defined look that complements your property's aesthetic.
                </div>
              </div>
              <div className="mr-2 h-[105px] w-1/4 scale-x-[-1] items-center overflow-hidden bg-contain bg-center bg-no-repeat lg:h-full lg:w-1/2">
                <LazyLoad offset={100}>
                  <img src={hedgeIcon} alt="" />
                </LazyLoad>
              </div>
            </div>
          </Link>
        </div>

        <div className="h-20"></div>
      </div>
    </>
  );
}

export default ServiceCards;
