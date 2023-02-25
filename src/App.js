import React from "react";
import {NavLink} from "react-router-dom";

import logo from "./img/Logo.png";
import {useRoutes} from "./hooks/useRoutes";

function App() {
    const routes = useRoutes()

    return (
        <div className="App">
            <div className="nav-container">
                <div className="loga-card">
                    <img src={logo} alt="#"/>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? 'main-active' : "main"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/works" className={({isActive}) => isActive ? 'main-active' : "main"}>How it
                                works</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service"
                                     className={({isActive}) => isActive ? 'main-active' : "main"}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/testimonials"
                                     className={({isActive}) => isActive ? 'main-active' : "main"}>Testimonials</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="main"
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
            {routes}
        </div>
    );
}

export default App;
