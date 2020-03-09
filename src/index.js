import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from "./components/App";
import Inspiration from "./components/Inspiration";
import About from "./components/About";
import Articles from "./components/Articles";
// import GetStarted from "./components/GetStarted";
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
        <Route path="/inspiration" component={Inspiration} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
// <ul>
//   <li>
//     <NavLink to="/">Home</NavLink>
//   </li>
//   <li>
//     <NavLink to="/about">About</NavLink>
//   </li>
//   <li>
//     <NavLink to="/contact">Contact</NavLink>
//   </li>
//   <li>
//     <NavLink to="/inspiration">Inspiration</NavLink>
//   </li>
// </ul>
