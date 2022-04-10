import React from "react";
import "../Styles/main.scss";
import HeaderAddProperty from "./HeaderAddProperty";
import HeaderSearchArea from "./HeaderSearchArea";

function HeaderContent() {
  return (
    <div className="header-content">
      <div className="header-content__title">content your next property</div>
      <HeaderSearchArea />
      <HeaderAddProperty/>
    </div>
  );
}

export default HeaderContent;
