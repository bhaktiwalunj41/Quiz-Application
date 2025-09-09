import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data";
import QuestionCard from "./QuestionCard";

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null); // store selected answer
  const [timeLeft, setTimeLeft] = useState(15); // timer per question
  const navigate = useNavigate();

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      handleNext(); // auto move if time runs out
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    if (selected) return; // prevent multiple clicks
    setSelected(answer);

    if (answer === questions[currentQ].answer) {
      setScore((prev) => prev + 1);
    }

    // move to next after 1.2s
    setTimeout(handleNext, 1200);
  };

  const handleNext = () => {
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
      setSelected(null);
      setTimeLeft(15); // reset timer
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h1>Quiz Time</h1>
        <div className="timer">⏳ {timeLeft}s</div>
      </div>

      <QuestionCard
        questionData={questions[currentQ]}
        handleAnswer={handleAnswer}
        selected={selected}
      />

      <p>
        Question {currentQ + 1} / {questions.length}
      </p>
    </div>
  );
}
