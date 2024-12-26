import { useFetch } from "../hooks/useFetch";
import { ServiceItem } from "./ServiceItem";

export const Services = () => {
  const { data } = useFetch("http://127.0.0.1:8000/services/services/");
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
            {data &&
              data.map((service) => (
                <ServiceItem
                  key={service.id}
                  name={service.name}
                  description={service.description}
                  serviceIcon={service.serviceIcon}
                />
              ))}
            {/* End Service Card */}
          </div>
        </div>
      </section>
    </>
  );
};
