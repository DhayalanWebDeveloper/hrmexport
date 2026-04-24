import Link from 'next/link';

export default function HRMExports() {
  return (
    <section
      className="about-one"
      style={{
        backgroundImage:
          "url('/assets/images/backgrounds/Ricebg.webp')",
        backgroundPosition: '50% 50%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-12 d-flex align-items-center">
              <div className="about-one__left">
                <div
                  className="about-one__img-box wow slideInLeft transition-transform duration-500 hover:-translate-y-1"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div>
                    <img
                      src="/assets/images/resources/ricemanu.png"
                      className="img-fluid"
                      alt="HRM Exports"
                    />
                  </div>
                  <div className="about-one__experience">
                    <div className="about-one__experience-shape-1">
                      <img
                        src="/assets/images/shapes/about-one-experience-shape-1.png"
                        alt="HRM Exports"
                      />
                    </div>
                    <div className="about-one__experience-shape-2">
                      <img
                        src="/assets/images/shapes/about-one-experience-shape-2.png"
                        alt="HRM Exports"
                      />
                    </div>
                    <div className="about-one__experience-year">
                      <h3 className="odometer" data-count="50">
                        00
                      </h3>
                    </div>
                    <div className="about-one__experience-text">
                      <p>
                        Years of <br /> experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-12">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="HRM Exports"
                    />
                  </div>
                  <h2
                    className="section-title__title wow slideInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    HRM Exports
                  </h2>
                  <h1
                    className="section-title__title wow slideInUp"
                    style={{ fontSize: '30px' }}
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    Rice Manufacturers, Suppliers &amp; Exporters in India
                  </h1>
                </div>
                <p
                  className="about-one__text-1 wow slideInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  Discover the Magic of Rice - Simple, Satisfying, and Versatile
                </p>
                <p
                  className="about-one__text-2 text-justify wow slideInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  HRM Exports is a leading exporter of premium quality
                  agricultural products, known for its commitment to excellence
                  and customer satisfaction. With a strong focus on quality
                  control and sustainable practices. We delivers a diverse range
                  of products globally, ensuring timely delivery and competitive
                  pricing to meet international standards.
                </p>
                <p
                  className="about-one__text-2 text-justify wow slideInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  In a commodity market, Competitive prices are given, and
                  supplier options are a necessity. Too often, though,
                  that&apos;s the whole story in the rice industry &ndash; which
                  is why HRM Exports set out to be more than you&apos;ve come to
                  expect. We understand the benefits of a closer relationship
                  with the customer, HRM Exports has taken the industrial rice
                  supply chain back to its roots &ndash; and into the 21st
                  century
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: '100px' }}>
            <div className="col-xl-8 d-flex align-items-center">
              <div>
                <p
                  className="about-one__text-1 wow slideInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  Today, we at HRM Exports commit to achieve customer
                  satisfaction with quality, quantity and services.
                </p>
                <p
                  className="about-one__text-2 text-justify wow slideInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  We are delighted to provide consumers fine food with rice of
                  unmatched quality. We work with farmers, partner food
                  companies and respond to the needs of our customers to ensure
                  that nothing but the very best rice and rice products enamor
                  your table, making every meal of the day, fulfilling and
                  cherishing.
                </p>
                <div
                  className="about-one__btn-box wow slideInUp"
                  data-wow-delay="700ms"
                  data-wow-duration="1500ms"
                >
                  <Link
                    href="/about"
                    className="about-one__btn thm-btn transition-all duration-300 hover:bg-hrm-lime hover:text-hrm-dark hover:shadow-xl"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="about-one__left about-one__right">
                <div
                  className="about-one__img-box wow slideInLeft transition-transform duration-500 hover:-translate-y-1"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="about-one__img">
                    <img
                      src="/assets/images/resources/quantity.webp"
                      className="img-fluid"
                      alt="HRM Exports"
                    />
                  </div>
                  <div className="about-one__img-two">
                    <img
                      src="/assets/images/resources/about-three-img-2.jpg"
                      alt="HRM Exports"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
