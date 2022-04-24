import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const navigate = useNavigate();

  const onHomepageNavigation = () => {
    let path = "/";
    navigate(path);
  };

  const onSignInPageNavigation = () => {
    let path = "/sign-up";
    navigate(path);
  };

  return (
    <div className="sign-in-form">
      <div className="sign-in-form__title">Sign in</div>
      <div className="sign-in-form__input-container">
        <input
          className="sign-in-form__input"
          type={"email"}
          placeholder="Email"
        />
        <input
          className="sign-in-form__input"
          type={"password"}
          placeholder="Password"
        />
        <div className="sign-in-form__forgot-password"> Forgot Password?</div>
      </div>
      <div className="sign-in-form__button-container">
        <button onClick={onHomepageNavigation} className="sign-in-form__button">
          Sign in
        </button>
      </div>
      <div className="sign-in-form__alternative-sign-in-title">
        Alternative sign in
      </div>
      <div className="sign-in-form__alternative-sign-in-container">
        <button className="sign-in-form__social-button sign-in-form__social-button--color-red">
          <Icon
            icon="akar-icons:google-fill"
            color="white"
            width="25"
            height="25"
          />
        </button>
        <button className="sign-in-form__social-button sign-in-form__social-button--color-blue">
          <Icon icon="brandico:facebook" color="white" width="25" height="25" />
        </button>
        <div className="sign-in-form__facebook-button"></div>
      </div>
      <div className="sign-in-form__text-container">
        <div onClick={onSignInPageNavigation} className="sign-in-form__text">Sign up</div>
      </div>
    </div>
  );
}

export default SignInForm;
