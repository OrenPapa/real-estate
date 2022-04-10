import React from "react";
import "../Styles/main.scss";
import { Icon } from "@iconify/react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left-panel">
        <div className="navbar__logo">
          <Icon icon="logos:backbone" width="150" height="50" />
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
          <button className="navbar__action-button">List a Property</button>
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
