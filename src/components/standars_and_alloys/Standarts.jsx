import "../standars_and_alloys/standarts.css";

import videoSrca from '../../assets/ddshop/vd.mp4'

const Standarts = () => {
  return (
    <>
      <div className="standarts" id="standarts">
        <div className="container">
          <div className="standarts_main">
            <div className="standarts_title">
              <h1>
                Standards <span>and alloys</span>
              </h1>
            </div>

            <div className="standarts_box">
              <div className="standarts_left">
                <p>
                  Aluminum has many valuable properties. It is very durable,
                  despite the fact that it is almost 2 times lighter than iron.
                  Not subject to corrosion, because its surface is always
                  covered with the finest oxide film (see anodizing). During the
                  entire life of the plant, it practically does not require
                  repair. It does not magnetize, it conducts electricity
                  perfectly. And of course durability, this is one of the main
                  advantages, the durability of aluminum structures is over 80
                  years. It retains its structural properties under temperature
                  changes.
                </p>

                <p>
                  After processisng the surface of aluminum products, they are
                  not susceptible to corrosion caused by rain, snow, heat and
                  smog. Aluminum does not require recycling, it simply does not
                  exist, since aluminum scrap is subject to recovery, retaining
                  its original properties. In the construction there is
                  developed system of circular process of aluminum utilization.
                </p>

                <p>
                  The harvesting waste of enterprises and replaced old
                  construction parts are sent for reuse. It also does not
                  contain heavy metal impurities, does not emit harmful
                  substances under the influence of ultraviolet rays, and
                  maintains its performance in any climatic conditions at
                  temperature differences from -80°C and up to + 100°C.
                </p>
              </div>

              <div className="standarts_right">
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  muted
                  loop
                  style={{ pointerEvents: "none" }}
                >
                  <source src={videoSrca} type="video/mp4" />
                
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Standarts;
