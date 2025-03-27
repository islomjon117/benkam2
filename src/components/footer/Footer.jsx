import { Link } from "react-router-dom";
import "../footer/footer.css";
import { FilterContext } from "../../context";

import { MdOutlineWhatsapp } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

import logo2 from "../../assets/logo/logo.png";
import { useContext, useEffect } from "react";
import Aos from "aos";

function Footer() {
  const { content } = useContext(FilterContext);

  useEffect(() => {
    Aos.init({
      duration: 2000, // Animatsiya davomiyligi (ms)
    });
  }, []);

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_main">

            <div className="footer_first_column" data-aos="fade-up">
              <div className="footer_logo">
                <Link>
                  <img src={logo2} alt="" />
                </Link>
                <p className="footer_txt">
                  Lorem ipsum dolor sit, amet consectetur <br /> adipisicing
                  elit. In odit
                </p>
                <div className="social_media">
                  <Link>
                    <div className="whatsapp_icon">
                      <MdOutlineWhatsapp />
                    </div>
                  </Link>
                  <Link>
                    <div className="youtube_icon">
                      <FiYoutube />
                    </div>
                  </Link>
                  <Link>
                    <div className="facebook_icon">
                      <FaFacebook />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer_second_column" data-aos="fade-down">
              <Link>
                <h1 className="footerfourth_title">{content.footer_about}</h1>
              </Link>
              <Link rel="stylesheet" href="">
                {content.footer_link1}
              </Link>
              <Link rel="stylesheet" href="">
                {content.footer_link2}
              </Link>
              <Link rel="stylesheet" href="">
                {content.footer_link3}
              </Link>
              <Link rel="stylesheet" href="">
                {content.footer_link4}
              </Link>
            </div>

            <div className="footer_third_column" data-aos="fade-up">
              <Link>
                <h1 className="footerfourth_title">{content.footer_offer}</h1>
              </Link>
              <Link>{content.footer_link5}</Link>
              <Link>{content.footer_link6}</Link>
              <Link>{content.footer_link7}</Link>
              <Link>{content.footer_link8}</Link>
              <Link>{content.footer_link9}</Link>
            </div>

            <div className="footer_fourth_column" data-aos="fade-down">
              <Link>
                <h1 className="footerfourth_title">{content.footer_production}</h1>
              </Link>
              <Link>{content.footer_link10}</Link>
              <Link>{content.footer_link11}</Link>
              <Link>{content.footer_link12}</Link>
              <Link>{content.footer_link13}</Link>
              <Link>{content.footer_link14}</Link>
              <Link>{content.footer_link15}</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
