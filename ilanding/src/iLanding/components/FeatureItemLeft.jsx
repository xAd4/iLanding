/* eslint-disable react/prop-types */
export const FeatureItemLeft = ({ title, description, featureIcon }) => {
  return (
    <>
      <div
        className="feature-item mb-5"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="d-flex align-items-center gap-4">
          <div className="feature-icon flex-shrink-0">
            <i className={featureIcon}></i>
          </div>
          <div className="feature-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
