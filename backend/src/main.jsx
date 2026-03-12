import React from "react";
import Dashboard from "./components/Dashboard";
import ResumeUpload from "./components/ResumeUpload";
import JobRoleSelection from "./components/JobRoleSelection";
import TrainingPlan from "./components/TrainingPlan";
import QuizModule from "./components/QuizModule";
import MockInterview from "./components/MockInterview";
import ProgressTracking from "./components/ProgressTracking";

function App() {
  return (
    <div>
      <Dashboard />
      <hr />
      <ResumeUpload />
      <hr />
      <JobRoleSelection />
      <hr />
      <TrainingPlan />
      <hr />
      <QuizModule />
      <hr />
      <MockInterview />
      <hr />
      <ProgressTracking />
    </div>
  );
}

export default App;