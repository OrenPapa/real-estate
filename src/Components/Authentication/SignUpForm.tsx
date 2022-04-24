import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const onRouteChange = () => {
    let path = "/sign-in";
    navigate(path);
  };

  return (
    <div className="sign-up-form">
      <div className="sign-up-form__title">Sign up</div>
      <div className="sign-up-form__input-container">
        <div className="sign-up-form__double-input-container">
          <input
            className="sign-up-form__small-input"
            type="text"
            placeholder="Name"
          />
          <input
            className="sign-up-form__small-input"
            type="text"
            placeholder="Surname"
          />
        </div>
        <div className="sign-up-form__single-input-container">
          <input
            className="sign-up-form__large-input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="sign-up-form__single-input-container">
          <input
            className="sign-up-form__large-input"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="sign-up-form__checkbox-container">
          <input
            onClick={() => setIsChecked(!isChecked)}
            className="sign-up-form__checkbox"
            type="checkbox"
          />
          <div className="sign-up-form__checkbox-label">
            I accept the terms of use
          </div>
        </div>
        <div className="sign-up-form__button-container">
          <button className="sign-up-form__button">Sign up</button>
        </div>
        <div className="sign-up-form__text-container">
         <div className="sign-up-form__text"> Already registred?</div> <div onClick={onRouteChange} className="sign-up-form__link">Sign in</div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
