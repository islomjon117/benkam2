import React from "react";
import Usa from "../components/usapage/Usa";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import UsaAbout from "../components/usa_about/UsaAbout";
import Book from "../components/book_page/Book";

const UsaPage = () => {
  return (
    <>
      <Usa />
      <UsaAbout/>
      <Book/>
    </>
  );
};

export default UsaPage;
