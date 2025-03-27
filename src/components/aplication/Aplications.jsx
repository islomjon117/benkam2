import "../aplication/aplications.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

import img1 from "../../assets/aplications/img1.png";
import img2 from "../../assets/aplications/img2.png";
import img3 from "../../assets/aplications/img3.png";
import img4 from "../../assets/aplications/img4.png";
import img5 from "../../assets/aplications/img5.png";
import img6 from "../../assets/aplications/img6.png";
import img7 from "../../assets/aplications/img7.png";

const slideData = [
  {
    img: img1,
    title: "Buildings",
    description1: "Modern cities cannot be imagined without aluminium. Pedestrian, facade, window and sliding systems, formwork, scaffolding and everything you need to implement any innovative construction plans are built from it.",
  },
  {
    img: img5,
    title: "Furniture industry",
    description1: "With the development of technology, interior design is also developing, one of the most popular ways of manufacturing facades for kitchen, office furniture and home furniture is aluminium frame profiles.",
  },
  {
    img: img6,
    title: "Structural systems",
    description1: "The advantages of using a structural profile allow it to be used to implement almost any task: from the installation of production fences to the manufacture of a working machine.",
  },
  {
    img: img7,
    title: "Interior & Design",
    description1: "The facades are assembled on the basis of an aluminium frame profile, ideally combined with furniture acrylic, glass, MDF or laminated chipboard (LPB - Laminated particle board).",
  },
  {
    img: img3,
    title: "Infrastructure",
    description1: "Aluminium profile systems - a universal solution for any architectural task. Thanks to modern technologies of painting and anodizing, the quality of the coating of aluminium profiles",
  },
  {
    img: img4,
    title: "Power Engineering",
    description1: "The energy and development of research in the use of solar energy opens up new horizons and the most basic in the production of photovoltaic systems, structures and components of wind turbines, concentrated",
  },
  {
    img: img2,
    title: "Transport",
    description1: "Owing to its lightness and strength aluminium alloys have become widespread in the motor industry, replacing in some cases iron and steel.",
  },
];

const Aplications = () => {
  return (
    <div className="aplications" id="aplications">
      <div className="container">
      <div className="aplications_main">

        <Swiper
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index} className="application-swiper-slide">
              <div className="aplications_img">
                <img src={slide.img} alt={slide.title} />
              </div>
              <div className="aplications_box_title">
                <h1>{slide.title}</h1>
              </div>
              <div className="aplications_info">
                <p>{slide.description1}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </div>
  );
};

export default Aplications;
