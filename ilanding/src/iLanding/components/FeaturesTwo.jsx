import { useFetch } from "../hooks/useFetch";
import { FeatureItem } from "./FeatureItem";
import { FeatureItemLeft } from "./FeatureItemLeft";

export const FeaturesTwo = () => {
  const { data } = useFetch("http://127.0.0.1:8000/featureTwo/featureItems/");
  const { data2 } = useFetch(
    "http://127.0.0.1:8000/featureTwo/featureItemsLeft/"
  );

  return (
    <>
      <section id="features-2" className="features-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-4">
              {/* Feature Item */}
              {data &&
                data.map((item) => {
                  return (
                    <FeatureItem
                      key={item.id}
                      title={item.name}
                      description={item.description}
                      featureIcon={item.featureIcon}
                    />
                  );
                })}
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
              {data2 &&
                data2.map((item) => (
                  <FeatureItemLeft
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    featureIcon={item.featureIcon}
                  />
                ))}
              {/* End .feature-item */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
