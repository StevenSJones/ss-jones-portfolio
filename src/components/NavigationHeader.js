import React from "react";

export default function NavigationHeader() {
  return (
    <>
      {/* Header */}
      <header id="header">
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="intro-text text-center">
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
    </>
  );
}
