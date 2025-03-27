import { useContext, useState, useEffect } from "react";
import { FilterContext } from "../../context";
import { Link, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

import logo from "../../assets/logo/logo.png";

import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { selectedLang, setSelectedLang, setLanguage, content, sidebarRef } =
    useContext(FilterContext);

  const [active, setActive] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown holati

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang) => {
    const languageMap = {
      gb: "gb",
      "🇺🇿": "uz",
      ру: "ru",
      en: "eng",
      tr: "tr",
    };

    setSelectedLang(lang);
    setLanguage(languageMap[lang] || "uz");
  };

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar_main">
          {/* Logo */}
          <div className="nav_logo">
            <RouterLink to="/">
              <img src={logo} alt="Logo" />
            </RouterLink>
          </div>

          {/* Sidebar menyu */}
          <div className={active? "nav_main_links active" : "nav_main_links nav_links"}>
              <RouterLink to="/about" onClick={() => setIsSidebarOpen(false)}>
                {content.nav_link1 || "About Us"}
              </RouterLink>

              <div
                className="dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <RouterLink to="/offer" onClick={() => setIsSidebarOpen(false)}>
                  {content.nav_link2 || "Offer"}
                </RouterLink>
                <div
                  className={`dropdown_menu ${isDropdownOpen ? "open" : ""}`}
                >
                  <div
                    className="aluminium-dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <RouterLink
                      to="offer/Aluminium-profiles"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      Aluminium profiles
                    </RouterLink>

                    <div className="aluminium-menu">
                      <RouterLink
                        to="offer/option1"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Standard
                      </RouterLink>
                      <RouterLink
                        to="offer/option2"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Special
                      </RouterLink>
                    </div>
                  </div>

                  <div
                    className="aluminium-dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <ScrollLink
                      to="fabrication"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      onClick={() => setIsSidebarOpen(false)}
                      style={{ cursor: "pointer" }}
                    >
                      Fabrication
                    </ScrollLink>

                    <div className="aluminium-menu">
                      <RouterLink
                        to="offer/option1"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Mechanical treatment
                      </RouterLink>
                      <RouterLink
                        to="offer/option2"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Thermal breaks
                      </RouterLink>
                    </div>
                  </div>

                  <div
                    className="aluminium-dropdown"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <ScrollLink
                      to="Surface_treatment"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      onClick={() => setIsSidebarOpen(false)}
                      style={{ cursor: "pointer" }}
                    >
                      Surface treatment
                    </ScrollLink>

                    <div className="aluminium-menu">
                      <RouterLink
                        to="offer/option1"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Powder coating
                      </RouterLink>
                      <RouterLink
                        to="offer/option2"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Anodizing
                      </RouterLink>
                      <RouterLink
                        to="offer/option2"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Decor
                      </RouterLink>
                      <RouterLink
                        to="offer/option2"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Brushing
                      </RouterLink>
                    </div>
                  </div>

                  <ScrollLink
                    to="aplications"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setIsSidebarOpen(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Application
                  </ScrollLink>

                  <ScrollLink
                    to="infrastructure"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setIsSidebarOpen(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Infrastructure
                  </ScrollLink>

                  <ScrollLink
                    to="Individual_extrusion_solutions"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setIsSidebarOpen(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Individual extrusion solutions
                  </ScrollLink>
                </div>
              </div>

              {/* Production bo'limi dropdown bilan */}
              <div
                className="dropdown"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <RouterLink to="/products" className="dropdown_link">
                  {content.nav_link3 || "Production"}
                </RouterLink>
                <div
                  className={`dropdown_menu ${isDropdownOpen ? "open" : ""}`}
                >
                  <RouterLink
                    to="products/die-design-shop"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Die Design Shop
                  </RouterLink>

                  <ScrollLink
                    to="Production_capacity"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setIsSidebarOpen(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Production capacity
                  </ScrollLink>

                  <ScrollLink
                    to="standarts"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setIsSidebarOpen(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Standards and alloys
                  </ScrollLink>

                  <ScrollLink
                    to="equipment"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setIsSidebarOpen(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Equipment
                  </ScrollLink>

                  <ScrollLink
                    to="packaging"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => setIsSidebarOpen(false)}
                    style={{ cursor: "pointer" }}
                  >
                    Packaging and logistics
                  </ScrollLink>

                  <RouterLink
                    to="/products/greenEx"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Green-ex
                  </RouterLink>
                </div>
              </div>

              <RouterLink
                to="/sertifications"
                onClick={() => setIsSidebarOpen(false)}
              >
                {content.nav_link4 || "Certificates"}
              </RouterLink>

              <ScrollLink
                to="book"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setIsSidebarOpen(false)}
                style={{ cursor: "pointer" }}
              >
                {content.nav_link5 || "Contacts"}
              </ScrollLink>

              <RouterLink to="/usa" onClick={() => setIsSidebarOpen(false)}>
                {content.nav_link6 || "USA"}
              </RouterLink>

              <div className="nav_lang_btn">
            <div className="selected_lang">{selectedLang}</div>
            <div className="lang_dropdown">
              {["🇺🇿", "ру", "en", "tr"].map((lang) => (
                <div
                  key={lang}
                  className="lang_option"
                  onClick={() => handleLanguageChange(lang)}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>


          </div>

         
          {/* sidebar start */}
          <div
            className="navbar_main_menu_and_close open1"
            onClick={() => setActive(!active)}
          >
            {active ? (
              <IoCloseSharp className="navbar_main_icon navbar_main_close" />
            ) : (
              <FaBars className="navbar_main_menu navbar_main_icon" />
            )}
          </div>
          {/* sidebar start end*/}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
