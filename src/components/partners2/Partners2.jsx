import Marquee from "react-fast-marquee";

import "../partners2/partners2.css";

import partner2 from "../../assets/partners_2/img2.png";
import partner3 from "../../assets/partners_2/img3.png";
import partner4 from "../../assets/partners_2/img4.png";
import partner5 from "../../assets/partners_2/img5.png";
import partner6 from "../../assets/partners_2/img6.png";
import partner7 from "../../assets/partners_2/img22.png";

const Partners2 = () => {

  return (
    <>
      <div className="partners">
        <div className="partners_main">
          <Marquee>
            <div className="partners_marquee">
             
              <div className="partner_wrapper2">
                <img className="partner_wrapper22" src={partner2} alt="" />
              </div>
              <div className="partner_wrapper2">
                <img src={partner3} alt="" />
              </div>
              <div className="partner_wrapper2">
                <img src={partner4} alt="" />
              </div>
              <div className="partner_wrapper2">
                <img src={partner5} alt="" />
              </div>
              <div className="partner_wrapper2">
                <img src={partner6} alt="" />
              </div>
              <div className="partner_wrapper2">
                <img src={partner7} alt="" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Partners2;
