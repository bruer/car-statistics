import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Statistics.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Statistics from "./pages/Statistics";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
