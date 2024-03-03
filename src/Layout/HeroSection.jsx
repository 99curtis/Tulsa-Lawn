import heroImage from "../assets/mobile_hero.webp";
import { BsFillTelephoneFill } from "react-icons/bs";

function MobileHero() {
  return (
    <>
      <div className="relative h-[650px] p-4">
        <div
          style={{ backgroundImage: `url(${heroImage})` }}
          className="relative h-[537px] overflow-hidden rounded-3xl bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-3xl"></div>
          <div
            className="absolute left-0 right-0 top-20 text-center font-text text-[40px] font-bold text-background leading-none tracking-tight"
            style={{ textShadow: "2px 2px 5px #000000, -2px -2px 5px #000000" }}
          >
            TULSA'S FAVORITE <br />
            LAWN COMPANY
          </div>
          <div
            className="absolute left-0 right-0 top-64 w-full text-center font-text text-lg text-background"
            style={{ textShadow: "2px 2px 5px #000000, -2px -2px 5px #000000" }}
          >
            Transforming Tulsa's lawns with expert care and meticulous attention
            to detail. Experience premier landscaping that sets your space apart
          </div>
          <button className="flex h-fit w-fit p-4 absolute mx-auto left-0 right-0 bottom-16 items-center justify-between rounded-lg bg-accent text-text shadow-2xl">
            <BsFillTelephoneFill className="mr-4 size-7 ml-2" />
            <span className="font-text text-2xl font-bold mr-2">Free Quote</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default MobileHero;
