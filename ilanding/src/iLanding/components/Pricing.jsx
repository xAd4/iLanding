import { PricingItem } from "./PricingItem";

export const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pricing section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4 justify-content-center">
            {/* Premium Plan */}
            <PricingItem />
            <PricingItem />
            <PricingItem />
            {/* End Premium Plan */}
          </div>
        </div>
      </section>
    </>
  );
};
