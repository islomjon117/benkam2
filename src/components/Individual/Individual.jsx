import "../Individual/individual.css";

import videoSrc from "../../assets/individual/vd.mp4";
import img1 from "../../assets/individual/img1.png";

const Individual = () => {
  return (
    <>
      <div className="individual" id="Individual_extrusion_solutions">
        <div className="container">
          <div className="individual_main">
            <div className="individual_title">
              <h1>
                Individual <span>extrusion solutions</span>
              </h1>
            </div>

            <div className="individual_box">
              <div className="individual_box_left">
                <p>
                  We offer the manufacture of aluminum profiles on request to
                  ready-made drawings of any complexity. We will discuss your
                  project and together will find the best solution. Depending on
                  the complexity of manufactured profile, dimensions, surface
                  requirements, we can choose the optimal price-quality ratio.
                </p>
              </div>

              <div className="individual_box_right">
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  muted
                  loop
                  style={{ pointerEvents: "none" }}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
            <br />
            <br />
            <div className="individual_box">
              <div className="individual_box_right">
                <img src={img1} alt="" />
              </div>

              <div className="individual_box_left">
                <p>
                  Be sure that the product fully meets the expectations, because
                  the profiles on order are delivered strictly in accordance
                  with EN 12020; EN 7579; GOST 22233-2001, GOST 8617-81, as well
                  as any of EN 12020 standards. We will discuss your project and
                  together will find the best solution. Depending on the
                  complexity of manufactured profile, dimensions, surface
                  requirements, we can choose the optimal price-quality ratio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Individual;
