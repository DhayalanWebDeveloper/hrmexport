'use client';

import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
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

    // Load intl-tel-input for country flag on phone input
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js';
    script.onload = () => {
      const phoneInput = document.querySelector('#phone') as HTMLInputElement;
      const hPhoneInput = document.querySelector('#h_phone') as HTMLInputElement;
      if (phoneInput && (window as any).intlTelInput) {
        const iti = (window as any).intlTelInput(phoneInput, {
          initialCountry: 'in',
          separateDialCode: true,
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
        });
        phoneInput.addEventListener('keyup', () => {
          phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
          if (hPhoneInput) {
            hPhoneInput.value = iti.getNumber().replace(/\s+/g, '');
          }
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
      if (script.parentNode) script.parentNode.removeChild(script);
    };
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
              "url(https://www.hrmexports.com/assets/images/backgrounds/contact-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Contact</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-page-section">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__icon">
              <img
                src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png"
                alt="Get in touch with us"
              />
            </div>
            <span className="section-title__tagline">Get in touch with us</span>
            <h1 className="section-title__title">Contact with us now</h1>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/* Form Column */}
              <div className="form-column col-md-7 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <div className="section-title text-left">
                    <h2 className="section-title__title">
                      Feel Free to fill the Form
                    </h2>
                  </div>
                  <div className="contact-form">
                    <form
                      action="https://www.hrmexports.com/contact-save"
                      method="POST"
                      id="contact-form"
                    >
                      <div className="row clearfix">
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            maxLength={20}
                            placeholder="Phone"
                            required
                          />
                          <input type="hidden" name="h_phone" id="h_phone" />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea
                            name="description"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <button
                            type="submit"
                            className="theme-btn btn-style-one"
                          >
                            Send Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Info Column */}
              <div className="info-column col-md-5 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <h2 className="section-title__title">Contact Information</h2>
                  <ul className="list-info">
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      Factory Address : Sagga Road, Vill. Nariana (Taraori)
                      India, Karnal-132001, India
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:info@hrmexports.com" className="text-white">
                        info@hrmexports.com
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      Mr. Vipin Garg :
                      <a href="tel:+91 73 5700 0031" className="text-white">
                        {" "}+91 73 5700 0031
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>
                      Mr. Aakash Garg :{" "}
                      <a href="tel:+91 73 5100 0031" className="text-white">
                        +91 73 5100 0031
                      </a>
                    </li>
                  </ul>
                  <ul className="social-icon-four">
                    <li className="follow">Follow on: </li>
                    <li>
                      <a href="https://www.facebook.com/hrmexport">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/hrmexports/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/hrmexports">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/hrm">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="google-map-two">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55432.20266232951!2d76.80204441241317!3d29.733872675818585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e6bf897401eaf%3A0xfca271b94f5cc8f!2sHRM%20EXPORTS!5e0!3m2!1sen!2sin!4v1691676192671!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}
