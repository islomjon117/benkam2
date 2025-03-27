import "../our_products/ourproducts.css";
import { FilterContext } from "../../context";

import { BsArrowDownRightCircle } from "react-icons/bs";

import bg1 from "../../assets/our_products_img/bg1.jpg";
import bg2 from "../../assets/our_products_img/bg3.jpg";
import bg3 from "../../assets/our_products_img/bg4.jpg";

import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Aos from "aos";

const OurProducts = () => {
  
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
    });
  }, []);

  const {content} = useContext(FilterContext);
  
  return (
    <>
      <div className="ourproducts">
        <div className="container">
          <div className="ourproducts_main">
            <div className="ourproducts_title" data-aos="fade-up">
              <h1>
               {content.our_product_title1} <span>{content.our_product_title2}</span>
              </h1>
            </div>
            <div className="responsive_carusel" data-aos="fade-up">
              <Swiper
                className="mySwiper"
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                
                breakpoints={{
                  320: { slidesPerView: 1.1, spaceBetween: 5 }, 
                  768: { slidesPerView: 2.2, spaceBetween: 15 }, 
                  1024: { slidesPerView: 3, spaceBetween: 20 }, 
                }}
              >
                {[bg3, bg3, bg2, bg1].map((bg, index) => (
                  <SwiperSlide key={index}>
                    <div className="box_1">
                      <div className="box_img">
                        <img src={bg} alt="" />
                      </div>
                      <div className="box_button">
                        <span>
                          <BsArrowDownRightCircle />
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
