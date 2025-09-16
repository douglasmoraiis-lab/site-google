// src/components/Navbar.tsx
import React, { useState } from "react";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Sobre", id: "about" },
    { name: "Contato", id: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">MeuSite</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-6 ${
            isOpen
              ? "block absolute top-full left-0 w-full bg-white shadow-lg py-4 transition-all duration-300 ease-in-out"
              : "hidden"
          } md:static md:shadow-none md:py-0`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className={
                isOpen
                  ? "text-center py-2 border-b border-gray-100 last:border-b-0"
                  : ""
              }
            >
              <button
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`text-lg font-medium px-3 py-2 rounded-md transition-colors duration-300
                  ${
                    currentPage === item.id
                      ? "text-blue-700 bg-blue-100"
                      : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                  }
                `}
                aria-current={currentPage === item.id ? "page" : undefined}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
