import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LogInIndex } from "./IoT/logInIndex";
import { WelcomeWrapper } from "./IoT/welcomeWrapper";
import { Meniu } from "./IoT/meniu";

function App() {
  return (
    <div className="header-welcome-padding">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LogInIndex />} />
          <Route path="/welcome" element={<WelcomeWrapper />} />
          <Route path="/meniu" element={<Meniu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
