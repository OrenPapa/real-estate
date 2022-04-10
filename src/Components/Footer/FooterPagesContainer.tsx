import React from "react";
import "../../Styles/main.scss";

function FooterPagesContainer(props: {
  title: string;
  firstPage: string;
  secondPage?: string;
  thirdPage?: string;
  fourthPage?: string;
  fifthPage?: string;
}) {
  return (
    <div className="footer-pages-container">
      <div className="footer-pages-container__title">{props.title}</div>
      <div className="footer-pages-container__pages-container">
        <div className="footer-pages-container__page">{props.firstPage}</div>
        <div className="footer-pages-container__page">{props.secondPage}</div>
        <div className="footer-pages-container__page">{props.thirdPage}</div>
        <div className="footer-pages-container__page">{props.fourthPage}</div>
        <div className="footer-pages-container__page">{props.fifthPage}</div>
      </div>
    </div>
  );
}

export default FooterPagesContainer;
