import "../benfits/benfits.css";

import im1 from "../../assets/greenex/img52.png";
import im2 from "../../assets/greenex/img8.png";
import im3 from "../../assets/greenex/img9.png";
import im4 from "../../assets/greenex/img10.png";

const Benfits = () => {
  return (
    <>
      <div className="benfits">
        <div className="container">
          <div className="benfits_main">
            <div className="benfits_title">
              <h1>
                Benefits of using Green-EX and{" "}
                <span>REGreen-EX aluminum profiles</span>
              </h1>
            </div>

            <div className="benfits_li_box">
              <div className="benfits_li">
                <ul>
                  <li>Reduced environmental impact</li>
                  <li>Adhering to sustainable development principles</li>
                  <li>Minimization of reputational costs</li>
                </ul>
              </div>

              <div className="benfits_li">
                <ul>
                  <li>Reduction of legal risks</li>
                  <li>Increased transparency of the supply chain</li>
                  <li>
                    Increasing the value of the product by reducing the carbon
                    footprint at all stages of production
                  </li>
                </ul>
              </div>
            </div>

            <div className="benfits_partners">
              <div className="benfits_partnes_box">
                <img src={im2} alt="" />
              </div>
              <div className="benfits_partnes_box">
                <img src={im3} alt="" />
              </div>
              <div className="benfits_partnes_box">
                <img src={im4} alt="" />
              </div>
              <div className="benfits_partnes_box">
                <img src={im1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benfits;
