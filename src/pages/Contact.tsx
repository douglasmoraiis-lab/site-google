import React, { useState } from 'react';
import FeedbackMessage from '../components/FeedbackMessage';

const Contact: React.FC = () => {
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackVisible(true);
    setTimeout(() => setFeedbackVisible(false), 3000);
  };

  return (
    <section id="contact" className="page active">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-12 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">Entre em Contato</h2>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
            Enviar Mensagem
          </button>
        </form>
        <FeedbackMessage visible={feedbackVisible} />
      </div>
    </section>
  );
};

export default Contact;
