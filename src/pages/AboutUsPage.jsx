import NavBar from "../Layout/NavBar";
import { MenuProvider } from "../Components/MenuContext";
import AboutUsHeader from "../Layout/AboutUsHeader.jsx";
import Footer from "../Layout/Footer.jsx";


function AboutUsPage() {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-background flex flex-col justify-between">
      <MenuProvider>
        <NavBar />
        <AboutUsHeader />
        <Footer />
      </MenuProvider>
    </div>
  );
}

export default AboutUsPage;
