import NavBar from "../Layout/NavBar";
import { MenuProvider } from "../Components/MenuContext";

function PastProjectsPage() {
  return (
    <div className="bg-background min-h-screen w-screen overflow-x-hidden">
      <MenuProvider >
        < NavBar />
        <div>Past Projects</div>
      </MenuProvider>
    </div>
  );
}

export default PastProjectsPage;