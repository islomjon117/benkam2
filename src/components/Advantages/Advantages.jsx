import '../Advantages/advantages.css'

import { FiMinus } from "react-icons/fi";

const Advantages = () => {
  return (
    <>
      <div className="advantages">
        <div className="container">
          <div className="advantages_main">
            <div className="advantages_title">
              <h1>Advantages of aluminium <span>alloy supports</span></h1>
            </div>

            <div className="advantages_tables">
              <div className="advantage_table">
                <p><span><FiMinus /></span>ease of construction;</p>
                <p><span><FiMinus /></span>ease of transportation and installation;</p>
              </div>
              <div className="advantage_table">
                <p><span><FiMinus /></span>aesthetic appearance;</p>
                <p><span><FiMinus /></span>reliability (withstand load in any wind zones)</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Advantages;
