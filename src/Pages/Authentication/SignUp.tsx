import React from "react";
import AuthenticationCard from "../../Components/Authentication/AuthenticationCard";
import SignUpForm from "../../Components/Authentication/SignUpForm";
import "../../Styles/main.scss";

function SignUp() {
  return (
    <div className="authentication">
      <AuthenticationCard form={<SignUpForm />} />
    </div>
  );
}

export default SignUp;