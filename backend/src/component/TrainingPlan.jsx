import React, { useEffect, useState } from "react";

const TrainingPlan = () => {
  const [plan, setPlan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with API call to fetch plan
    setTimeout(() => {
      setPlan(["HTML & CSS", "JavaScript", "React", "Backend APIs"]);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <h2>Training Plan</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {plan.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrainingPlan;