import '../Fabrication/fabrication.css'

import img1 from '../../assets/fabrication_img/img2.png'

const Fabrication = () => {
  return (
    <>
      <div className="fabrication" id='fabrication'>
        <div className="container">
          <div className="fabrication_main">
            <div className="fabrication_box">
              <div className="fabrication_box_left">
                 
                 <h1>Fabrication</h1>

                <p>
                  BENKAM has its own profile processing department -
                  fabrication, which is systematically expanded and equipped
                  with innovative devices and new technologies to increase its
                  competitiveness on the market. Thinking about its clients, the
                  company invests in modern multi-axis machining centers,
                  precision saws, punching and shaping presses and stations for
                  assembling ready-made components.
                </p>
              
              </div>

              <div className="fabrication_box_right">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fabrication;
