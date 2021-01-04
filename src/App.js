import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router basename="/Portfolio-Site">
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/About" component={AboutPage} exact />
            <Route path="/Projects" component={ProjectListPage} exact />
            <Route path="/Projects/:name" component={ProjectPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
