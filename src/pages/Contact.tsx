import React, { useState } from "react";
import FeedbackMessage from "../components/FeedbackMessage";

const Contact: React.FC = () => {
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackType, setFeedbackType] = useState<"success" | "error">(
    "success"
  );
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Aqui você faria a lógica de envio do formulário (e.g., para uma API) // Por simplicidade, vamos simular um sucesso.
    console.log("Formulário enviado!");

    setFeedbackType("success");
    setFeedbackMessage("Sua mensagem foi enviada com sucesso!");
    setFeedbackVisible(true); // Limpar formulário

    (e.target as HTMLFormElement).reset();

    setTimeout(() => setFeedbackVisible(false), 4000);
  };

  return (
    <section id="contact" className="page w-full py-12 sm:py-16">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-12 md:p-16 max-w-4xl mx-auto animate-fade-in">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center leading-tight">
          Vamos Conversar!
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Informações de Contato */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">
              Nossas Informações
            </h3>
            <div className="flex items-start text-lg text-gray-700">
              <svg
                className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <p>Rua Exemplo, 123 - Cidade, Estado - CEP 12345-678</p>
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <svg
                className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4v7a2 2 0 002 2h14a2 2 0 002-2v-7l-8-5.34a2 2 0 00-2 0L3 12z"
                ></path>
              </svg>
              <p>contato@meusite.com</p>
            </div>
            <div className="flex items-center text-lg text-gray-700">
              <svg
                className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <p>+55 (XX) 91234-5678</p>
            </div>
            {/* Placeholder para mapa */}
            <div className="mt-8">
              <img
                src="https://placehold.co/600x300/e0e7ff/3f51b5?text=Nos+Encontre+no+Mapa"
                alt="Mapa da localização"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* Formulário de Contato */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">
              Envie uma Mensagem
            </h3>
            <form className="space-y-5" onSubmit={handleFormSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                  placeholder="seu.email@exemplo.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
                  placeholder="Qual o motivo do contato?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base resize-y"
                  placeholder="Sua mensagem"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
            {feedbackVisible && (
              <div className="mt-6 animate-fade-in-down">
                <FeedbackMessage
                  type={feedbackType}
                  message={feedbackMessage} visible={false}                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;