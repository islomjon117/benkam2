import "../packaging/packaging.css";

import img1 from '../../assets/ddshop/bg2.png'

const Packaging = () => {
  return (
    <>
      <div className="packaging" id="packaging">
        <div className="container">
          <div className="packaging_main">
            <div className="packaging_title">
              <h1>
                Packaging <span>and logistics</span>
              </h1>
            </div>

            <div className="packaging_box">
              <div className="packaging_box_left">
                <img src={img1} alt="" />
              </div>

              <div className="packaging_box_right">
                <p>
                  Each customer or region has its own requirements for packaging
                  and shipping of aluminium profiles. Therefore BENKAM has
                  created a special packing department, which carried out a
                  high-quality packaging at the best price by taking into
                  account all the wishes of the customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packaging;
