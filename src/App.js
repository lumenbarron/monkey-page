import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
// import './style-globals.scss';

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={AboutUs} />
  </Switch>
  </Router>
  );
}

export default App;
