import { TestimonialItem } from "./TestimonialItem";

export const Testimonial = () => {
  return (
    <>
      <section
        id="testimonials"
        className="testimonials section light-background"
      >
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row g-5">
            {/* Testimonial item */}
            <TestimonialItem />
            <TestimonialItem />
            <TestimonialItem />
            <TestimonialItem />
            {/* End testimonial item */}
          </div>
        </div>
      </section>
    </>
  );
};
