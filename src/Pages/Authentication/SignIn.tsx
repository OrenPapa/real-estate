import React from "react";
import AuthenticationCard from "../../Components/Authentication/AuthenticationCard";
import SignInForm from "../../Components/Authentication/SignInForm";
import "../../Styles/main.scss";

function SignIn() {
  return (
    <div className="authentication">
      <AuthenticationCard form={<SignInForm />} />
    </div>
  );
}

export default SignIn;
