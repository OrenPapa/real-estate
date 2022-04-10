import React from "react";
import Footer from "../../Components/Footer/Footer";
import HeaderContent from "../../Components/Header/HeaderContent";

import Navbar from "../../Components/Navbar";
import "../../Styles/Layouts/homepage.scss";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepage__header">
        <HeaderContent />
      </div>
        <Footer />
    </div>
  );
}

export default HomePage;
