import React from "react";
import "./nav.css"
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
function Nav() {

    return (
        <div className="body">
            <nav class="navbar navbar-expand-lg bg-dark ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" id="link">Portfolio</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="navbar">
                                <NavLink id="link" to="/">Home</NavLink>
                            </li>
                            <li class="navbar">
                                <NavLink id="link" to="/skill">Skills</NavLink>
                            </li>
                            <li class="navbar">
                                <NavLink to="/Project" id="link">Projects</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Nav;