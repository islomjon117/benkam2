import "../alloys/alloys.css";

import img1 from '../../assets/ddshop/bg1.png'

const Alloys = () => {
  return (
    <>
      <div className="alloys">
        <div className="container">
          <div className="alloys_main">
            <div className="alloys_title"><h1>Alloys</h1></div>

            <div className="alloys_box">
              <div className="alloys_left">
                <p>
                  BENKAM company widely uses aluminum alloys of series 6ххх. Due
                  to the structural advantages of the 6xxx series alloys, the
                  majority of the world market uses alloys of this particular
                  series, because their strength, surface finishability, and
                  operational properties make it possible to use it in virtually
                  all areas of the industry. Below, there are the most common
                  alloys that BENKAM can provide:
                </p>
              </div>

              <div className="alloys_right">
                 <img src={img1} alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alloys;
