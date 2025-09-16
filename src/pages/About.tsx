// src/pages/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="page w-full py-12 sm:py-16">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-12 md:p-16 max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center leading-tight">
          Quem Somos e o Que Nos Move
        </h2>

        {/* Seção Nossa História */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
              Nossa História
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nascemos da paixão por tecnologia e design. Nossa missão é criar
              soluções digitais que sejam não apenas funcionais, mas também
              bonitas e fáceis de usar. Acreditamos que a simplicidade é a chave
              para a inovação.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com uma equipe dedicada e focada na experiência do usuário,
              trabalhamos incansavelmente para transformar ideias em realidade,
              ajudando empresas e pessoas a alcançarem seus objetivos online.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://placehold.co/600x400/1e40af/ffffff?text=Nossa+Jornada"
              alt="Imagem da equipe trabalhando"
              className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Seção Nossos Valores */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16 shadow-inner animate-slide-in-bottom">
          <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Nossos Valores Fundamentais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m-1 6.364l.707-.707M6 10v3m0-3V7a4 4 0 018 0v3m0 0v3m0-3h-4m-4 0h4m-9-1h10a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2z"
                ></path>
              </svg>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Inovação
              </h4>
              <p className="text-gray-600">
                Buscamos constantemente novas formas de resolver problemas e
                criar valor.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4h-.025A6 6 0 004 12a8 8 0 008 8 8 8 0 008-8 6 6 0 00-7.975-4z"
                ></path>
              </svg>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Qualidade
              </h4>
              <p className="text-gray-600">
                Comprometimento com a excelência em cada detalhe do nosso
                trabalho.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 text-blue-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2C4.201 18.273 6.55 17 9 17h1a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0l3 3m-3-3l-3 3m12 0v6H5"
                ></path>
              </svg>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Colaboração
              </h4>
              <p className="text-gray-600">
                Trabalhamos juntos, valorizando a contribuição de cada membro da
                equipe.
              </p>
            </div>
          </div>
        </div>

        {/* Seção Equipe */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-200 pb-4 inline-block">
            Conheça Nossa Equipe
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exemplo de Membro da Equipe 1 */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <img
                src="https://placehold.co/150x150/60a5fa/ffffff?text=Jane+Doe"
                alt="Foto de Jane Doe"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300"
              />
              <h4 className="text-xl font-semibold text-gray-900">Jane Doe</h4>
              <p className="text-blue-600 mb-2">CEO & Fundadora</p>
              <p className="text-gray-700 text-sm">
                Visionária com mais de 10 anos de experiência em liderança de
                tecnologia.
              </p>
            </div>
            {/* Exemplo de Membro da Equipe 2 */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <img
                src="https://placehold.co/150x150/60a5fa/ffffff?text=John+Smith"
                alt="Foto de John Smith"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300"
              />
              <h4 className="text-xl font-semibold text-gray-900">
                John Smith
              </h4>
              <p className="text-blue-600 mb-2">Desenvolvedor Líder</p>
              <p className="text-gray-700 text-sm">
                Especialista em React e arquitetura de sistemas escaláveis.
              </p>
            </div>
            {/* Exemplo de Membro da Equipe 3 */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <img
                src="https://placehold.co/150x150/60a5fa/ffffff?text=Emily+Brown"
                alt="Foto de Emily Brown"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300"
              />
              <h4 className="text-xl font-semibold text-gray-900">
                Emily Brown
              </h4>
              <p className="text-blue-600 mb-2">Designer UI/UX</p>
              <p className="text-gray-700 text-sm">
                Criadora de experiências visuais intuitivas e engajadoras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
