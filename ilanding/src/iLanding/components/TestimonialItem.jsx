export const TestimonialItem = () => {
  return (
    <>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div className="testimonial-item">
          <img
            src="./src/iLanding/assets/img/testimonials/testimonials-1.jpg"
            className="testimonial-img"
            alt=""
          />
          <h3>Saul Goodman</h3>
          <h4>Ceo &amp; Founder</h4>
          <div className="stars">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p>
            <i className="bi bi-quote quote-icon-left"></i>
            <span>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
            </span>
            <i className="bi bi-quote quote-icon-right"></i>
          </p>
        </div>
      </div>
    </>
  );
};
