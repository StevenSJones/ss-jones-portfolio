import React from "react";
import { Navbar } from "react-bootstrap";

export default function Navigation(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        {/* Header */}
        <header id="header">
          <div class="intro">
            <div class="container">
              <div class="row">
                <div class="intro-text">
                  <h1>Steven Jones</h1>
                  <hr />
                  <p>Full Stack Web Developer</p>
                  <a href="#about" class="btn  btn-intro btn-lg page-scroll">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Collect the nav links, forms, and other content for toggling  */}
        <div class="collapse navbar-collapse navbar-main-collapse">
          <ul class="nav navbar-nav">
            {/* Hidden li included to remove active class from about link when scrolled up past about section  */}
            <li class="hidden">
              <a href="#page-top"></a>
            </li>
            <li>
              <a class="page-scroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="page-scroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a class="page-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </Navbar>
    </>
  );
}
