import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import { MenuProvider } from "../Components/MenuContext";

function LandingPage() {
  return (
    <div className="flex h-screen max-h-screen w-screen flex-col justify-between bg-background">
      <MenuProvider>
        <NavBar />
        <div className="flex flex-grow items-center justify-center">
          <div className="absolute top-[20%] justify-center">
            <div className="h-24 w-24 animate-spin rounded-full border-b-[3px] border-primary"></div>
          </div>
        </div>
        <Footer />
      </MenuProvider>
    </div>
  );
}

export default LandingPage;
