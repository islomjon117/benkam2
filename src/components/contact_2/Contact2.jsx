import React, { useContext, useEffect } from "react";
import { FilterContext } from "../../context";
import "../contact_2/contact2.css";

import { TbPhoneCall } from "react-icons/tb";
import { MdMarkEmailUnread } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import Aos from "aos";

const Contact2 = () => {
  const {content} = useContext(FilterContext)

  useEffect(() => {
    Aos.init({
      duration: 2000, // Animatsiya davomiyligi (ms)
    });
  }, []);

  return (
    <>
      <div className="contact2" >
        <div className="container">
          <div className="contact2_main" data-aos="flip-down">
            <div className="phone_box">
              <div className="phone_icon">
                <p>
                  <span>
                    <TbPhoneCall />
                  </span>
                </p>
              </div>
              <div className="phone_numbers">
                <p>{content.contect2_call}</p>
                <p className="box1313">+1 908 510 27 34</p>
                <p className="box1313">+370 648 45 075</p>
              </div>
            </div>

            <div className="email_box">
              <div className="email_icon">
                <p>
                  <span>
                    <MdMarkEmailUnread />
                  </span>
                </p>
              </div>
              <div className="email_txt">
                <p>{content.contect2_email}</p>
                <p className="box1313">mirko@benkam.us</p>
                <p className="box1313">b.bekbaev@benkam.eu</p>
              </div>
            </div>

            <div className="address_box">
              <div className="address_icon">
                <p>
                  <span>
                    <GrLocation />
                  </span>
                </p>
              </div>

              <div className="address_txt">
                <p>{content.contect2_address}</p>
                <p className="box1313">
                  Galines g. 1, LT-14247, GALINĖS K. AVIŽIENIŲ SEN. VILNIAUS R.
                </p>
                <p className="box1313">46580 Drysdale Terr, Sterling, VA 20165</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact2;
