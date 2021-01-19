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

          <div className="row text-center">
            <div className="col-12 img-wrapper">
              <img
                src="img/contact/contact.jpg"
                className="contact-img"
                alt="Steven Jones in a houndstooth jacket and black shirt."
              />
              <p className="emailContact">
                <a
                  className="emailContact"
                  href="mailto:ssjones.code@gmail.com?Subject=KHA%20Portfolio"
                  target="_top"
                >
                  Send Me An Email
                </a>
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-12">
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
      </div>
    </>
  );
}

//importing icons from iconify (https://iconify.design/icon-sets/?query=twitter) then i ran yarn add --save @iconify/react @iconify-icons/fa-brands
// import { twitterIcon } from '@iconify/react';
// import twitterIcon from '@iconify-icons/fa-brands/twitter';
