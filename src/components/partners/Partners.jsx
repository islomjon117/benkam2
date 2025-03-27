import React, { useContext, useEffect } from "react";
import Marquee from "react-fast-marquee";

import "../partners/partners.css";

import partner1 from "../../assets/partners_img/img1.png";
import partner2 from "../../assets/partners_img/img2.png";
import partner3 from "../../assets/partners_img/img3.png";
import partner4 from "../../assets/partners_img/img4.png";
import partner5 from "../../assets/partners_img/img5.png";
import partner6 from "../../assets/partners_img/img6.png";
import partner7 from "../../assets/partners_img/img7.png";
import partner8 from "../../assets/partners_img/img8.png";
import { FilterContext } from "../../context";
import Aos from "aos";

const Partners = () => {
  const { content } = useContext(FilterContext);

    useEffect(() => {
      Aos.init({
        duration: 2000, // Animatsiya davomiyligi (ms)
      });
    }, []);

  return (
    <>
      <div className="partners">
        <div className="partners_main">
          <div className="title">
            <h1 className="partners_title" data-aos="fade-up">
              {content.partners_title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="last-word">
                {content.partners_title.split(" ").pop()}
              </span>
            </h1>
          </div>
          <Marquee >
            <div className="partners_marquee" data-aos="flip-down">
              <div className="partner_wrapper">
                <img src={partner1} alt="" />
              </div>
              <div className="partner_wrapper">
                <img src={partner2} alt="" />
              </div>
              <div className="partner_wrapper">
                <img src={partner3} alt="" />
              </div>
              <div className="partner_wrapper">
                <img src={partner4} alt="" />
              </div>
              <div className="partner_wrapper">
                <img src={partner5} alt="" />
              </div>
              <div className="partner_wrapper">
                <img src={partner6} alt="" />
              </div>
              <div className="partner_wrapper">
                <img src={partner7} alt="" />
              </div>
              <div className="partner_wrapper">
                <img src={partner8} alt="" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Partners;
