import React from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center flex-wrap">
        <h1 className="text-2xl font-bold text-gray-900">Meu Site</h1>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {['home', 'about', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => onNavigate(page)}
              className={`nav-link text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
                currentPage === page ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {page === 'home' ? 'Início' : page === 'about' ? 'Sobre Nós' : 'Contato'}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
