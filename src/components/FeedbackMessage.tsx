// src/components/FeedbackMessage.tsx
import React from "react";
import { Transition } from "@headlessui/react"; // Você precisará instalar esta biblioteca para a animação

interface FeedbackMessageProps {
  visible: boolean;
  message?: string;
  type?: "success" | "error";
}

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({
  visible,
  message = "Mensagem enviada com sucesso!",
  type = "success",
}) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <Transition
      show={visible}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed bottom-8 right-8 ${bgColor} text-white px-6 py-3 rounded-lg shadow-xl text-lg font-medium`}
      >
        {message}
      </div>
    </Transition>
  );
};

export default FeedbackMessage;
