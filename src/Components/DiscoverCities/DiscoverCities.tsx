import React from "react";
import "../../Styles/main.scss";
import CityCard from "./CityCard";
import { Cities } from "./DiscoverCitiesDummyData";

function DiscoverCities() {
  return (
    <div className="discover-cities">
      <div className="discover-cities__title-container">
        <div className="discover-cities__title">Featured Cities</div>
        <div className="discover-cities__subtitle">
          Discover thousands of apartments and homes for rent in 50+ countries
        </div>
      </div>
      <div className="discover-cities__cities-container">
        {Cities.slice(0, 6).map((city) => {
          return (
            <CityCard
              key={city.id}
              image={city.image}
              name={city.name}
              text={city.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DiscoverCities;
