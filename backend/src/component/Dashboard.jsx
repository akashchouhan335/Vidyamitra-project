import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Vidyamitra Dashboard</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ flex: "1 1 200px", padding: "20px", border: "1px solid #ccc" }}>
          <h2>Resume Evaluation</h2>
          <p>View resume scores and suggestions</p>
        </div>

        <div style={{ flex: "1 1 200px", padding: "20px", border: "1px solid #ccc" }}>
          <h2>Skill Mapping</h2>
          <p>Check your skills vs industry requirements</p>
        </div>

        <div style={{ flex: "1 1 200px", padding: "20px", border: "1px solid #ccc" }}>
          <h2>Training Planner</h2>
          <p>Plan learning modules for skill gaps</p>
        </div>

        <div style={{ flex: "1 1 200px", padding: "20px", border: "1px solid #ccc" }}>
          <h2>Quiz Performance</h2>
          <p>View quiz scores and progress</p>
        </div>

        <div style={{ flex: "1 1 200px", padding: "20px", border: "1px solid #ccc" }}>
          <h2>Job Recommendations</h2>
          <p>Suggested jobs for you</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;