export const CallToActionTwo = () => {
  return (
    <>
      <section
        id="call-to-action-2"
        className="call-to-action-2 section dark-background"
      >
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Call To Action</h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a className="cta-btn" href="#">
                  Call To Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Call To Action 2 Section */}

      {/* Contact Section */}
      <section id="contact" className="contact section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <div className="info-box" data-aos="fade-up" data-aos-delay="200">
                <h3>Contact Info</h3>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Vestibulum ante ipsum primis.
                </p>
                <div
                  className="info-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="content">
                    <h4>Our Location</h4>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                  </div>
                </div>
                <div
                  className="info-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="icon-box">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="content">
                    <h4>Phone Number</h4>
                    <p>+1 5589 55488 55</p>
                    <p>+1 6678 254445 41</p>
                  </div>
                </div>
                <div
                  className="info-item"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="icon-box">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="content">
                    <h4>Email Address</h4>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="contact-form"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Get In Touch</h3>
                <p>
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi. Vestibulum ante ipsum primis.
                </p>
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit" className="btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
