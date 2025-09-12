import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="page active">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-12 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nossa História</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nascemos da paixão por tecnologia e design. Nossa missão é criar soluções digitais que sejam não apenas funcionais, mas também bonitas e fáceis de usar. Acreditamos que a simplicidade é a chave para a inovação.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Com uma equipe dedicada e focada na experiência do usuário, trabalhamos para transformar ideias em realidade, ajudando empresas e pessoas a alcançarem seus objetivos online.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img src="https://placehold.co/600x400/1e40af/ffffff?text=Equipe" alt="Imagem da Equipe" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
