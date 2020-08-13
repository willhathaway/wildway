import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/Wrapper/index.js';
import Header from './components/Header/index.js';
import Home from './pages/Home/index.js';
import Journal from './pages/Journal/index.js';
import Contact from './pages/Contact/index.js';
import Portfolio from './pages/Portfolio/index.js';

function App() {



  return (

    <Wrapper>

    <Router>

        <Switch>

            <Route exact path="/" component={Home} />

            <Route exact path="/journal" component={Journal} />

            <Route exact path="/#contact" component={Contact} />

            <Route exact path="/portfolio" component={Portfolio} />

        </Switch>
    </Router>

</Wrapper>

  );
}

export default App;
