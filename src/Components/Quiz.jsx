import React, { useState } from "react";
import { questions } from "../data.js";

function Quiz() {
  const [current, setCurrent] = useState(0); // current question index
  const [score, setScore] = useState(0); // user score
  const [selected, setSelected] = useState(""); // selected option
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected) {
      if (selected === questions[current].answer) {
        setScore(score + 1);
      }

      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected("");
      } else {
        setShowResult(true);
      }
    } else {
      alert("Please select an option!");
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Quiz App</h1>

      {showResult ? (
        <div style={styles.resultBox}>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button style={styles.button} onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div style={styles.quizBox}>
          <h2>
            Question {current + 1} of {questions.length}
          </h2>
          <p style={styles.question}>{questions[current].question}</p>

          <div>
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{
                  ...styles.option,
                  backgroundColor: selected === option ? "#87ceeb" : "#f0f0f0",
                }}
              >
                {option}
              </button>
            ))}
          </div>

          <button style={styles.button} onClick={handleNext}>
            {current === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  quizBox: {
    border: "2px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "500px",
    margin: "auto",
    backgroundColor: "#fafafa",
  },
  question: {
    fontSize: "20px",
    marginBottom: "15px",
  },
  option: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    marginTop: "15px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
  },
  resultBox: {
    border: "2px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    backgroundColor: "#eafbea",
  },
};


export default Quiz;