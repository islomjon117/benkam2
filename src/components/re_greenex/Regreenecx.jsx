import "../re_greenex/regreenex.css";

import img2 from "../../assets/greenex/img7.png";
import img3 from "../../assets/greenex/img4.png";

const Regreenecx = () => {
  return (
    <>
      <div className="regreenex">
        <div className="container">
          <div className="regreenex_main">

            <div className="regreenex_box">
              <div className="regreenex_left">
                <div className="regreenex_logo">
                  <img src={img2} alt="" />
                </div>
                <p>
                  Aluminum is a unique material that can be recycled endlessly.
                </p>
                <p>
                  Up to 60% of the content in the ReGreen-Ex aluminum profile is
                  post-consumer scrap.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="regreenex_right">
          <img src={img3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Regreenecx;
