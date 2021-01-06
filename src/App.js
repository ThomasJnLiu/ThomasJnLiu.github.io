import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/* <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/About" component={AboutPage} exact />
            <Route path="/Projects" component={ProjectListPage} exact />
            <Route path="/Projects/:name" component={ProjectPage} exact />
            <Route component={NotFoundPage} />
          </Switch> */}

          {/*
            gh-pages doesn't natively support spa, I had some issues implementing the solution found here:
            https://github.com/rafgraph/spa-github-pages and had to go with the messier workaround of using hashrouter.
            Future Thomas, please fix
          */}
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
