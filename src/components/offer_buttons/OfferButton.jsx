import { Link } from "react-router-dom";
import "../offer_buttons/offerbutton.css";

const OfferButton = () => {
  return (
    <>
      <div className="offer_button">
        <div className="container">
          <div className="offer_button_main">
            <div className="box">
              <Link>
                <div className="box1">
                  <h2>Aluminium profiles</h2>
                </div>
              </Link>

              <Link>
                <div className="box2">
                  <h2>Fabrication</h2>
                </div>
              </Link>

              <Link>
                <div className="box3">
                  <h2>Surface treatment</h2>
                </div>
              </Link>
              <Link>
                <div className="box4">
                  <h2>Application</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferButton;
