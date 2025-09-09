export default function QuestionCard({ questionData, handleAnswer, selected }) {
  return (
    <div className="card">
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option, index) => {
          let className = "";
          if (selected) {
            if (option === questionData.answer) {
              className = "correct"; // highlight correct
            } else if (option === selected) {
              className = "incorrect"; // highlight wrong selected
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={className}
              disabled={!!selected} // disable after selection
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
