import React from "react";
import LawnHeroTR from "../assets/LawnHeroTR.webp";
import LawnHeroTL from "../assets/LawnHeroTL.webp";
import LawnHeroBR from "../assets/LawnHeroBR.webp";
import LawnHeroBL from "../assets/LawnHeroBL.webp";

function ServicesHero() {
  return (
    <div className="relative h-[calc(100vh-5rem)] overflow-hidden">
      <div className="h-1/4 text-center font-text text-text pt-8">
        <div className="text-4xl font-bold tracking-tighter">SERVICES</div>
        <div className="leading-tight">
          From residential and commerical lawn care, to leaf removal and hedge
          trimming, we've done it all in the Tulsa area for 20 years
        </div>
      </div>


      <div className="inset-0 grid h-[70%] overflow-hidden relative">
        <div className="grid h-full grid-cols-2 grid-rows-2 p-4">
          {/* Background images */}
          <div
            style={{ backgroundImage: `url(${LawnHeroTL})` }}
            className="rounded-tl-3xl bg-cover bg-center"
          ></div>
          <div
            style={{ backgroundImage: `url(${LawnHeroTR})` }}
            className="rounded-tr-3xl bg-cover bg-center"
          ></div>
          <div
            style={{ backgroundImage: `url(${LawnHeroBL})` }}
            className="rounded-bl-3xl bg-cover bg-center"
          ></div>
          <div
            style={{ backgroundImage: `url(${LawnHeroBR})` }}
            className="rounded-br-3xl bg-cover bg-center"
          ></div>
          <div className="absolute left-[-100%] top-[48.6%] z-[2] h-[20px] w-[300%] rotate-[2.6deg] transform bg-background"></div>
          <div className="absolute left-[-99.8%] top-1/2 z-[2] h-[20px] w-[300%] rotate-[92deg] transform bg-background"></div>
        </div>
      </div>


    </div>
  );
}

export default ServicesHero;
