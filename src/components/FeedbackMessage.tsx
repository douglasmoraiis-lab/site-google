interface FeedbackProps {
  visible: boolean;
}

const FeedbackMessage: React.FC<FeedbackProps> = ({ visible }) => {
  return (
    <div className={`mt-4 p-4 bg-green-100 text-green-700 rounded-md ${visible ? '' : 'hidden'}`}>
      Obrigado por sua mensagem!
    </div>
  );
};

export default FeedbackMessage;
