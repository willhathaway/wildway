import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper/index.js";
import Home from "./pages/Home/index.js";
import Tutoring from "./pages/Tutoring/index.js";
import Contact from "./pages/Contact/index.js";
import Portfolio from "./pages/Portfolio/index.js";
import Consulting from "./pages/Consulting/index.js";

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/tutoring" component={Tutoring} />

          <Route exact path="/consulting" component={Consulting} />

          <Route exact path="/contact" component={Contact} />

          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
