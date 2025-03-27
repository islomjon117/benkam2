import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
