import React from "react";
import Footer from "../../Components/Footer/Footer";
import DiscoverCities from "../../Components/Homepage/DiscoverCities/DiscoverCities";
import HeaderContent from "../../Components/Homepage/Header/Header";
import OurClients from "../../Components/Homepage/OurClients/OurClients";
import PartnersSection from "../../Components/Homepage/PartnersSection/PartnersSection";
import RegisterSection from "../../Components/Homepage/Register/RegisterSection";
import Navbar from "../../Components/Navbar/Navbar";
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
