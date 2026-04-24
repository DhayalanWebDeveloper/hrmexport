'use client';

import { useEffect } from 'react';
import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function CertificatesPage() {
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
              "url(https://www.hrmexports.com/assets/images/backgrounds/certi-bg-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Certificates</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Certifications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="services-page">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__icon">
              <img
                src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png"
                alt="Certifications"
              />
            </div>
            <h1 className="section-title__title">Certifications</h1>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/storage/images/650b12619ef97.jpg"
                    alt="ISO 22000 - 2018"
                    className="img-fluid"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#">ISO 22000 - 2018</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/storage/images/650b12ae97c9c.jpg"
                    alt="GMP Certificates"
                    className="img-fluid"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#">GMP Certificates</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/storage/images/650b12cab2585.jpg"
                    alt="Quality Management System"
                    className="img-fluid"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#">Quality Management System</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/storage/images/650b12feea327.jpg"
                    alt="Gst certificate"
                    className="img-fluid"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#">Gst certificate</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/storage/images/650b1319e9139.jpg"
                    alt="HRM Central FSSAI"
                    className="img-fluid"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#">HRM Central FSSAI</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/storage/images/6517bd62d0932.jpg"
                    alt="APEDA"
                    className="img-fluid"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#">APEDA</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <img
                    src="https://www.hrmexports.com/storage/images/652bacbf374bd.jpg"
                    alt="HACCP"
                    className="img-fluid"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#">HACCP</a>
                </h3>
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
