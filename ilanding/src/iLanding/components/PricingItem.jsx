export const PricingItem = () => {
  return (
    <>
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
        <div className="pricing-card">
          {" "}
          {/* Put popular if must change the color */}
          <h3>Premium Plan</h3>
          <div className="price">
            <span className="currency">$</span>
            <span className="amount">39.9</span>
            <span className="period">/ month</span>
          </div>
          <p className="description">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae.
          </p>
          <h4>Featured Included:</h4>
          <ul className="features-list">
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Temporibus autem quibusdam
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Saepe eveniet ut et voluptates
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Nam libero tempore soluta
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Cumque nihil impedit quo
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Maxime placeat facere possimus
            </li>
          </ul>
          <a href="#" className="btn btn-primary">
            Buy Now
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};
