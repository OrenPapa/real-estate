import React, { useEffect, useState } from "react";
import "../Styles/main.scss";
import { Icon } from "@iconify/react";

function Navbar() {
  const [hasColor, setHasColor] = useState(false);
  const [hasLogoColor, setHasLogoColor] = useState(false);

  const onNavbarColorChange = () => {
    if (window.scrollY >= 80) {
      setHasColor(true);
    } else {
      setHasColor(false);
    }
  };

  const onLogoColorChange = () => {
    if (window.scrollY >= 80) {
      setHasLogoColor(true);
    } else {
      setHasLogoColor(false);
    }
  };

  useEffect(() => {
    onNavbarColorChange();
    window.addEventListener("scroll", onNavbarColorChange);
  });

  return (
    <div className={`navbar ${hasColor && "navbar--color-blue"}`}>
      <div className="navbar__left-panel">
        <div className="navbar__logo">
          {hasColor ? (
            <Icon
              icon="simple-icons:backbonedotjs"
              color="white"
              width="50"
              height="50"
            />
          ) : (
            <Icon
              icon="logos:backbone-icon"
              color="white"
              width="50"
              height="50"
            />
          )}
        </div>
        <ul className="navbar__menu">
          <li className="navbar__menu-item">Buy</li>
          <li className="navbar__menu-item">Rent</li>
          <li className="navbar__menu-item">Payments</li>
          <li className="navbar__menu-item">About us</li>
        </ul>
      </div>
      <div className="navbar__right-panel">
        <div className="navbar__action">
          <button className={`navbar__action-button ${hasColor && "navbar__action-button--color-blue"}`}>List a Property</button>
        </div>
        <div className="navbar__auth">
          <div className="navbar__auth-button">Log in</div>
          <div className="navbar__auth-separator">|</div>
          <div className="navbar__auth-button">Sign up</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
