import "../technical_parametrs/technical_paramets.css";

import img1 from '../../assets/ddshop/img2.png'

const Technikal_parametrs = () => {
  return (
    <>
      <div className="technical_parametrs">
        <div className="container">
          <div className="technical_parametrs_main">
            <div className="parametrs_title">
              <h1>
                Product offer - <span>technical parameters</span>
              </h1>

              <div className="technical_parametr_img">
                <img src={img1}  alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technikal_parametrs;
