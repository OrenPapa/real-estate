import React from "react";
import HeaderSearch from "../../Components/HeaderContent";
import Navbar from "../../Components/Navbar";
import "../../Styles/Layouts/homepage.scss";

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepage__header">
        <HeaderSearch />
      </div>
    </div>
  );
}

export default HomePage;
