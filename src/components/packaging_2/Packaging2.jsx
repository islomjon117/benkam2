import "../packaging_2/packaging2.css";

import img5 from "../../assets/ddshop/img5.jpg";

const Packaging2 = () => {
  return (
    <>
      <div className="packaging2">
        <div className="container">
          <div className="packaging2_main">
            
            <div className="packaging2_box">
              <div className="packaging2_box_left">
                <p>
                  BENKAM supplies the products in the following standard types
                  of packaging:
                </p>
              </div>

              <div className="packaging2_box_right">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packaging2;
