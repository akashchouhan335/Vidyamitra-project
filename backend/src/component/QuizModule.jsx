import React, { useState } from "react";

const QuizModule = () => {
  const questions = [
    { q: "What is React?", a: ["Library", "Framework", "Language"], correct: 0 },
    { q: "What is JS?", a: ["Framework", "Library", "Language"], correct: 2 },
  ];
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (i) => {
    if (i === questions[index].correct) setScore(score + 1);
    setIndex(index + 1);
  };

  if (index >= questions.length)
    return <h3>Quiz Complete! Score: {score}/{questions.length}</h3>;

  return (
    <div>
      <h3>{questions[index].q}</h3>
      {questions[index].a.map((ans, i) => (
        <button key={i} onClick={() => handleAnswer(i)}>
          {ans}
        </button>
      ))}
    </div>
  );
};

export default QuizModule;