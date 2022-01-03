import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Header from "./Header";
import Footer from "./Footer";

const PortfolioContainer = () => {
  return (
    <div>

      {/* Header, which contains the NavTabs, will render on every page */}
      <Header />


      {/* Footer will render on every page */}
      <Footer / >
    </div>
  );
};

export default PortfolioContainer;
