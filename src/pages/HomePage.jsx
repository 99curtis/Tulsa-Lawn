import NavBar from "../Layout/NavBar";
import MobileHero from "../Layout/HeroSection";
import ServiceCards from "../Layout/ServicesLayout";
import Portfolio from "../Layout/Projects";
import Reviews from "../Layout/Reviews";
import AreasWeService from "../Layout/AreasWeService";
import Footer from "../Layout/Footer";
import { MenuProvider } from '../Components/MenuContext';

function HomePage () {
  return (
    <div className="bg-background min-h-screen max-w-screen overflow-hidden">
      <MenuProvider >
        < NavBar />
        < MobileHero />
        < ServiceCards />
        < Portfolio />
        < Reviews />
        < AreasWeService />
        < Footer />
      </MenuProvider>
    </div>
  );
}

export default HomePage;