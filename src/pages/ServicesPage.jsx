import NavBar from "../Layout/NavBar";
import { MenuProvider } from "../Components/MenuContext";

function ServicesPage() {
  return (
    <div className="bg-background min-h-screen w-screen overflow-x-hidden">
      <MenuProvider >
        < NavBar />
        <div>Services</div>
      </MenuProvider>
    </div>
  );
}

export default ServicesPage;