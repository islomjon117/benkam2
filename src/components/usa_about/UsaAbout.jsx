import { Link } from "react-router-dom";
import "../usa_about/usaabout.css";
import { LuDownload } from "react-icons/lu";

const UsaAbout = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/path/to/your-file.pdf"; // Fayl yo‘lini shu yerga qo‘ying
    link.download = "usa_about.pdf"; // Yuklanadigan fayl nomi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="usaabout">
        <div className="container">
          <div className="usaabout_main">
            <p>
              We are constantly moving forward, striving for new countries and
              horizons. And we are proud to announce the opening of our new
              office in the USA! This step will bring us even closer to you, our
              clients, and expand our capabilities in the field of aluminum
              solutions. Regardless of your needs, we are ready to meet them.
              Our team specializes in aluminum requests of any scale - from
              individual projects to large enterprises. We offer high-quality
              products and services that will help you achieve your goals.
            </p>
          </div>
          <div className="usa_info_download">
            <Link target="_blank" to='https://drive.google.com/file/d/12O1Dc_vWfun4_RJ5xzYgs57W9zPa-aTc/view?usp=sharing'>
              <button onClick={handleDownload}>
                <LuDownload />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsaAbout;
