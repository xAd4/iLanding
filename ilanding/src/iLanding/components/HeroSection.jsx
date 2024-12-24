import { StatsItem } from "./StatsItem";

export const HeroSection = () => {
  return (
    <>
      <section id="hero" className="hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="company-badge mb-4">
                  <i className="bi bi-gear-fill me-2"></i>
                  Working for your success
                </div>
                <h1 className="mb-4">
                  Maecenas Vitae <br />
                  Consectetur Led <br />
                  <span className="accent-text">Vestibulum Ante</span>
                </h1>
                <p className="mb-4 mb-md-5">
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus
                  tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                  sodales sagittis magna.
                </p>
                <div className="hero-buttons">
                  <a
                    href="#about"
                    className="btn btn-primary me-0 me-sm-2 mx-1"
                  >
                    Get Started
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="btn btn-link mt-2 mt-sm-0 glightbox"
                  >
                    <i className="bi bi-play-circle me-1"></i>
                    Play Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-image"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img
                  src="./src/iLanding/assets/img/illustration-1.webp"
                  alt="Hero Image"
                  className="img-fluid"
                />
                <div className="customers-badge">
                  <div className="customer-avatars">
                    <img
                      src="./src/iLanding/assets/img/avatar-1.webp"
                      alt="Customer 1"
                      className="avatar"
                    />
                    <img
                      src="./src/iLanding/assets/img/avatar-2.webp"
                      alt="Customer 2"
                      className="avatar"
                    />
                    <img
                      src="./src/iLanding/assets/img/avatar-3.webp"
                      alt="Customer 3"
                      className="avatar"
                    />
                    <img
                      src="./src/iLanding/assets/img/avatar-4.webp"
                      alt="Customer 4"
                      className="avatar"
                    />
                    <img
                      src="./src/iLanding/assets/img/avatar-5.webp"
                      alt="Customer 5"
                      className="avatar"
                    />
                    <span className="avatar more">12+</span>
                  </div>
                  <p className="mb-0 mt-2">
                    12,000+ lorem ipsum dolor sit amet consectetur adipiscing
                    elit
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row stats-row gy-4 mt-5"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {/* Stats Item */}
            <StatsItem />
            <StatsItem />
            <StatsItem />
            <StatsItem />
            {/* End Stats Item */}
          </div>
        </div>
      </section>
    </>
  );
};
