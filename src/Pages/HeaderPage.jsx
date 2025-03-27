import React from "react";
import Header from "../components/header/Header";
import HomeAbout from "../components/home_about/HomeAbout";
import SomeProducts from "../components/SomeProducts/SomeProducts";
import Book from "../components/book_page/Book";
import Carusel from "../components/carusel/Carusel";
import OurProducts from "../components/our_products/OurProducts";
import ProductProcess from "../components/product_prosses/ProductProcess";
import Company from "../components/company_videos/Company";
import OurBlog from "../components/ourblog/OurBlog";
import Partners from "../components/partners/Partners";
import Contact2 from "../components/contact_2/Contact2";

const HeaderPage = () => {
  return (
    <div>
      <Header />
      <HomeAbout/>
      <SomeProducts/>
      <Book/>
      <Carusel/>
      <OurProducts/>
      <ProductProcess/>
      <Company/>
      <OurBlog/>
      <Partners/>
      <Contact2/>
    </div>
  );
};

export default HeaderPage;
