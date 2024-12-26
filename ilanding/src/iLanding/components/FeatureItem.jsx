/* eslint-disable react/prop-types */
export const FeatureItem = ({ title, description, featureIcon }) => {
  return (
    <>
      <div
        className="feature-item text-end mb-5"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <div className="d-flex align-items-center justify-content-end gap-4">
          <div className="feature-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="feature-icon flex-shrink-0">
            <i className={featureIcon}></i>
          </div>
        </div>
      </div>
    </>
  );
};
