import "../ddshop_info/ddshop_info.css"; // CSS faylini import qilish
import img1 from "../../assets/ddshop/img7.jpg"; // Rasmni import qilish
import videoSrc from '../../assets/header_bg/header_bg.mp4'; // Video faylini import qilish

const Ddshop_info = () => {
  return (
    <div className="ddshop_info" id="Production_capacity">
      <div className="container">
        <div className="ddshop_info_main">
          <div className="ddshop_box1">
            <div className="ddshop_left">
              <p>
                High quality aluminum extrusion dies are designed and produced
                by Benkam for the aluminum industries. We have been providing
                services to a broad range of industries around the world,
                including the automotive, transportation, railroad, building
                and construction, and aerospace sectors.
              </p>
              <p>
                Our creative team of engineers and experts creates top-notch
                custom dies with sizes ranging from 130 mm (5") to 600 mm
                (11"). Our skilled engineers are capable of creating the
                appropriate die for the needed shape, regardless of how
                complex the profile is. You can produce high-quality profiles
                at a reasonable cost with the help of our aluminum extrusion
                dies.
              </p>
            </div>
            <div className="ddshop_right">
              {/* Rasmni ko'rsatish */}
              <img src={img1} alt="Aluminum extrusion" />
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div className="ddshop_box1">
            <div className="ddshop_right">
              <video
                width="100%"
                height="auto"
                autoPlay
                muted
                loop
                style={{ pointerEvents: "none" }} 
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>

            <div className="ddshop_left">
              <h1>
                Production <span>capacity</span>
              </h1>
              <p>
                Starting work on your project, we are thinking over every
                little thing. We will study the project, help you find the
                right alloy for you and find the best possible solution for
                you.
              </p>
              <p>
                We will also help with the logistics of your project, such as
                packing, distribution and delivery of finished profiles.
              </p>
              <button>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ddshop_info;
 