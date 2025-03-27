import React, { useContext } from "react";
import "../header/header.css";

import bg from "../../assets/header_bg/header_bg.mp4";
import { Link } from "react-router-dom";
import { FilterContext } from "../../context";

const Header = () => {
  const { content } = useContext(FilterContext);

  return (
    <div className="header">
      <video autoPlay muted loop>
        <source src={bg} type="video/mp4" />
      </video>

      <div className="container">
        <div className="header_main">
          <div className="divvvv">
            <button className="header_btn">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://akfagroup.com/benkam/"
              >
                360° {content.header_title}
                <span style={{ color: "white", marginLeft: "10px" }}>
                  BENKAM
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
