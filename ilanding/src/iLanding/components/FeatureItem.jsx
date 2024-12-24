export const FeatureItem = () => {
  return (
    <>
      <div
        className="feature-item text-end mb-5"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="d-flex align-items-center justify-content-end gap-4">
          <div className="feature-content">
            <h3>Use On Any Device</h3>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.
            </p>
          </div>
          <div className="feature-icon flex-shrink-0">
            <i className="bi bi-display"></i>
          </div>
        </div>
      </div>
    </>
  );
};
