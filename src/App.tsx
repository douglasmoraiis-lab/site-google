import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";  
import ReactGA from "react-ga4";

const App: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize("G-1XH6ZKX6E3");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "App.jsx",
    });
  }, []);

  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow container mx-auto p-4 sm:p-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
