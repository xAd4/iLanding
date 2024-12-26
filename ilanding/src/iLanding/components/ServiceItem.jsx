/* eslint-disable react/prop-types */
export const ServiceItem = ({ name, description, serviceIcon }) => {
  return (
    <>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div className="service-card d-flex">
          <div className="icon flex-shrink-0">
            <i className={serviceIcon}></i>
          </div>
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
            {/*<a href="#" className="read-more">
              Read More <i className="bi bi-arrow-right"></i>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
