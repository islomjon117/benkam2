import "../product_prosses/productprocess.css";
import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FilterContext } from "../../context";

const ProductProcess = () => {
  const{content} = useContext(FilterContext)
  return (
    <>
      <div className="productprocess">
        <div className="container">
          <div className="productprocess_main">
            <div className="productprocess_title">
            <h1>
  {content.product_protsses.split(" ").slice(0, -1).join(" ")}{" "}
  <span className="last-word">{content.product_protsses.split(" ").pop()}</span>
</h1>

            </div>

            <div className="productprocess_box">
              <Swiper
                className="mySwiper"
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  320: { slidesPerView: 1.1, spaceBetween: 20 },
                  768: { slidesPerView: 2.2, spaceBetween: 15 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
              >
                
                  <SwiperSlide>
                    <div className="productprocess_box13">
                      <div className="productprocess_box1">
                        <div className="process_info">
                          <div className="box_title">Lorem ipsum</div>
                          <div className="box_comment">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nam neque atque soluta perferendis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="box_number">
                        <span>01.</span>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="productprocess_box13">
                      <div className="productprocess_box1">
                        <div className="process_info">
                          <div className="box_title">Lorem ipsum</div>
                          <div className="box_comment">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nam neque atque soluta perferendis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="box_number">
                        <span>01.</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className="productprocess_box13">
                      <div className="productprocess_box1">
                        <div className="process_info">
                          <div className="box_title">Lorem ipsum</div>
                          <div className="box_comment">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nam neque atque soluta perferendis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="box_number">
                        <span>01.</span>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="productprocess_box13">
                      <div className="productprocess_box1">
                        <div className="process_info">
                          <div className="box_title">Lorem ipsum</div>
                          <div className="box_comment">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nam neque atque soluta perferendis
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="box_number">
                        <span>01.</span>
                      </div>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductProcess;
