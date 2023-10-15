import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LogInIndex } from "./logIn/logInIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import { Orar } from "./menuBar/orar";
import { WelcomeBody } from "./welcome/welcomeBody";
import { Contact } from "./menuBar/contact";
import { Meniu } from "./menuBar/meniu/meniu";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<LogInIndex />} />
        <Route exact path="/welcome" element={<WelcomeBody />} />
        <Route exact path="/orar" element={<Orar />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/meniu" element={<Meniu />} />
      </Routes>
    </Router>
  );
}

export default App;
