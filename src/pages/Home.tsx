import React from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="page active">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Bem-vindo(a) ao Meu Site!
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Este é um exemplo de site completo de 3 páginas, totalmente responsivo e construído com HTML, CSS (Tailwind) e JavaScript. Explore as outras páginas para saber mais!
        </p>
        <button
          onClick={() => onNavigate('about')}
          className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md inline-block"
        >
          Saiba Mais Sobre Nós
        </button>
      </div>
    </section>
  );
};

export default Home;
