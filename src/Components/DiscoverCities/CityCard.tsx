import React from "react";
import "../../Styles/main.scss";

function CityCard(props: { image: string; name: string; text: string }) {
  return (
    <div className="city-card">
      <img className="city-card__image" src={props.image} alt="City" />
      <div className="city-card__content">
        <div className="city-card__text-container">
          <div className="city-card__name">{props.name}</div>
          <div className="city-card__text">{props.text}</div>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
