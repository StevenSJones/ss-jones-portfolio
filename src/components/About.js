import React from "react";
// import { Navbar } from "react-bootstrap";

// About Section
export default function About(props) {
  return (
    <>
      <div id="about">
        <div class="container">
          <div class="section-title text-center center">
            <h2>About Me</h2>
            <hr />
          </div>
          <div class="row">
            <div class="col-md-12 text-center">
              <img src="img/about.jpg" class="img-responsive about-img" />
            </div>
            <div class="col-md-8 col-md-offset-2">
              <div class="about-text">
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
                <a href="#portfolio" class="btn btn-default btn-lg page-scroll">
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
