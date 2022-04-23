import React from "react";
import "../../Styles/main.scss";
import HeaderAddProperty from "./HeaderAddProperty";
import HeaderSearchArea from "./HeaderSearchArea";

function HeaderContent() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content-title">Find your next property</div>
        <HeaderSearchArea />
        <HeaderAddProperty />
      </div>
    </div>
  );
}

export default HeaderContent;
