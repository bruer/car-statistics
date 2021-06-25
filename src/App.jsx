import "./App.css";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
