import React from "react";
import { Icon } from "@iconify/react";

function RegistrationCard() {
  return (
    <div className="registration-card">
      <div className="registration-card__upper-panel">
        <Icon icon="carbon:user-avatar" color="white" width="70" height="70" />
        <div className="registration-card__upper-panel-container">
          <div className="registration-card__line"></div>
          <div className="registration-card__text">Register</div>
          <div className="registration-card__line"></div>
        </div>
      </div>
      <div className="registration-card__lower-panel">
        <form className="registration-card__form">
          <div className="registration-card__small-input-container">
            <input
              className="registration-card__small-input"
              placeholder="Name"
              type="text"
            />
            <input
              className="registration-card__small-input"
              placeholder="Surname"
              type="text"
            />
          </div>
          <div className="registration-card__large-input-container">
            <input
              className="registration-card__large-input"
              placeholder="Email"
              type="email"
            />
            <input
              className="registration-card__large-input"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="registration-card__checkbox-container">
            <input className="registration-card__checkbox" type="checkbox" />
            <div className="registration-card__checkbox-label">
              I accept the terms of use
            </div>
          </div>
          <div className="registration-card__button-container">
              <button type="submit" className="registration-card__button">Join</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationCard;
