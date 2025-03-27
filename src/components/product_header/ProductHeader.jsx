import { Link } from "react-router-dom";
import "../product_header/productheader.css";

const ProductHeader = () => {
  return (
    <>
      <div className="productheader">
        <div className="container">
          <div className="productheader_main">
            <div className="pro_box">
              <Link>
                <div className="pro_box1">
                  <h2>Die Design Shop</h2>
                </div>
              </Link>

              <Link>
                <div className="pro_box2">
                  <h2>Production capacity</h2>
                </div>
              </Link>

              <Link>
                <div className="pro_box3">
                  <h2>Standards and alloys</h2>
                </div>
              </Link>
              <Link>
                <div className="pro_box4">
                  <h2>Packaging and logistics</h2>
                </div>
              </Link>
              <Link>
                <div className="pro_box4">
                  <h2>Equipment</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
