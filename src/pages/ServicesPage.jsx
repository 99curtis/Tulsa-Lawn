import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MenuProvider } from "../Components/MenuContext";
import NavBar from "../Layout/NavBar";
import ResidentialLawnService from "../Layout/ResidentialLawnService";
import CommercialLawnService from "../Layout/CommercialLawnService";
import HedgeTrimmingService from "../Layout/HedgeTrimmingService";
import LeafRemovalService from "../Layout/LeafRemovalService";

function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    const service = location.pathname.split("/").pop(); // Assuming the URL structure /Tulsa-Lawn/services/service-name
    const section = document.getElementById(service);
  
    if (section) {
      window.requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-background">
      <MenuProvider>
        <NavBar /> 
        <div id="residential-lawn" className="h-[100vh] bg-secondary">
          <ResidentialLawnService />
        </div>
        <div id="commercial-lawn" className="h-[100vh] bg-background">
          <CommercialLawnService />
        </div>
        <div id="hedge-trimming" className="h-[100vh] bg-secondary">
          <HedgeTrimmingService />
        </div>
        <div id="leaf-removal" className="h-[100vh] bg-background">
          <LeafRemovalService />
        </div>
      </MenuProvider>
    </div>
  );
}

export default ServicesPage;