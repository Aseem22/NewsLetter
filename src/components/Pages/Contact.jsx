import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      placeholder="Your Name"
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    {/* <label for="name" className="">
                      Your name
                    </label> */}
                  </div>
                </div>

                <div className="col-md-6 ">
                  <div className="md-form mb-0">
                    <input
                      placeholder="Email"
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    {/* <label for="email" className="">
                      Your email
                    </label> */}
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      placeholder="Subject"
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    {/* <label for="subject" className="">
                      Subject
                    </label> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      placeholder="Your message"
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    {/* <label for="message">Your message</label> */}
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left my-3 ">
              <Link
                to=""
                className="btn btn-dark"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </Link>
            </div>
            <div className="status"></div>
          </div>

          <div className="row">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <pre style={{ marginLeft: "50px" }}>
                  <b>Address:</b> <br />
                  IIT(ISM) Dhanbad <br />
                  Jharkhand- 826004, India <br />
                  aseempratap2207@gmail.com
                </pre>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
