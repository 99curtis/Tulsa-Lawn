import React, { useEffect } from "react";
import { GrClose, GrMenu } from "react-icons/gr";
import { useMenu } from "../Components/MenuContext";
import residentualIcon from "../assets/residentual_icon.png";
import commercialIcon from "../assets/commercial_icon.png";
import leafIcon from "../assets/leafremoval_icon.png";
import hedgeIcon from "../assets/hedgetrimming_icon.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import MeetTheTeam from "../assets/MeetTheTeam@2x.jpg";
import LawnExample from "../assets/LawnExample6@2x.jpg";

function NavBar() {
  const { isMenuVisible, toggleMenu } = useMenu();

  useEffect(() => {
    // Prevent scrolling when the menu is open
    if (isMenuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Optional: Clean up function to ensure the overflow is reset
    // This can be useful if the component unmounts for any reason
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuVisible]);

  // Define a base style for the falling animation
  const fallingStyle = (delay) => ({
    animation: `falling 0.5s ease-out ${delay}ms forwards`,
    opacity: 0, // Start invisible
    transform: "translateY(-20px)", // Start above the final position
  });

  return (
    <div className="relative w-screen">
      <div className="flex h-20 items-center justify-between border-black px-4">
        <div className="font-logo text-3xl font-bold text-primary">
          Tulsa Lawn
        </div>
        <button
          onClick={toggleMenu}
          className="rounded-lg bg-primary p-3 text-accent shadow-md"
        >
          {isMenuVisible ? (
            <GrClose size={24} className="text-3xl" />
          ) : (
            <GrMenu size={24} className="text-3xl" />
          )}
        </button>
      </div>
      <div
        style={{ height: `calc(100vh - 5rem)` }}
        className={`absolute top-20 z-[10] w-screen bg-primary font-text transition-transform duration-500 ease-in-out${
          isMenuVisible ? " translate-x-0" : " translate-x-full"
        }`}
      >
        <div
          style={isMenuVisible ? fallingStyle(500) : {}}
          className="mb-[-10px] mt-1 w-screen text-center text-2xl text-background"
        >
          SERVICES
        </div>

        <div className="h-full">

          <div className="grid h-1/2 grid-cols-2 gap-1 p-2">

            <div
              style={isMenuVisible ? fallingStyle(750) : {}}
              className="flex flex-col items-center justify-center rounded-3xl border-2 border-text bg-background"
            >
              <div className="pt-1 text-center font-text text-base font-bold text-primary">
                RESIDENTIAL LAWN
              </div>
              <div className="flex h-full w-full items-center">
                <div
                  style={{ backgroundImage: `url(${residentualIcon})` }}
                  className="ml-2 h-3/5 w-full scale-[1.7] items-center overflow-hidden bg-contain bg-center bg-no-repeat"
                ></div>
              </div>
            </div>

            <div
              style={isMenuVisible ? fallingStyle(750) : {}}
              className="flex flex-col items-center justify-center rounded-3xl border-2 border-text bg-background"
            >
              <div className="pt-1 text-center font-text text-base font-bold text-primary">
                COMMERCIAL LAWN
              </div>
              <div className="flex h-full w-full items-center">
                <div
                  style={{
                    backgroundImage: `url(${commercialIcon})`,
                    transform: "scaleX(-1) scale(1.7)",
                  }}
                  className="ml-2 h-3/5 w-full items-center overflow-hidden bg-contain bg-center bg-no-repeat"
                ></div>
              </div>
            </div>

            <div
              style={isMenuVisible ? fallingStyle(900) : {}}
              className="flex flex-col items-center justify-center rounded-3xl border-2 border-text bg-background"
            >
              <div className="pt-1 text-center font-text text-base font-bold text-primary">
                HEDGE TRIMMING
              </div>
              <div className="flex h-full w-full items-center">
                <div
                  style={{ backgroundImage: `url(${hedgeIcon})` }}
                  className="ml-2 h-3/5 w-full -translate-y-1 scale-[1.7] items-center overflow-hidden bg-contain bg-center bg-no-repeat"
                ></div>
              </div>
            </div>

            <div
              style={isMenuVisible ? fallingStyle(900) : {}}
              className="flex flex-col items-center rounded-3xl border-2 border-text bg-background"
            >
              <div className="pt-1 text-center font-text text-base font-bold text-primary">
                LEAF REMOVAL
              </div>
              <div className="flex h-full w-full items-center">
                <div
                  style={{ backgroundImage: `url(${leafIcon})` }}
                  className="ml-2 h-3/5 w-full -translate-y-1 scale-[1.5] items-center overflow-hidden bg-contain bg-center bg-no-repeat"
                ></div>
              </div>
            </div>
          </div>
          <div
            style={isMenuVisible ? fallingStyle(900) : {}}
            className="relative h-[5px] w-full"
          >
            <div className="absolute ml-[5%] h-full w-[90%] bg-background"></div>
            <div className="absolute bottom-[1px] left-[4%] h-[3px] w-[92%] bg-background"></div>
            <div className="absolute bottom-[2px] left-[3%] h-[1px] w-[94%] bg-background"></div>
          </div>
          <div
            style={isMenuVisible ? fallingStyle(1050) : {}}
            className="mx-2 mt-2 grid h-1/4 grid-cols-2 gap-2"
          >
            <div className="relative rounded-3xl">
              <div
                style={{ backgroundImage: `url(${LawnExample})` }}
                className="absolute inset-0 rounded-3xl border-2 border-text bg-cover bg-center"
              ></div>
              <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-60"></div>
              <div
                style={{
                  textShadow: "2px 2px 5px #000000, -2px -2px 5px #000000",
                }}
                className="relative z-10 flex h-full items-center justify-center text-center text-3xl text-background"
              >
                PAST PROJECTS
              </div>
            </div>
            <div className="relative rounded-3xl">
              <div
                style={{ backgroundImage: `url(${MeetTheTeam})` }}
                className="absolute inset-0 rounded-3xl border-2 border-text bg-cover bg-center"
              ></div>
              <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-60"></div>
              <div
                style={{
                  textShadow: "2px 2px 5px #000000, -2px -2px 5px #000000",
                }}
                className="relative z-10 flex h-full items-center justify-center p-1 text-center text-3xl text-background"
              >
                ABOUT US
              </div>
            </div>
          </div>

          <div className="flex h-1/5 justify-center items-center">
            <button
              style={isMenuVisible ? fallingStyle(1200) : {}}
              className="flex w-fit items-center justify-between rounded-lg bg-accent p-4 text-text shadow-2xl"
            >
              <BsFillTelephoneFill className="ml-2 mr-4 size-7" />
              <span className="mr-2 font-text text-2xl font-bold">
                Free Quote
              </span>
            </button>
          </div>

        </div>

      </div>

      <style>
        {`
                    @keyframes falling {
                        from {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
      </style>
    </div>
  );
}

export default NavBar;