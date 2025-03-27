import "../Infrastructure/infrastructure.css";

import img1 from "../../assets/infrastructure/img1.png";
import img2 from "../../assets/infrastructure/img.png";

const Infrastructure = () => {
  return (
    <>
      <div className="infrastructure" id="infrastructure">
        <div className="container">
          <div className="infrastructure_main">
         
            <div className="infrastructure_box">
              <div className="infrastructure_box2">
                <div className="infrastructure_box_left">
                  <div className="infrastructure_title">
                    <h1>Infrastructure</h1>
                  </div>
                  <div className="infrastructure_info">
                    <p>
                      Aluminium profile systems - a universal solution for any
                      architectural task. Thanks to modern technologies of
                      painting and anodizing, the quality of the coating of
                      aluminium profiles is distinguished by its durability, its
                      resistance to atmospheric and mechanical influences.
                    </p>
                    <p>
                      Lightness, plasticity, high thermal and electrical
                      conductivity, and non-toxic aluminium make it possible to
                      use it in eco-architecture - the construction of
                      infrastructure facilities, the creation and further
                      operation of which cause minimal damage to the
                      environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="infrastucture_right">
                <img src={img1} alt="" />
              </div>
            </div>
            <br />
            <div className="infrastructure_box">
              <div className="infrastucture_right">
                <img src={img2} alt="" />
              </div>
              <div className="infrastructure_box2">
                <div className="infrastructure_box_left">
                  <div className="infrastructure_info">
                    <p>
                      Metal lampposts have a significant advantage over aging
                      concrete supports - they are much easier to install and
                      transport, which significantly reduces the cost of
                      installing lighting systems. They are durable, easy to
                      operate, have a rather aesthetic appearance, perfectly fit
                      into the environment and are widely used for creating
                      illuminations on highways and roads, squares and
                      boulevards, in parks and courtyards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
