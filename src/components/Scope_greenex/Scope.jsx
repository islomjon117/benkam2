import "../Scope_greenex/scope.css";

import img1 from "../../assets/scope/img1.png";
import img2 from "../../assets/scope/img2.png";
import img3 from "../../assets/scope/img3.png";

const Scope = () => {
  return (
    <>
      <div className="scope">
        <div className="container">
          <div className="scope_main">
            <div className="scope_title">
              <h1>
                Scope of application <span> Green-Ex and ReGreen-Ex</span>
              </h1>
            </div>

            <div className="scope_boxs">

              <div className="scope_box">
                <div className="scope_left">
                <img src={img1} alt="" />
                </div>
                  <h3 className="scope_title1">Automotive Industry</h3>
                <div className="scope_right">
                  <p>
                    Consumers are increasingly favoring vehicles that meet
                    sustainable development requirements and are moving away
                    from legacy transportation. By supplying eco-friendly
                    aluminum profiles for the automotive industry, BENKAM will
                    contribute to reducing harmful emissions at all stages of
                    vehicle production and operation.
                  </p>
                </div>
              </div>

              <div className="scope_box">
                <div className="scope_left">
                <img src={img2} alt="" />
                </div>
                  <h3 className="scope_title1">Solar Energy Industry</h3>
                <div className="scope_right">
                  <p>
                    The extruded aluminum profiles Green-EX and REGreen-EX, used
                    to manufacture frames for solar panels and photovoltaic
                    supports, will contribute to reducing carbon footprint and
                    generating truly clean solar energy.
                  </p>
                </div>
              </div>

              <div className="scope_box">
                <div className="scope_left">
                    <img src={img3} alt="" />
                </div>
                  <h3 className="scope_title1">Construction Industry </h3>
                <div className="scope_right">
                  <p>
                    Reducing harmful emissions is currently one of the most
                    pressing challenges facing major cities. Construction
                    products made from GreenEX / REGreen-EX aluminum profiles
                    will have a guaranteed low carbon footprint.
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scope;
