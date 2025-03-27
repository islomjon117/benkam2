import "../ourblog/ourblog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FilterContext } from "../../context";

import { MdArrowOutward } from "react-icons/md";

import img1 from "../../assets/ourblog_img/img1.jpg";
import { useContext } from "react";

const OurBlog = () => {
  const { content } = useContext(FilterContext);

  return (
    <>
      <div className="ourblog">
        <div className="container">
          <div className="ourblog_main">
            <div className="ourblog_title">
              <h1>
                {content.last_news.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="last-word">
                  {content.last_news.split(" ").pop()}
                </span>
              </h1>

              <br />
              <br />
            </div>

            <div className="our_blog_carusel">
              <Swiper
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="mySwiper"
                slidesPerView={3} // Default (katta ekranlar uchun)
                spaceBetween={20}
                breakpoints={{
                  1024: { slidesPerView: 3, spaceBetween: 20 }, // Katta ekranlar
                  768: { slidesPerView: 2, spaceBetween: 15 }, // Planshetlar
                  0: { slidesPerView: 1.2, spaceBetween: 10 }, // Har qanday kichik ekranlar uchun 1 tadan
                }}
              >
                <SwiperSlide>
                  <img src={img1} alt="News" className="blog-img" />
                  <div className="button_carusel">
                    <p>
                      <span className="mont_num">23</span>
                      <span className="month">Apr</span>
                      <span className="button_carusel_arrow">
                        <MdArrowOutward />
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img1} alt="News" className="blog-img" />
                  <div className="button_carusel">
                    <p>
                      <span className="mont_num">23</span>
                      <span className="month">Apr</span>
                      <span className="button_carusel_arrow">
                        <MdArrowOutward />
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img1} alt="News" className="blog-img" />
                  <div className="button_carusel">
                    <p>
                      <span className="mont_num">23</span>
                      <span className="month">Apr</span>
                      <span className="button_carusel_arrow">
                        <MdArrowOutward />
                      </span>
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img1} alt="News" className="blog-img" />
                  <div className="button_carusel">
                    <p>
                      <span className="mont_num">23</span>
                      <span className="month">Apr</span>
                      <span className="button_carusel_arrow">
                        <MdArrowOutward />
                      </span>
                    </p>
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

export default OurBlog;
