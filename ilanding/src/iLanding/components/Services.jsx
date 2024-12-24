import { ServiceItem } from "./ServiceItem";

export const Services = () => {
  return (
    <>
      <section id="services" className="services section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            {/* Service Card */}
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            {/* End Service Card */}
          </div>
        </div>
      </section>
    </>
  );
};
