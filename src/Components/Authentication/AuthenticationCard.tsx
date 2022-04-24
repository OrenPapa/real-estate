import React from "react";
import "../../Styles/main.scss";
import { Icon } from "@iconify/react";

function AuthenticationCard(props: { form: any }) {
  return (
    <div className="authentication-form">
      <div className="authentication-form__left-panel">
        <div className="authentication-form__logo-container">
          <Icon
            icon="simple-icons:backbonedotjs"
            color="white"
            width="50"
            height="50"
          />
        </div>
        <div className="authentication-form__title">
          Welcome To The Real Estate Kings!
        </div>
        <div className="authentication-form__copyright">
          TermsFeed © 2012 - 2022, Tirana, Albania.
        </div>
      </div>
      <div className="authentication-form__right-panel">
        {props.form}
      </div>
    </div>
  );
}

export default AuthenticationCard;
