export const Features = () => {
  return (
    <>
      <section id="features" className="features section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul
              className="nav nav-tabs"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-1"
                >
                  <h4>Modisit</h4>
                </a>
              </li>
              {/* End tab nav item */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-2"
                >
                  <h4>Praesenti</h4>
                </a>
                {/* End tab nav item */}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#features-tab-3"
                >
                  <h4>Explica</h4>
                </a>
              </li>
              {/* End tab nav item */}
            </ul>
          </div>
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            <div className="tab-pane fade active show" id="features-tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatem dignissimos provident</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="./src/iLanding/assets/img/features-illustration-1.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* End tab content item */}
            <div className="tab-pane fade" id="features-tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Neque exercitationem debitis</h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla
                        pariatur.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="./src/iLanding/assets/img/features-illustration-2.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* End tab content item */}
            <div className="tab-pane fade" id="features-tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatibus commodi accusamu</h3>
                  <ul>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check2-all"></i>{" "}
                      <span>
                        Provident mollitia neque rerum asperiores dolores quos
                        qui a. Ipsum neque dolor voluptate nisi sed.
                      </span>
                    </li>
                  </ul>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="./src/iLanding/assets/img/features-illustration-3.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* End tab content item */}
          </div>
        </div>
      </section>
      {/* /Features Section */}

      {/* Features Cards Section */}
      <section id="features-cards" className="features-cards section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="feature-box orange">
                <i className="bi bi-award"></i>
                <h4>Corporis voluptates</h4>
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>
            {/* End Feature Borx*/}
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="feature-box blue">
                <i className="bi bi-patch-check"></i>
                <h4>Explicabo consectetur</h4>
                <p>
                  Est autem dicta beatae suscipit. Sint veritatis et sit quasi
                  ab aut inventore
                </p>
              </div>
            </div>
            {/* End Feature Borx*/}
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="feature-box green">
                <i className="bi bi-sunrise"></i>
                <h4>Ullamco laboris</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>
            {/* End Feature Borx*/}
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="feature-box red">
                <i className="bi bi-shield-check"></i>
                <h4>Labore consequatur</h4>
                <p>
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>
            {/* End Feature Borx*/}
          </div>
        </div>
      </section>
    </>
  );
};
