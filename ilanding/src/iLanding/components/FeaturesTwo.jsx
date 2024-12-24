export const FeaturesTwo = () => {
  return (
    <>
      <section id="features-2" className="features-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Use On Any Device</h3>
                    <p>
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; In ac dui quis mi
                      consectetuer lacinia.
                    </p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-display"></i>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}
              <div
                className="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Feather Icons</h3>
                    <p>
                      Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus
                      vestibulum volutpat sapien arcu sed augue aliquam erat
                      volutpat.
                    </p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-feather"></i>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}
              <div
                className="feature-item text-end"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div className="d-flex align-items-center justify-content-end gap-4">
                  <div className="feature-content">
                    <h3>Retina Ready</h3>
                    <p>
                      Aenean tellus metus bibendum sed posuere ac mattis non
                      nunc vestibulum fringilla purus sit amet fermentum aenean
                      commodo.
                    </p>
                  </div>
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-eye"></i>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}
            </div>
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="phone-mockup text-center">
                <img
                  src="./src/iLanding/assets/img/phone-app-screen.webp"
                  alt="Phone Mockup"
                  className="img-fluid"
                />
              </div>
            </div>
            {/* End Phone Mockup */}
            <div className="col-lg-4">
              <div
                className="feature-item mb-5"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-code-square"></i>
                  </div>
                  <div className="feature-content">
                    <h3>W3c Valid Code</h3>
                    <p>
                      Donec vitae sapien ut libero venenatis faucibus nullam
                      quis ante etiam sit amet orci eget eros faucibus
                      tincidunt.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}
              <div
                className="feature-item mb-5"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Fully Responsive</h3>
                    <p>
                      Maecenas tempus tellus eget condimentum rhoncus sem quam
                      semper libero sit amet adipiscing sem neque sed ipsum.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}
              <div
                className="feature-item"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="d-flex align-items-center gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <i className="bi bi-browser-chrome"></i>
                  </div>
                  <div className="feature-content">
                    <h3>Browser Compatibility</h3>
                    <p>
                      Nullam dictum felis eu pede mollis pretium integer
                      tincidunt cras dapibus vivamus elementum semper nisi
                      aenean vulputate.
                    </p>
                  </div>
                </div>
              </div>
              {/* End .feature-item */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
