import React, { useContext } from "react";
import "../SomeProducts/someproducts.css";

import { GoArrowDownRight } from "react-icons/go";

import vd1 from "../../assets/products/1_profil.webm";
import vd2 from "../../assets/products/2_profil.webm";
import vd3 from "../../assets/products/3_profil.webm";
import { FilterContext } from "../../context";

const SomeProducts = () => {

  const {content} = useContext(FilterContext)

  return (
    <div className="someproducts">
      <div className="container">
        <div className="someproducts_main">
          <div className="someproducts_title">
            <h1>
              {content.our_product_title1} <span>{content.our_product_title2}</span>
            </h1>
          </div>
          <div className="products_big_box">
            <div className="for_border">
              <div className="product_box">
                <div className="product_box1">
                  <video className="products_video" autoPlay muted>
                    <source src={vd1} type="video/mp4" />
                  </video>
                </div>
                <div className="product_name">
                  <h2>{content.product_name}</h2>
                </div>
              </div>
            </div>

            <div className="for_border">
              <div className="product_box">
                <div className="product_box1">
                  <video className="products_video" autoPlay muted>
                    <source src={vd2} type="video/mp4" />
                  </video>
                </div>
                <div className="product_name">
                  <h2>{content.product_name}</h2>
                </div>
              </div>
            </div>
            
            <div className="for_border">
              <div className="product_box">
                <div className="product_box1">
                  <video className="products_video" autoPlay muted>
                    <source src={vd3} type="video/mp4" />
                  </video>
                </div>
                <div className="product_name">
                  <h2>{content.product_name}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="products_show_btn">
            <button className="show_btn2">
              {content.header_btn}
              <span className="show_btn">
                <GoArrowDownRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeProducts;
