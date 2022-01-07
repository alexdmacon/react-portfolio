import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Header from "./Header";
import Footer from "./Footer";
import Resume from "./pages/Resume"

const PortfolioContainer = () => {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Header, which contains the Navigation, will render on every page */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="h-100 d-flex justify-content-center align-items-center">
      {/* Page selected on navbar will render here conditionally, default state to home page  */}
      {renderPage()}
      </main>
      {/* Footer will render on every page */}
      <Footer / >
    </div>
  );

};

export default PortfolioContainer;
