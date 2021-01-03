import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Router basename="/Portfolio-Site">
      <div className="App">
        <NavBar />
        <div className="content">
          <Route path="/" component={HomePage} exact />
          <Route path="/About" component={AboutPage} exact />
          <Route path="/ProjectPage/:name" component={ProjectPage} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
