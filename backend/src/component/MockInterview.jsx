import React, { useState } from "react";

const MockInterview = () => {
  const questions = ["Tell me about yourself", "Your strengths?", "Why this job?"];
  const [index, setIndex] = useState(0);

  const nextQuestion = () => setIndex(index + 1);

  if (index >= questions.length) return <h3>Interview Finished!</h3>;

  return (
    <div>
      <h3>{questions[index]}</h3>
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
};

export default MockInterview;