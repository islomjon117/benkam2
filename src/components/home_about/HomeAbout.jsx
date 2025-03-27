import React, { useState, useContext, useEffect } from "react";
import { FilterContext } from "../../context";
import "../home_about/homeabout.css";

import img1 from "../../assets/homeabout_img/img1.jpg";
import { GoArrowDownRight } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";

import Aos from "aos";
import "aos/dist/aos.css";

const HomeAbout = () => {

  const { content } = useContext(FilterContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/yExLSN8iUD8";

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
    });
  }, []);


  return (
    <div className="homeabout">
      <div className="container">
        <div className="homeabout_main">
          <div className="homeabout_right">
            <h1 className="homeabout_title" data-aos="fade-up">BENKAM</h1>
            <h2 className="homeabout_subtitle" data-aos="fade-up">{content.header_title2}</h2>
            <p className="about_text" data-aos="fade-up">{content.header_info}</p>

            <div className="homeabout_btn" >
              <button className="btn" data-aos="fade-up">
                {content.header_btn}
                <span className="icon">
                  <GoArrowDownRight />
                </span>
              </button>
            </div>
          </div>

          <div className="homeabout_left" data-aos="flip-right">
            <img src={img1} alt="" />
            <div className="video_play_button" onClick={() => setIsModalOpen(true)}>
              <p>
                <IoPlayCircleOutline size={50} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal_overlay" onClick={() => setIsModalOpen(false)}></div>
          <div className="modal_content">
            <button className="close_btn" onClick={() => setIsModalOpen(false)}>
              ✖
            </button>
            <iframe
              src={videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeAbout;
