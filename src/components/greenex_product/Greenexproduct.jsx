import "../greenex_product/greenexproduct.css";

import img1 from "../../assets/greenex/img1.png";
import img2 from "../../assets/greenex/img2.png";
import img3 from "../../assets/greenex/img3.png";

const Greenexproduct = () => {
  return (
    <>
      <div className="greenexproduct">
        <div className="container">
          <div className="greenexproduct_main">
            <div className="greenexproduct_box">
              <div className="img_greenex">
                <img src={img3} alt="" />
              </div>
              <div className="img_greenex">
                <img src={img2} alt="" />
              </div>
              <div className="img_greenex">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greenexproduct;
