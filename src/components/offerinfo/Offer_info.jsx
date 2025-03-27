import "../offerinfo/offer_info.css";

import { GoArrowDownRight } from "react-icons/go";

const Offer_info = () => {
  return (
    <>
      <div className="offer_info">
        <div className="container">
          <div className="offer_info_main">
            <div className="offer_info_box">
              <p>
                BENKAM’s product range, in addition to standard profiles which
                are widely used, can also be extended to special profiles
                manufactured on the basis of individual requirements of the
                Customer according to the received technical documentation.
              </p>
              <div className="offer_info_video">  
                <h2>Individual extrusion solutions</h2>

                <div className="offer_arrow">
                  <span>
                    <GoArrowDownRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer_info;
