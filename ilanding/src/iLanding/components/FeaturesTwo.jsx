import { FeatureItem } from "./FeatureItem";
import { FeatureItemLeft } from "./FeatureItemLeft";

export const FeaturesTwo = () => {
  return (
    <>
      <section id="features-2" className="features-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-4">
              {/* Feature Item */}
              <FeatureItem />
              <FeatureItem />
              <FeatureItem />
              {/* End .feature-item */}
            </div>
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="phone-mockup text-center">
                <img
                  src="./src/iLanding/assets/img/phone-app-screen.webp"
                  alt="Phone Mockup"
                  className="img-fluid"
                />
              </div>
            </div>
            {/* End Phone Mockup */}
            <div className="col-lg-4">
              {/* Feature Item left */}
              <FeatureItemLeft />
              <FeatureItemLeft />
              <FeatureItemLeft />
              {/* End .feature-item */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
