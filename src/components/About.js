import React from "react";
// import { Navbar } from "react-bootstrap";

// About Section
export default function About(props) {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="section-title text-center center">
            <h2>About Me</h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-12">
              <img src="img/about/about.jpg" className="img-responsive about-img" alt="Steven Jones in houndstooth jacket" />
            </div>
            <div className="col-md-8 col-md-offset-2">
              <div className="about-text">
                <p>
                  Recent University of Arizona Full-stack web development
                  graduate with a robust skillset including software engineering
                  principles, organization skills, and customer service
                  expertise. Adroit at building applications using React,
                  Express and MongoDB. As an unremitting scholar, I am both
                  seeking ways to acquire a knowledge base of and implement
                  novel technologies. Motivated to achieve both personal and
                  professional success by a strong work ethic, I am seeking a
                  role as a developer that affords the opportunity to
                  demonstrate my current abilities while simultaeously evolving
                  so as to master my craft.{" "}
                </p>
                <a href="#portfolio" className="btn btn-default btn-lg page-scroll">
                  My Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
