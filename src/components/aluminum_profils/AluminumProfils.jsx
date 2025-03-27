import "../aluminum_profils/aluminumprofils.css";

import img1 from "../../assets/our_products_img/bg1.jpg";
import { FaMinus } from "react-icons/fa6";

const AluminumProfils = () => {
  return (
    <>
      <div className="aluminumprofils">
        <div className="container">
          <div className="aluminumprofils_main">
            <div className="aluminum_profils_title">
              <h1>
                Aluminum <span>profile</span>
              </h1>
            </div>

            <div className="alimunim_profils_box">
              <div className="alimunim_profils_box_left">
                <img src={img1} alt="" />
              </div>

              <div className="alimunim_profils_box_right">
                <p>
                  Aluminum profile, as a rule, is made of a three-component
                  alloy:
                </p>

                <p>
                  <FaMinus /> aluminum (ensures lightness);
                </p>
                <p>
                  <FaMinus /> magnesium (strengthens the strength of alloy);
                </p>
                <p>
                  <FaMinus /> silicon (increases the casting properties).
                </p>
                <p className="aluminum_text">
                  In conclusion, I would like to note that the use of aluminum
                  can be infinite: this metal and its alloys can be repeatedly
                  melted without losing its physical properties. Most of the
                  aluminum produced since the existence of the industry have
                  been used today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AluminumProfils;
