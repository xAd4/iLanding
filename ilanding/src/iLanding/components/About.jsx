export const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 align-items-center justify-content-between">
            <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
              <span className="about-meta">MORE ABOUT US</span>
              <h2 className="about-title">Voluptas enim suscipit temporibus</h2>
              <p className="about-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="row feature-list-wrapper">
                <div className="col-md-6">
                  <ul className="feature-list">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Lorem ipsum
                      dolor sit amet
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Consectetur
                      adipiscing elit
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Sed do eiusmod
                      tempor
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="feature-list">
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Incididunt ut
                      labore et
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Dolore magna
                      aliqua
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i> Ut enim ad
                      minim veniam
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info-wrapper">
                <div className="row gy-4">
                  <div className="col-lg-5">
                    <div className="profile d-flex align-items-center gap-3">
                      <img
                        src="./src/iLanding/assets/img/avatar-1.webp"
                        alt="CEO Profile"
                        className="profile-image"
                      />
                      <div>
                        <h4 className="profile-name">Mario Smith</h4>
                        <p className="profile-position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="contact-info d-flex align-items-center gap-2">
                      <i className="bi bi-telephone-fill"></i>
                      <div>
                        <p className="contact-label">Call us anytime</p>
                        <p className="contact-number">+123 456-789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
              <div className="image-wrapper">
                <div
                  className="images position-relative"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <img
                    src="./src/iLanding/assets/img/about-5.webp"
                    alt="Business Meeting"
                    className="img-fluid main-image rounded-4"
                  />
                  <img
                    src="./src/iLanding/assets/img/about-2.webp"
                    alt="Team Discussion"
                    className="img-fluid small-image rounded-4"
                  />
                </div>
                <div className="experience-badge floating">
                  <h3>
                    15+ <span>Years</span>
                  </h3>
                  <p>Of experience in business service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
