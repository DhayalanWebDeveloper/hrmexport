export default function OurValues() {
  return (
    <section
      className="feature-one"
      style={{
        backgroundImage:
          "url('/assets/images/backgrounds/2397327.png')",
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        paddingTop: '70px',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img
              src="/assets/images/icon/section-title-icon.png"
              alt="HRM Exports"
            />
          </div>
          <span
            className="section-title__tagline wow slideInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            Always Dedicated and Devoted
          </span>
          <h3
            className="section-title__title wow slideInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            Our Values and Propositions
          </h3>
        </div>
        <div className="row">
          {/* Excellence Offered */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                <div
                  className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div
                    className="feature-one__single wow fadeInUp transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    data-wow-delay="100ms"
                  >
                    <h3 className="feature-one__title">
                      <a
                        href="#"
                        className="transition-colors duration-300 hover:text-hrm-lime"
                      >
                        Excellence Offered
                      </a>
                    </h3>
                    <p className="feature-one__text mt-15 text-justify">
                      We believe in offering excellence not only in terms of our
                      products but also in terms of regulated manufacturing
                      process and quality standards followed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                <img
                  src="/basmati-rice/static/Excellence-Offered-1.webp"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="Excellence Offered"
                />
              </div>
            </div>
          </div>

          {/* Strong Belief system */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                <div
                  className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="feature-one__single transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="feature-one__title">
                      <a
                        href="/team"
                        className="transition-colors duration-300 hover:text-hrm-lime"
                      >
                        Strong Belief system
                      </a>
                    </h3>
                    <p className="feature-one__text mt-15 text-justify">
                      At HRM Exports, we have a belief that by providing our
                      basmati rice to the world, we can play our part in
                      eradicating global hunger..
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mb-3 mborder">
                <img
                  src="/basmati-rice/static/Strong-Belief-system1.webp"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="Strong Belief system"
                />
              </div>
            </div>
          </div>

          {/* Smart Work */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 mb-3 mborder">
                <img
                  src="/basmati-rice/static/Smart-Work1.webp"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="Smart-Work"
                />
              </div>
              <div
                className="col-xl-6 col-lg-6 mb-3 col-md-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div
                  className="col-xl-12 col-lg-12 col-md-12 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="feature-one__single transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="feature-one__title">
                      <a
                        href="#"
                        className="transition-colors duration-300 hover:text-hrm-lime"
                      >
                        Smart Work
                      </a>
                    </h3>
                    <p className="feature-one__text mt-15 text-justify">
                      To optimise our production and output we adopt a strategy
                      to promote smart work. We hold workshops and training
                      courses to promote the same.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service to society */}
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 mb-3 mborder">
                <img
                  src="/basmati-rice/static/Service-to-society1.webp"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="Service-to-society"
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                <div className="feature-one__single transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="feature-one__title">
                    <a
                      href="#"
                      className="transition-colors duration-300 hover:text-hrm-lime"
                    >
                      Service to society
                    </a>
                  </h3>
                  <p className="feature-one__text mt-15 text-justify">
                    We believe in giving back to the society by recycling
                    wastewater, contributing to trusts and NGO, and by providing
                    employment opportunity to the needy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
