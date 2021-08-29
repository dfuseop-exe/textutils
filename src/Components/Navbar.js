import React from "react";
import PropTypes from "prop-types";
 import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.Navtitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home 
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="about">
                About 
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Enable dark mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

//this is to check props type are provided right or wrong
Navbar.propTypes = {
  Navtitle: PropTypes.string.isRequired,
  abouttext: PropTypes.string,
};

Navbar.defaultProps = {
  Navtitle: "Title is here",
  abouttext: "About Text Here",
};
