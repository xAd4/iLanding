/* eslint-disable react/prop-types */
export const FeaturesCardItem = ({
  title,
  description,
  featureIcon,
  color,
}) => {
  return (
    <>
      <div
        className="col-xl-3 col-md-6"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className={`feature-box ${color}`}>
          {" "}
          {/* Change the color of the feature box */}
          <i className={featureIcon}></i>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
