import "./QuizView.css";
import React, { useState } from "react";
import QuizResult from "./QuizResult";

const quizData = [
  {
    id: 1,
    question: "What is the capital city of Pakistan?",
    options: ["Lahore", "Islamabad", "Karachi", "Rawalpindi"],
    answer: "Islamabad",
  },
  {
    id: 2,
    question: "What is the national language of Pakistan?",
    options: ["Urdu", "Punjabi", "Sindhi", "Balochi"],
    answer: "Urdu",
  },
  {
    id: 3,
    question: "What is the name of the highest peak in Pakistan?",
    options: ["K2", "Nanga Parbat", "Gasherbrum I", "Broad Peak"],
    answer: "K2",
  },
  {
    id: 4,
    question: "What is the name of the largest river in Pakistan?",
    options: ["Jhelum", "Sutlej", "Chenab", "Indus"],
    answer: "Indus",
  },
  {
    id: 5,
    question: "Which Pakistani city is known as the 'City of Saints'?",
    options: ["Lahore", "Multan", "Karachi", "Quetta"],
    answer: "Multan",
  },
  // Add more questions here...
];
let marks = null;

function QuizView() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(score);
  };

  if (submitted) {
    return <QuizResult score={score} answers={answer} quizData={quizData} />;
  }
  return (
    <div className="container">
      <form action="#" onSubmit={handleSubmit}>
        {quizData.map((item, ind) => (
          <div key={ind} className="question">
            <h3>Question {item.id}</h3>
            <p>{item.question}</p>
            {item.options.map((option, index) => (
              <div key={index} className="options">
                <label>
                  <input
                    className="input"
                    type="radio"
                    name={`option-${item.id}`}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                      if (item.answer === e.target.value) {
                        marks = marks + 1;
                        setScore(marks);
                      }
                    }}
                    value={option}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuizView;
