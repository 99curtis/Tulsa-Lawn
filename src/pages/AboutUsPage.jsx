import NavBar from "../Layout/NavBar";
import { MenuProvider } from "../Components/MenuContext";

function AboutUsPage() {
  return (
    <div className="bg-background min-h-screen w-screen overflow-x-hidden">
      <MenuProvider >
        < NavBar />
        <div>About Us</div>
      </MenuProvider>
    </div>
  );
}

export default AboutUsPage;