import NavBar from "./Layout/NavBar";
import MobileHero from "./Layout/HeroSection";
import ServiceCards from "./Layout/Services";
import Portfolio from "./Layout/Projects";
import Reviews from "./Layout/Reviews";
import AreasWeService from "./Layout/AreasWeService";
import Footer from "./Layout/Footer";
import { MenuProvider } from './Components/MenuContext';


function App() {
  return (
    <div className="bg-background min-h-screen w-screen overflow-x-hidden">
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

export default App;
