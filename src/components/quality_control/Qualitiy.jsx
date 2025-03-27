import "../quality_control/quality.css";

import img1 from "../../assets/quality_img/img1.png";

const Qualitiy = () => {
  return (
    <>
      <div className="quality">
        <div className="container">
          <div className="quality_main">
            <div className="quality_title">
              <h1>
                Quality <span>control</span>
              </h1>
            </div>

            <div className="quality_box">
              <div className="quality_right">
                <p>
                  Taking into account the individual requirements of each
                  customer, the specialists of the BENKAM laboratory conduct
                  through research of each alloy to ensure the quality of the
                  produced profile.
                </p>
                <p>
                  Chemists-technologists carefully follow the process of
                  processing profiles. Their main task is to control the
                  technological process and perform constant checking of the
                  parts at regular intervals. The verification procedure
                  includes:
                </p>
              </div>
              <div className="quality_left">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualitiy;
