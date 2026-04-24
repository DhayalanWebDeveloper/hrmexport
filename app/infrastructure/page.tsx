import EnquiryForm from "@/components/EnquiryForm";
import Link from "next/link";

export default function InfrastructurePage() {
  return (
    <div className="page-wrapper">

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/infra-bg-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Infrastructure</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Infrastructure Intro */}
      <section className="about-four pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div
                className="about-four__left wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/infra-1.jpg"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="infra"
                />
              </div>
            </div>
            <div className="col-xl-9">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="Company"
                    />
                  </div>
                  <span
                    className="section-title__tagline wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    Company
                  </span>
                  <h1
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    Infrastructure
                  </h1>
                </div>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  Customer satisfaction is our first priority. From the very
                  initial stages of our journey we have always believed that our
                  customers deserve nothing less than the best. So it has been a
                  constant endeavour on our part to strive for excellence. HRM
                  Exports&apos; major manufacturing and processing facility is
                  ideally located at Karnal. The strategic location of plant
                  ensures expeditious transportation of harvested paddy from
                  specially identified collection centre across paddy growing
                  belt of Northern India, thus minimizing transit damage to the
                  delicate grain rice.
                </p>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  HRM Exports has become one of the most famous hub for producing
                  one of the best quality of 1121 raw/steam and parboiled /
                  Sella. The rice crop grown is of superior quality due to the
                  presence of heavy soil. Our daily production capacity is 230
                  ton metric tons. Our rice plants are ISO 9001: 2000, and
                  certified. Our rice mills are equipped with latest technology
                  &amp; machinery which involves rice milling, processing and
                  packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Page - Infrastructure Gallery */}
      <section className="services-page pt-45">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/assets/images/resources/history-1.jpg"
                    alt="history1"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12  ">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/assets/images/resources/history-3.jpg"
                    alt="history3"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12  ">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/assets/images/resources/history-5.jpg"
                    alt="history5"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12  ">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/assets/images/resources/history-7.jpg"
                    alt="history7"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/assets/images/resources/history-8.jpg"
                    alt="history8"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 ">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/assets/images/resources/history-9.jpg"
                    alt="history9"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
}
