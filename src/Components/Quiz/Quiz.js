import React, { useState } from "react";
import "./Quiz.css";

 const Quiz = () => {
  let data = [
    {
      question:
        "Brass gets discoloured in air because of the presence of which of the following gases in air?",
      Option: ["1st opt 1", "opt 2", "opt 3", "opt 4"],
      answer: 1,
    },
    {
      question:
        "Chlorophyll is a naturally occurring chelate compound in which central metal is",
      Option: [" opt 1", "opt 2", "opt 3", "1st opt 4"],
      answer: 4,
    },
    {
      question: "Which of the following is used in pencils?",
      Option: ["opt 1", "opt 2", "3st opt 3", "opt 4"],
      answer: 3,
    },
    {
      question:
        "Which of the following metals forms an amalgam with other metals?",
      Option: ["opt 1", "4th opt 2", "opt 3", "opt 4"],
      answer: 2,
    },
    {
      question:
        "Which of the following is a non metal that remains liquid at room temperature?",
      Option: ["1st opt 1", "opt 2", "opt 3", "opt 4"],
      answer: 2,
    },
  ];
  const [questionIdx, setQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [setShowScore] = useState(0);
  const currQuestion = data[questionIdx];
  console.log(data);

  const selectOption = (idx) => {
    if (currQuestion.answer === idx) {
      setScore(score + 1);
    }
    const nextQ = questionIdx + 1;
    if (nextQ < data.length) {
      setQuestionIdx(questionIdx + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-container_question">
        <p>{currQuestion.question}</p>
        <div className="quiz-container_options">
          <ul className="quiz-container_ul">
            {currQuestion.Option.map((option) => {
              return (
                <li className="quiz-container_li" onClick={selectOption}>
                  {option}
                </li>
              );
            })}
            {/* <li className="quiz-container_li">Option</li>
              <li className="quiz-container_li">Option</li>
              <li className="quiz-container_li">Option</li>
              <li className="quiz-container_li">Option</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quiz
