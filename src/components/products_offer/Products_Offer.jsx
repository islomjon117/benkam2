import "../products_offer/products_offer.css";

import img1 from "../../assets/ddshop/img1.png";

const Products_Offer = () => {
  return (
    <>
      <div className="product_offer">
        <div className="container">
          <div className="productr_offer-main">
            <div className="product_offer_title">
              <h1>
                matrix <span>diameter</span>
              </h1>
              <p>
                Profiles are available for various types and sectors of use made
                <br />
                from different high quality alloys with optimal properties.
              </p>
            </div>

            <div className="matrix_img">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products_Offer;
