// src/pages/Contact.tsx
import React, { useState } from "react";
import FeedbackMessage from "../components/FeedbackMessage";
import ReactGA from "react-ga4";

const Contact: React.FC = () => {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState<"success" | "error">(
    "success"
  );
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🚨 Tratamento de erro no envio do evento para o Google Analytics
    try {
      // Enviando evento para o Google Analytics
      ReactGA.event({
        category: "Formulário",
        action: "Envio de mensagem",
        label: "Página Contato",
      });
    } catch (error) {
      console.error("Erro ao enviar evento para o Google Analytics:", error);
    }

    // Exemplo de feedback de envio
    setFeedbackMessage("Mensagem enviada com sucesso!");
    setFeedbackType("success");
    setFeedbackVisible(true);

    // Esconde a mensagem depois de 3s
    setTimeout(() => setFeedbackVisible(false), 3000);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Seu email"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Sua mensagem"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>

      {/* Feedback corrigido */}
      <FeedbackMessage
        type={feedbackType}
        message={feedbackMessage}
        visible={feedbackVisible}
      />
    </div>
  );
};

export default Contact;
