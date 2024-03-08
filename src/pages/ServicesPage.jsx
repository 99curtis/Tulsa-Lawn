import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MenuProvider } from "../Components/MenuContext";
import NavBar from "../Layout/NavBar";
import ServicesHero from "../Layout/ServicesHero";
import ResidentialLawnService from "../Layout/ResidentialLawnService";
import CommercialLawnService from "../Layout/CommercialLawnService";
import HedgeTrimmingService from "../Layout/HedgeTrimmingService";
import LeafRemovalService from "../Layout/LeafRemovalService";
import Footer from "../Layout/Footer";


function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    // Split the URL path and remove any empty segments
    const pathSegments = location.pathname.split("/").filter(Boolean);
    // Get the last segment as the service name
    const service = pathSegments[pathSegments.length - 1];
    
    // Check if we're at the base services URL or a specific service URL
    if (pathSegments.length === 1) { // This means we're at /services/ with no additional path
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (pathSegments.length > 1) { // This means we're at a specific service URL
      const section = document.getElementById(service);
      if (section) {
        window.requestAnimationFrame(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }, [location]);
  

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-background">
      <MenuProvider>
        <NavBar /> 

        <ServicesHero />

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
        <Footer />
      </MenuProvider>
    </div>
  );
}

export default ServicesPage;