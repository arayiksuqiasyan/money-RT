import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Home from "./home/home";
import Works from "./works/works";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";
import Testimonials from "./Testimonials/Testimonials";
import logo from "./img/Logo.png";

function App() {
  const history = useHistory();
  console.log(window.location.hash, "aaaaaaaaaaaaaaa");
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav-container">
          <div className="loga-card">
            <img src={logo} alt="#" />
          </div>
          <div className="nav">
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  className="main"
                  activeClassName="main-active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/works"
                  className="main"
                  activeClassName="main-active"
                >
                  How it works
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className="main"
                  activeClassName="main-active"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonials"
                  className="main"
                  activeClassName="main-active"
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="main"
                  activeClassName="main-active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="button">
            <button>Sign up</button>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/works" component={Works} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/testimonials" component={Testimonials} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
