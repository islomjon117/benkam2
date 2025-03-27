import "../sertifications/sertifications.css";
import { Link } from "react-router-dom";

import img1 from "../../assets/sertifications_img/img13.jpg";
import img2 from "../../assets/sertifications_img/img12.jpg";
import img3 from "../../assets/sertifications_img/img1.jpg";
import img4 from "../../assets/sertifications_img/img15.jpg";
import img5 from "../../assets/sertifications_img/img7.png";
import img6 from "../../assets/sertifications_img/img8.jpg";
import img7 from "../../assets/sertifications_img/img10.jpg";
import img8 from "../../assets/sertifications_img/img9.jpg";
import img9 from "../../assets/sertifications_img/img24.jpg";
import img10 from "../../assets/sertifications_img/img16.jpg";
import img11 from "../../assets/sertifications_img/img17.jpg";
import img12 from "../../assets/sertifications_img/img18.jpg";
import img13 from "../../assets/sertifications_img/img19.jpg";
import img14 from "../../assets/sertifications_img/img20.jpg";
import img15 from "../../assets/sertifications_img/img21.jpg";
import img16 from "../../assets/sertifications_img/img22.jpg";
import img17 from "../../assets/sertifications_img/img23.jpg";
import img18 from "../../assets/sertifications_img/img2.png";
import img19 from "../../assets/sertifications_img/img4.png";
import img20 from "../../assets/sertifications_img/img5.png";
import img21 from "../../assets/sertifications_img/verification.jpg";
import img22 from "../../assets/sertifications_img/im1.png";

const certifications = [
  {
    img: img3,
    title: "ISO 14001 / ISO 45001 / ISO 50001",
    desc: "Environmental / Occupational health and safety / Energy management systems.",
    to: "https://drive.google.com/file/d/1niRuwUZ92ZYwsOA1K5SxRuGoHNDcWTxZ/view?usp=sharing",
  },
  {
    img: img4,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/142S05GEjHMWvI4WzCN8qq485YBzL4Mwm/view?usp=sharing",
  },
  {
    img: img4,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1V7s_H7ST98j4yN1H5sd63JdDH6TBK-rZ/view?usp=sharing",
  },
  {
    img: img5,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1Dv7zCAAfCe9Cr4Y3WPG_mruLumpLXFjF/view?usp=sharing",
  },
  {
    img: img6,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/10qiXGIWGqyomL6M_z_sIFp2AgRWsNNyT/view?usp=sharing",
  },
  {
    img: img7,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1dItISUQrpRFWiLwwJkChs6PR2zUDwpzu/view?usp=sharing",
  },
  {
    img: img8,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/19RNvEeVY9PtWNakwHyRB5DYLX2_ja_v9/view?usp=sharing",
  },
  {
    img: img9,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1anSRvQXyZ9vtyk37Z0UCrJk8V-d_ksOB/view?usp=sharing",
  },
  {
    img: img10,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/12ivr3DvVxay-aariQ2xLWoR-uWHty0Eh/view?usp=sharing",
  },
  {
    img: img11,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1YQ64P7iW-5vmGVIGJAxuGKHecDsNKsZu/view?usp=sharing",
  },
  {
    img: img21,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1pLCWpvrpaJYLKO1cC3LBZqbD82vmIEji/view?usp=sharing",
  },
  {
    img: img12,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
  },
  {
    img: img13,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1IrSSzhSVE_V_qYeikiFFtw7WipSJ8Uhw/view?usp=sharing",
  },
  {
    img: img14,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1ZV7yiED51HkUa4Jq3rYDg9eo0_0Og6tX/view?usp=sharing",
  },
  {
    img: img15,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/15JV1hBFUUhogHJIXxg-KPmaN5V3_lny-/view?usp=sharing",
  },
  {
    img: img16,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1XLqnZziiYLFKq5xWgdPX9qEXk20COrN6/view?usp=sharing",
  },
  {
    img: img17,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1pyqYrnL8PrOa2YTOEKQAU6iC6BALZZR1/view?usp=sharing",
  },
  {
    img: img18,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/1IWoLdkwglcL10m116QaHBrKmKtUGRT0o/view?usp=sharing",
  },
  {
    img: img20,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/18V27aB6kfhszyTN7B_foCTLgL4kgkX3h/view?usp=sharing",
  },
  {
    img: img22,
    title: "ISO 17020",
    desc: "Requirements for the work of various types of inspection bodies.",
    to: "https://drive.google.com/file/d/19F_OErpD90HJMZAMAfRApo0RMVC7KjUD/view?usp=sharing",
  },
];

const Sertifications = () => {
  return (
    <div className="sertifications">
      <div className="container">
        <div className="sertifications_main">
          <div className="sertifications_box1">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="sertification_box1"
                onClick={() => cert.to && window.open(cert.to, "_blank")}
              >
                <img src={cert.img} alt={cert.title} />
                <h1>{cert.title}</h1>
                <p>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertifications;
