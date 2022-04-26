//import logo from './logo.svg';
import "./App.css";
import Pricing from "./componets/Pricing";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div classNameName="App">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <img src="./icon_.svg" alt="MentorPlus+" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Plans & Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="d-flex ">
                <button className="btn btn-outline-primary m-2" type="submit">
                  log In
                </button>
                <button className="btn btn-primary m-2" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <center className="m-4">
          <h2>Buy a plan and be interview ready !</h2>
        </center>
      </div>
      <div class="container d-flex justify-content-between">
        <Pricing />
        <Pricing />
        <Pricing />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
