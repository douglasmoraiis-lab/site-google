// src/App.tsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReactGA from "react-ga4";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Inicializa o GA4 uma única vez
  useEffect(() => {
    ReactGA.initialize("G-7L9YBNB1J3");
  }, []);

  // Dispara pageview sempre que currentPage mudar
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `/${currentPage}`,
      title: currentPage,
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={() => {}} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={function (): void {
          throw new Error("Function not implemented.");
        } } />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
