import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Play from "./components/pages/Play";
import SignUp from "./components/pages/SignUp";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/play" component={Play} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
