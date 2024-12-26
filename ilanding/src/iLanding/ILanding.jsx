import { useScript } from "./hooks/useScript";
import {
  NavBar,
  HeroSection,
  About,
  Features,
  FeaturesTwo,
  CallToAction,
  Client,
  Services,
  CallToActionTwo,
  Footer,
} from "./components";

export const ILanding = () => {
  const scripts = [
    "./src/iLanding/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "./src/iLanding/assets/vendor/php-email-form/validate.js",
    "./src/iLanding/assets/vendor/aos/aos.js",
    "./src/iLanding/assets/vendor/glightbox/js/glightbox.min.js",
    "./src/iLanding/assets/vendor/swiper/swiper-bundle.min.js",
    "./src/iLanding/assets/vendor/purecounter/purecounter_vanilla.js",
    "./src/iLanding/assets/js/main.js",
  ];

  scripts.forEach(useScript);

  return (
    <>
      <div className="index-page">
        <header
          id="header"
          className="header d-flex align-items-center fixed-top"
        >
          {/* Navbar */}
          <NavBar />
          {/* Navbar */}
        </header>

        <main className="main">
          {/* Hero Section */}
          <HeroSection />
          {/* /Hero Section */}

          {/* About Section */}
          <About />
          {/* /About Section */}

          {/* Features Section */}
          <Features />
          {/* /Features Cards Section */}

          {/* Features 2 Section */}
          <FeaturesTwo />
          {/* /Features 2 Section */}

          {/* Call To Action Section */}
          <CallToAction />
          {/* /Call To Action Section */}

          {/* Clients Section */}
          <Client />
          {/* /Clients Section */}

          {/* Testimonials Section */}
          {/*<Testimonial />*/}
          {/* /Testimonials Section */}

          {/* Services Section */}
          <Services />
          {/* /Services Section */}

          {/* Pricing Section */}
          {/*<Pricing />*/}
          {/* /Pricing Section */}

          {/* Call To Action 2 Section */}
          <CallToActionTwo />
          {/* /Contact Section */}
        </main>

        {/* Footer */}
        <Footer />
        {/* /Footer */}

        {/* Scroll Top */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  );
};
