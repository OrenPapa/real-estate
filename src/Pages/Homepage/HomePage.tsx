import React from "react";
import DiscoverCities from "../../Components/DiscoverCities/DiscoverCities";
import Footer from "../../Components/Footer/Footer";
import HeaderContent from "../../Components/Header/Header";

import Navbar from "../../Components/Navbar";
import OurClients from "../../Components/OurClients/OurClients";
import PartnersSection from "../../Components/PartnersSection/PartnersSection";
import RegisterSection from "../../Components/Register/RegisterSection";
import "../../Styles/Layouts/homepage.scss";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <HeaderContent />
      <DiscoverCities />
      <PartnersSection />
      <RegisterSection />
      <OurClients />
      <Footer />
    </div>
  );
}

export default HomePage;
