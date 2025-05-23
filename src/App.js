import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperloop Machine Language",
      "Hyperlink Markdown Language",
      "Home Tool Markup Language",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995",
  },
  {
    question: "Which of these is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: "Django",
  },
];

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelected(null);
      const nextQ = currentQ + 1;
      if (nextQ < questions.length) {
        setCurrentQ(nextQ);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className="app">
      <h1>🧠 Quiz App</h1>
      {showScore ? (
        <div className="score">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-box">
          <div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
  ></div>
</div>

          <h2>
            Question {currentQ + 1} of {questions.length}
          </h2>
          <p className="question">{questions[currentQ].question}</p>
          <div className="options">
            {questions[currentQ].options.map((option, i) => (
              <button
                key={i}
                className={`option-btn ${
                  selected
                    ? option === questions[currentQ].answer
                      ? "correct"
                      : option === selected
                      ? "wrong"
                      : ""
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
                disabled={selected}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

