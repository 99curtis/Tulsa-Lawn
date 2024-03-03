import React from 'react';
import heroImage from "../assets/mobile_hero@2x.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";

function MobileHero() {
  return (
    <>
      <div className="relative mx-4 h-[80vh] min-h-[600px] overflow-hidden rounded-3xl bg-cover bg-center">
          <div
            className="z-1 absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        <div className="z-2 absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="z-3 absolute flex h-full flex-col justify-around p-2">
          <div
            className="p-1 text-center font-text text-[40px] font-bold leading-none tracking-tight text-background"
            style={{
              textShadow: "2px 2px 5px #000000, -2px -2px 5px #000000",
            }}
          >
            TULSA'S FAVORITE LAWN COMPANY
          </div>
          <div
            className="p-1 text-center font-text text-2xl text-background"
            style={{
              textShadow: "2px 2px 5px #000000, -2px -2px 5px #000000",
            }}
          >
            Transforming Tulsa's lawns with expert care and meticulous attention
            to detail. Experience premier landscaping that sets your space apart
          </div>
          <button className="mb-2 flex h-fit max-h-[100px] w-fit max-w-[250px] items-center justify-between self-center rounded-lg bg-accent p-4 text-text shadow-2xl">
            <BsFillTelephoneFill className="mr-4 text-4xl" />
            <span className="font-text text-[30px] font-bold tracking-tighter">
              Free Quote
            </span>
          </button>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
}
export default MobileHero;
