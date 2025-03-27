import "../greenEX_2/greenex2.css";

import img1 from "../../assets/greenex/img7.png";

const Greenex2 = () => {
  return (
    <>
      <div className="greenex2">
        <div className="container">
          <div className="greenex2_main">
            <div className="greenex2_box">
              <div className="greenex2_box_left">
                <img src={img1} alt="" />
              </div>

              <div className="greenex2_box_right">
                <p>
                  For the raw materials of the Green-EX line, our company
                  selects low-carbon aluminum raw materials, whose extraction
                  and processing comply with environmental standards for
                  minimizing greenhouse gases. The requirement to meet these
                  standards will be enforced at all stages of the technological
                  chain — from bauxite mining to the production of primary raw
                  materials and their delivery to the BENKAM production complex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greenex2;
