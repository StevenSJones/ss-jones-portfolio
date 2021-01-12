import React from "react";

export default function Contact(props) {
  return (
    <>
      <div id="contact" class="text-center">
        <div class="container">
          <div class="section-title center">
            <h2>Get In Touch</h2>
            <hr />
          </div>

          <div class="col text-center">
            <img src="../../public/img/contact/contact.jpg" class="img-responsive contact-img" />
          </div>

          <div class="col-md-8 col-md-offset-2">
            <p class="emailContact">
              <a
                class="emailContact"
                href="mailto:ssjones.code@gmail.com?Subject=KHA%20Portfolio"
                target="_top"
              >
                Send Me An Email
              </a>
            </p>

            <div class="social">
              <ul>
                <li>
                  <a href="https://github.com/StevenSJones">
                    <i class="fa fa-github fa-4x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/steven-j-285a33115/">
                    <i class="fa fa-linkedin fa-4x"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ss_jones">
                    <i class="fa fa-twitter fa-4x"></i>
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
