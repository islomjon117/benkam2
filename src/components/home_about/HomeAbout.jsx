import React, { useState, useContext } from "react";
import { FilterContext } from "../../context";
import "../home_about/homeabout.css";

import img1 from "../../assets/homeabout_img/img1.jpg";
import { GoArrowDownRight } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";

const HomeAbout = () => {
  const { content } = useContext(FilterContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/yExLSN8iUD8";

  return (
    <div className="homeabout">
      <div className="container">
        <div className="homeabout_main">
          <div className="homeabout_right">
            <h1 className="homeabout_title">BENKAM</h1>
            <h2 className="homeabout_subtitle">{content.header_title2}</h2>
            <p className="about_text">{content.header_info}</p>

            <div className="homeabout_btn">
              <button className="btn">
                {content.header_btn}
                <span className="icon">
                  <GoArrowDownRight />
                </span>
              </button>
            </div>
          </div>

          <div className="homeabout_left">
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
