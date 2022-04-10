import React from "react";
import Footer from "../../Components/Footer";
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
      <div className="homepage__footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
