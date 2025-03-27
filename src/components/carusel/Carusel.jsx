// import css
import "../carusel/carusel.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FilterContext } from "../../context";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets/carusel_img/bg1.jpg";
import img3 from "../../assets/carusel_img/bg3.jpg";
import img4 from "../../assets/carusel_img/bg4.jpg";
import img5 from "../../assets/carusel_img/bg5.jpg";
import { useContext } from "react";

export default function App() {

  const{content} = useContext(FilterContext)

  return (
    <>
      <div className="carusel">
        <div className="container">
          <div className="carusel_main">
            <div className="carusel_title">
              <h1>
                {content.our_ompany}
              </h1>
            </div>
          </div>
        </div>
        <div className="carusel_box">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true} // Cheksiz aylanish
            autoplay={{
              delay: 3000, // 3 soniyada avtomatik o'tish
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Autoplay]}
            dir="rtl"
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" className="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" className="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" className="carousel-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" className="carousel-img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
