// src/pages/Home.tsx
import React from "react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="page w-full text-center py-16 sm:py-24 md:py-32 relative overflow-hidden rounded-xl"
    >
      {/* Imagem de fundo decorativa */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90 -z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage:
            "url('https://placehold.co/1920x1080/4F46E5/ffffff?text=Background+Image')",
        }}
      ></div>

      <div className="relative bg-white bg-opacity-95 rounded-2xl shadow-2xl p-6 sm:p-12 md:p-16 max-w-4xl mx-auto transform hover:scale-102 transition-transform duration-500 ease-in-out backdrop-filter backdrop-blur-sm">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-slide-in-top">
          Descubra o Futuro Digital Conosco!
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto animate-fade-in delay-200">
          Soluções inovadoras, design intuitivo e uma experiência de usuário
          inesquecível.
        </p>
        <button
          onClick={() => onNavigate("about")}
          className="bg-blue-700 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-lg inline-block text-xl transform hover:-translate-y-1 animate-bounce-once"
          aria-label="Saiba Mais Sobre Nós"
        >
          Explore Nossos Serviços
        </button>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center text-gray-700">
            <svg
              className="w-12 h-12 mb-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="text-sm font-medium">Design Moderno</span>
          </div>
          <div className="flex flex-col items-center text-gray-700">
            <svg
              className="w-12 h-12 mb-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4-4m4 4l-4-4m4 4v1h-4"
              ></path>
            </svg>
            <span className="text-sm font-medium">Código Otimizado</span>
          </div>
          <div className="flex flex-col items-center text-gray-700">
            <svg
              className="w-12 h-12 mb-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 6m-2 4a2 2 0 11-4 0 2 2 0 014 0zM17 14v2m-4-2h4m-4 6H4v1h4m-4 0H4v1h4M5 19h10a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="text-sm font-medium">Suporte Dedicado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
