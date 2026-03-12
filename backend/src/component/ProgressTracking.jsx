import React, { useEffect, useState } from "react";

const ProgressTracking = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    // Fake API call
    setTimeout(() => {
      setProgress([
        { module: "Resume", score: "80%" },
        { module: "Skills", score: "70%" },
        { module: "Quiz", score: "90%" },
      ]);
    }, 500);
  }, []);

  return (
    <div>
      <h2>Progress Tracking</h2>
      <ul>
        {progress.map((p, i) => (
          <li key={i}>
            {p.module}: {p.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracking;