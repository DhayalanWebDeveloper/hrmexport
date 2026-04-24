'use client';

import { useEffect } from 'react';
import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function InfrastructurePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.getAttribute('data-wow-delay') || '0ms';
            const duration = el.getAttribute('data-wow-duration') || '1s';
            el.style.animationDelay = delay;
            el.style.animationDuration = duration;
            el.style.visibility = 'visible';
            el.classList.add('animated');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.wow').forEach((el) => {
      (el as HTMLElement).style.visibility = 'hidden';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      <Header />

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(https://www.hrmexports.com/assets/images/backgrounds/infra-bg-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Infrastructure</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                  src="https://www.hrmexports.com/assets/images/resources/infra-1.jpg"
                  className="img-fluid"
                  alt="infra"
                />
              </div>
            </div>
            <div className="col-xl-9">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png"
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
                  Exports' major manufacturing and processing facility is ideally
                  located at Karnal. The strategic location of plant ensures
                  expeditious transportation of harvested paddy from specially
                  identified collection centre across paddy growing belt of
                  Northern India, thus minimizing transit damage to the delicate
                  grain rice.
                </p>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  HRM Exports has become one of the most famous hub for
                  producing one of the best quality of 1121 raw/steam and
                  parboiled / Sella. The rice crop grown is of superior quality
                  due to the presence of heavy soil. Our daily production
                  capacity is 230 ton metric tons. Our rice plants are ISO 9001:
                  2000, and certified. Our rice mills are equipped with latest
                  technology &amp; machinery which involves rice milling, processing
                  and packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Images */}
      <section className="services-page pt-45">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/assets/images/resources/history-1.jpg"
                    alt="history1"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/assets/images/resources/history-3.jpg"
                    alt="history3"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/assets/images/resources/history-5.jpg"
                    alt="history5"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/assets/images/resources/history-7.jpg"
                    alt="history7"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/assets/images/resources/history-8.jpg"
                    alt="history8"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/assets/images/resources/history-9.jpg"
                    alt="history9"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm />
      <Footer />
    </div>
  );
}
