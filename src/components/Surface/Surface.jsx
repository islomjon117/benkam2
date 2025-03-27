import "../Surface/surface.css";

import videoSrc from '../../assets/surface/vd.mp4'; 

const Surface = () => {
  return (
    <>
      <div className="surface" id="Surface_treatment">
        <div className="container">
          <div className="surface_main">
            <div className="surface_box">
              <div className="surface_box_right">
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
              <div className="surface_box_left">
                <h1>Surface <span>treatment</span></h1>
                <p>
                  BENKAM company offers the full opportunity to surface
                  treatment anodizing and powder coating according to customer
                  needs and available technologies on the market with qualified
                  suppliers with certificates confirming high quality of service
                  e.g. Qualanod Certificate, Certificate Qualicoat.
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Surface;
