import React, { useState } from "react";
import "../../Styles/main.scss";

function HeaderSearchArea() {
  const [buy, setBuy] = useState(true);
  const [rent, setRent] = useState(false);

  const buyHandler = () => {
    setBuy(true);
    setRent(false);
  };

  const rentHandler = () => {
    setBuy(false);
    setRent(true);
  };

  return (
    <div className="header-search-area">
      <div className="header-search-area__sort-item">
        <div
          onClick={buyHandler}
          className={`header-search-area__item${buy ? "--colored" : ""}`}
        >
          Buy
        </div>
        <div
          onClick={rentHandler}
          className={`header-search-area__item${rent ? "--colored" : ""}`}
        >
          Rent
        </div>
      </div>

      <input
        placeholder="content for property..."
        className="header-search-area__input"
      />
    </div>
  );
}

export default HeaderSearchArea;
