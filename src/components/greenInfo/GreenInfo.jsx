import "../greenInfo/greeninfo.css";

const GreenInfo = () => {
  return (
    <>
      <div className="greeninfo">
        <div className="container">
          <div className="green_info_main">
            <div className="green_info_title">
              <h1>
                Green-EX & <span>REGreen-EX</span>
              </h1>
            </div>

            <div className="green_text">
              <div className="green_text_left">
                <p>
                  As one of the flagships of the aluminum industry in Central
                  Asia, BENKAM follows global trends and has been actively
                  working on creating a new eco-friendly line of extrusion
                  profiles since 2022. In 2024, new types of eco-friendly
                  products will be produced at BENKAM's manufacturing
                  facilities.
                </p>
              </div>

              <div className="green_text_right">
                <h3>
                  What are the differences of BENKAM's eco-friendly products?
                </h3>
                <p>
                  Green-EX eco-friendly aluminum from BENKAM differs from
                  regular aluminum in that the entire supply chain, from raw
                  materials to delivery, undergoes rigorous inspection to meet
                  environmental standards.
                </p>
              </div>
            </div>

            <div className="green_text_li">
              <div className="green_text_li_left">
                <ul>
                  <li>Green-EX — profiles made from low-carbon aluminum</li>
                </ul>
              </div>

              <div className="green_text_li_right">
                <ul>
                  <li>REGreen-EX — products made from recycled aluminum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenInfo;
