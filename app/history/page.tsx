'use client';

import { useEffect } from 'react';
import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function HistoryPage() {
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
              "url(https://www.hrmexports.com/assets/images/backgrounds/history-bg-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>History</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>History</li>
            </ul>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="about-four">
        <div className="timeline">
          <div className="section-title text-center">
            <div className="section-title__icon">
              <img
                src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png"
                alt="Who Are Hrm Exports"
              />
            </div>
            <span
              className="section-title__tagline wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              Who Are Hrm Exports
            </span>
            <h1
              className="section-title__title wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              Our Company History
            </h1>
          </div>
          <section className="timeline">
            <ul>
              <li>
                <div className="content wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      HRM EXPORTS began in
                    </span>
                    <span className="timeline-content-info-date">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      1969
                    </span>
                  </div>
                  <p className="mt-30 text-justify">
                    The story of HRM EXPORTS began in 1969 when Sh. Sewa Ram
                    Garg, a visionary, along with his three brothers, started a
                    rice business with the aim of providing quality rice to the
                    entire world. They established a self rice unit in 1974
                    called M/s Subhash Rice And General Mills in their native
                    village, Kaul, located in District Kaithal.
                  </p>
                </div>
              </li>
              <li>
                <div className="content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      M/s Hanuman Rice Mills established in
                    </span>
                    <span className="timeline-content-info-date">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      1990
                    </span>
                  </div>
                  <p className="mt-30 text-justify">
                    Recognizing the need to enhance quality through modern
                    techniques and expand their business capacities, a new modern
                    unit named M/s Hanuman Rice Mills was established in Taraori
                    District Karnal, Haryana, in 1990. As Taraori is known as
                    the rice bowl of Asia.
                  </p>
                </div>
              </li>
              <li>
                <div className="content wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      Next generation in
                    </span>
                    <span className="timeline-content-info-date">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      1992
                    </span>
                  </div>
                  <p className="mt-30 text-justify">
                    In 1992, the next generation of the Garg family joined the
                    business with a determination to take it to new heights.
                    Their efforts paid off, and in 1993, Hanuman Rice Mills
                    started exporting rice globally to various countries.
                  </p>
                </div>
              </li>
              <li>
                <div className="content wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      Increased Production Capacity in
                    </span>
                    <span className="timeline-content-info-date">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      2002
                    </span>
                  </div>
                  <p className="mt-30 text-justify">
                    To meet the increasing demand and expand production
                    capabilities, a new unit was established in Taraori in 2002.
                    This expansion enabled us to cater to the growing sales
                    requirements.
                  </p>
                </div>
              </li>
              <li>
                <div className="content wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      Infrastructure Modernization
                    </span>
                    <span className="timeline-content-info-date">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      2014
                    </span>
                  </div>
                  <p className="mt-30 text-justify">
                    In 2014, We underwent a significant infrastructure
                    modernization, aligning with the demands of the time.
                    Innovative machineries were added to their facilities,
                    ensuring they could meet the needs and expectations of
                    customers worldwide.
                  </p>
                </div>
              </li>
              <li>
                <div className="content wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="timeline-content-info">
                    <span className="timeline-content-info-title">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      Taking HRM 2.O Forward
                    </span>
                    <span className="timeline-content-info-date">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                      2020
                    </span>
                  </div>
                  <p className="mt-30 text-justify">
                    In 2020, Hanuman Rice Mills underwent a rebranding and
                    adopted a new name, M/s HRM EXPORTS, to further propel their
                    legacy and achievements in the highly competitive global
                    market.
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <div className="container">
          <p
            className="about-four__text text-justify mt-30 wow fadeInUp"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
          >
            Today, HRM EXPORTS has established itself as a renowned name in the
            rice export industry. They export rice to more than 50 countries,
            providing non-pesticide rice that adheres to the quality standards
            set by the European Union and the USA. With a commitment to
            excellence and legacy of 50 years and four generations, HRM EXPORTS
            continues to contribute to the world&#39;s rice market and uphold their
            vision of providing high-quality rice to customers worldwide.
          </p>
        </div>
      </section>

      <EnquiryForm />
      <Footer />
    </div>
  );
}
