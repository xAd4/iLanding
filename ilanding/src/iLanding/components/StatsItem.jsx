/* eslint-disable react/prop-types */
export const StatsItem = ({ title, description, statIcon }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6">
        <div className="stat-item">
          <div className="stat-icon">
            <i className={statIcon}></i>
          </div>
          <div className="stat-content">
            <h4>{title}</h4>
            <p className="mb-0">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
