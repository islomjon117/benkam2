import { createContext, useState, useRef, useEffect } from "react";
import Translation from "../Lang/language.json";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLang, setSelectedLang] = useState(localStorage.getItem("selectedLanguage") || "en");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [language, setLanguage] = useState(selectedLang);
  const [content, setContent] = useState(Translation[selectedLang] || {});
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);



  // **Sahifa skroll qilinsa navbar o'zgarishini tekshirish**
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // **Sidebar tashqarisiga bosilganda uni yopish**
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isSidebarOpen]);

  // **Til o‘zgarganda tarjima ma'lumotlarini yangilash**
  useEffect(() => {
    if (Translation[language]) {
      setContent(Translation[language]);
      localStorage.setItem("selectedLanguage", language);
    } else {
      setContent(Translation["en"]);
    }
  }, [language]);


  const handleChange = (value, country) => {
    setPhone(value);
    const regex = new RegExp("^" + country.format.replace(/\D/g, "\\d") + "$");
    setIsValid(regex.test(value));
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        isScrolled,
        setIsScrolled, 
        selectedLang,
        setSelectedLang,
        isSidebarOpen,
        setIsSidebarOpen,
        sidebarRef,
        language,
        setLanguage,
        content,
        setContent,
        phone,
        setPhone,
        isValid,
        setIsValid,
        handleChange
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
