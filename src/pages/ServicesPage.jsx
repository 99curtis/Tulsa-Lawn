import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuProvider } from "../Components/MenuContext";
import NavBar from "../Layout/NavBar";

function ServicesPage() {
  let { service } = useParams();

  useEffect(() => {
    if (service) {
      setTimeout(() => {
        const section = document.getElementById(service);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); 
    }
  }, [service]);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-background">
      <MenuProvider>
        <NavBar />
        <div id="residential-lawn" className="h-[100vh] bg-secondary">
          Residential Lawn
        </div>
        <div id="commercial-lawn" className="h-[100vh] bg-background">
          Commercial Lawn
        </div>
        <div id="hedge-trimming" className="h-[100vh] bg-secondary">
          Hedge Trimming
        </div>
        <div id="leaf-removal" className="h-[100vh] bg-background">
          Leaf Removal
        </div>
      </MenuProvider>
    </div>
  );
}

export default ServicesPage;
