import React from "react";
import { Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar className="App-header" expand="lg">
        {/* Header */}
        <header id="header">
          <div className="intro">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Steven Jones</h1>
                  <hr />
                  <p>Full Stack Web Developer</p>
                  <a href="#about" className="btn  btn-intro btn-lg page-scroll">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Navbar>
    </>
  );
}
