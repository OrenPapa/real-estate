import React from "react";
import "../../Styles/main.scss";
import { Information, OurPartners, OurServices } from "./FooterDummyData";
import FooterPagesContainer from "./FooterPagesContainer";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__upper-panel">
        <div className="footer__upper-left">
          <FooterPagesContainer
            title="Our Services"
            firstPage={OurServices.firstPage}
            secondPage={OurServices.SecondPage}
            thirdPage={OurServices.ThirdPage}
          />
          <FooterPagesContainer
            title="Information"
            firstPage={Information.firstPage}
            secondPage={Information.SecondPage}
            thirdPage={Information.ThirdPage}
          />
          <FooterPagesContainer
            title="Our Partners"
            firstPage={OurPartners.firstPage}
            secondPage={OurPartners.SecondPage}
            thirdPage={OurPartners.ThirdPage}
          />
        </div>
        <div className="footer__separator" />
        <div className="footer__upper-right">
          <div className="footer__social-container">
            <div className="footer__social">
              <Icon
                icon="akar-icons:facebook-fill"
                color="white"
                width="30"
                height="30"
              />
            </div>
            <div className="footer__social">
              <Icon
                icon="akar-icons:linkedin-box-fill"
                color="white"
                width="30"
                height="30"
              />
            </div>
            <div className="footer__social">
              <Icon
                icon="akar-icons:instagram-fill"
                color="white"
                width="30"
                height="30"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__lower-panel">
        TermsFeed © 2012 - 2022, Tirana, Albania.
      </div>
    </div>
  );
}

export default Footer;
