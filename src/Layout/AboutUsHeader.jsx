import AboutUsHeaderImage from "/assets/aboutus.webp";

function AboutUsHeader() {
  return (
    <div className="flex h-[76svh] min-h-[800px] w-screen flex-col items-center">
      <h1 className="pt-8 font-text text-4xl font-bold tracking-tighter text-text">
        ABOUT US
      </h1>

      
      <div className="grid h-[25%] w-screen grid-cols-2 p-4 pt-6 text-center font-text leading-none text-text">
        <div className="">
          <div
            className="text-lg md:text-2xl font-bold"
            style={{
              background: "linear-gradient(to right, #403d39, #0B6530)", // Gradient background
              WebkitBackgroundClip: "text", // Vendor prefix for Safari
              backgroundClip: "text", // Standard syntax
              color: "transparent", // Make the text color transparent to show the background
            }}
          >
            120+ Homes
          </div>
          <div className="md:text-lg">mowed monthly</div>
        </div>
        <div className="">
          <div
            className="text-lg md:text-2xl font-bold"
            style={{
              background: "linear-gradient(to right, #403d39, #0B6530)", // Gradient background
              WebkitBackgroundClip: "text", // Vendor prefix for Safari
              backgroundClip: "text", // Standard syntax
              color: "transparent", // Make the text color transparent to show the background
            }}
          >
            20+ Businesses
          </div>
          <div className="md:text-lg">managed weekly</div>
        </div>
        <div className="">
          <div
            className="text-lg md:text-2xl font-bold"
            style={{
              background: "linear-gradient(to right, #403d39, #0B6530)", // Gradient background
              WebkitBackgroundClip: "text", // Vendor prefix for Safari
              backgroundClip: "text", // Standard syntax
              color: "transparent", // Make the text color transparent to show the background
            }}
          >
            5+ tons
          </div>
          <div className="md:text-lg">leaves removed</div>
        </div>
        <div className="">
          <div
            className="text-lg md:text-2xl font-bold"
            style={{
              background: "linear-gradient(to right, #403d39, #0B6530)", // Gradient background
              WebkitBackgroundClip: "text", // Vendor prefix for Safari
              backgroundClip: "text", // Standard syntax
              color: "transparent", // Make the text color transparent to show the background
            }}
          >
            1000+ hedges
          </div>
          <div className="md:text-lg">trimmed and crafted</div>
        </div>
        
      </div>
      <div
        style={{ backgroundImage: `url(${AboutUsHeaderImage})` }}
        className="h-[30%] md:h-[45%] w-[90%] rounded-3xl bg-cover bg-center bg-no-repeat mb-8"
      ></div>
      <div className="px-4 font-text font-bold md:text-lg">
        We have been doing it for over 20+ years, and will continue to provide
        nothing but the best quality service at the most competitive prices. No
        one treats the Tulsa Area's lawns better than us, and we strive prove it
        time and time again.
      </div>
    </div>
  );
}

export default AboutUsHeader;
