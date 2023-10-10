import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LogInIndex } from "./log in/log_in_index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Welcome } from "./welcome/Welcome";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<LogInIndex />} />
        <Route exact path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
