import { useState } from "react";
import "../drop_down/dropdown.css";


import img1 from "../../assets/ddshop/img10.png";
import img2 from "../../assets/our_products_img/bg4.jpg";
import img3 from "../../assets/our_products_img/bg3.jpg";
import img4 from "../../assets/our_products_img/bg2.jpg";


import { GoArrowDownRight } from "react-icons/go";

const dropdownItems = [
  {
    title: "ALLOY 6005A",
    text: "This alloy is used for building structures and is used only for extruded profiles. It has a fairly high strength and, at the same time, can be pressed into more complex profiles than 6082 and 6061 alloys. Special advantage is in pressing thin-walled hollow profiles.",
    image: img1,
  },
  {
    title: "ALLOY 6060",
    text: "The alloy with the highest compressibility (easy pressing) and the lowest sensitivity to hardening is the European aluminum alloy 6060 due to the lowest concentration of alloying elements. Typical applications: windows, stairs, handrails, truck body parts.",
    image: img2,
  },
  {
    title: "ALLOY 6063",
    text: "Alloy 6063 has a finer grain structure than the 6060, provides a better cosmetic appearance after anodizing. It has high corrosion resistance and good workability and weldability. Common use includes a cylinder tube, electrical bus conductors and architectural applications.",
    image: img3,
  },
  {
    title: "ALLOY 6082",
    text: "Aluminum alloy 6082 is most widely used in construction. Usually, this alloy is the main building aluminum alloy for both welded structures and structures without the use of welding. Alloy 6082 is a high-strength alloy, which is used in various types of aluminum rolled products.",
    image: img4,
  },
];

const Dropdown = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="alloy-6005a_dropdown">
      <div className="container">
        {dropdownItems.map((item, index) => (
          <div
            key={index}
            className={`alloy-6005a_drop_down_box1 ${openIndex === index ? "open" : ""}`}
          >
            <div className="alloy-6005a_dropdown_left">
              <h1 onClick={() => setOpenIndex(openIndex === index ? null : index)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {item.title} 
                <span className={`dropdownarrow ${openIndex === index ? "rotate" : ""}`}>
                  <GoArrowDownRight />
                </span>
              </h1>
            </div>
            <div className="alloy-6005a_dropdown_right">
              <p>{item.text}</p>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
