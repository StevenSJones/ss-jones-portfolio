import React from "react";

export default function Contact(props) {
  
  return (
    <>
      <div id="contact" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Get In Touch</h2>
            <hr />
          </div>

          <div className="col text-center">
            <img src="img/contact/contact.jpg" className="img-responsive contact-img" alt="Steven Jones in a houndstooth jacket and black shirt." />
          </div>

          <div className="col">
            <p className="emailContact">
              <a
                className="emailContact"
                href="mailto:ssjones.code@gmail.com?Subject=KHA%20Portfolio"
                target="_top"
              >
                Send Me An Email
              </a>
            </p>

            <div className="social">
              <ul>
                <li>
                  <a href="https://github.com/StevenSJones">
                    <i className="fa fa-github fa-4x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/steven-j-285a33115/">
                    <i className="fa fa-linkedin fa-4x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ss_jones">
                    <i className="fa fa-twitter fa-4x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
