import { useState } from "react";
import "../dropdown_offer3/dropdownOffer3.css";

import { GoArrowDownRight } from "react-icons/go";

const dropdownItems = [
  {
    title: "Vertical powder painting",
    text: "This alloy is used for building structures and is used only for extruded profiles. It has a fairly high strength and, at the same time, can be pressed into more complex profiles than 6082 and 6061 alloys. Special advantage is in pressing thin-walled hollow profiles.",
  },
  {
    title: "Anodizing",
    text: "The alloy with the highest compressibility (easy pressing) and the lowest sensitivity to hardening is the European aluminum alloy 6060 due to the lowest concentration of alloying elements. Typical applications: windows, stairs, handrails, truck body parts.",
  },
  {
    title: "Decor",
    text: "The alloy with the highest compressibility (easy pressing) and the lowest sensitivity to hardening is the European aluminum alloy 6060 due to the lowest concentration of alloying elements. Typical applications: windows, stairs, handrails, truck body parts.",
  },
  {
    title: "Brushing",
    text: "The alloy with the highest compressibility (easy pressing) and the lowest sensitivity to hardening is the European aluminum alloy 6060 due to the lowest concentration of alloying elements. Typical applications: windows, stairs, handrails, truck body parts.",
  },
];

const DropdownOffer3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="offer_dropdown">
      <div className="container">
        {dropdownItems.map((item, index) => (
          <div
            key={index}
            className={`offer_drop_down_box1 ${openIndex === index ? "open" : ""}`}
          >
            <div className="offer_dropdown_left">
              <h1 
                onClick={() => setOpenIndex(openIndex === index ? null : index)} 
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                {item.title} 
                <span className={`offer_dropdownarrow ${openIndex === index ? "rotate" : ""}`}>
                  <GoArrowDownRight />
                </span>
              </h1>
            </div>
            <div className="offer_dropdown_right">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownOffer3;