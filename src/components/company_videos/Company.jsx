import { useState, useContext } from "react";
import "../company_videos/company.css";

import { BsPlayFill } from "react-icons/bs";
import { FilterContext } from "../../context";
import anodizationVideo from "../../assets/benkam_videos/anodization.mp4"; // ✅ Video faylni import qilish

const Company = () => {
  const { content } = useContext(FilterContext);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  return (
    <>
      <div className="company">
        <div className="container">
          <div className="company_main">
            <div className="company_vd_title">
              <h1>
                {content.company_videos.split(" ").slice(0, -3).join(" ")}{" "}
                <span className="last-words">
                  {content.company_videos.split(" ").slice(-3).join(" ")}
                </span>
              </h1>
            </div>
            <p className="play_btn_vd" onClick={() => setIsModalOpen(true)}>
              <BsPlayFill />
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal_content">
            <button className="close_btn" onClick={() => setIsModalOpen(false)}>
              ✖
            </button>
            <video controls autoPlay className="video_player">
              <source src={anodizationVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default Company;
