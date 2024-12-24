export const FeatureItemLeft = () => {
  return (
    <>
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
              Donec vitae sapien ut libero venenatis faucibus nullam quis ante
              etiam sit amet orci eget eros faucibus tincidunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
