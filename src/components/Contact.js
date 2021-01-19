import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
                      <FaGithub size="4em" className="faSocial" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/steven-j-285a33115/">
                      <FaLinkedinIn size="4em" className="faSocial" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/ss_jones">
                      <FaTwitter size="4em" className="faSocial" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row contactFooter">
            <div className="col-12">&copy; Steven Jones 2020</div>
          </div>
        </div>
      </div>
    </>
  );
}

//importing icons from iconify (https://iconify.design/icon-sets/?query=twitter) then i ran yarn add --save @iconify/react @iconify-icons/fa-brands
// import { twitterIcon } from '@iconify/react';
// import twitterIcon from '@iconify-icons/fa-brands/twitter';
