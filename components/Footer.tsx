import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        backgroundImage:
          "url(https://www.hrmexports.com/assets/images/backgrounds/footer-bg-1.jpg)",
        backgroundPosition: "50% 50%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="site-footer__top">
        <div className="container">
          <div className="row">
            {/* Contact Details Single - Factory Address */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                className="contact-details__single wow rubberBand"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="contact-details__single-inner">
                  <div
                    className="contact-details__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/contact-details-shape-1.png)",
                    }}
                  ></div>
                  <div className="contact-details__icon">
                    <span className="icon-address"></span>
                  </div>
                  <h4 className="contact-details__title">Factory Address:</h4>
                  <p className="contact-details__text">
                    {" "}
                    Sagga Road, Vill. Nariana (Taraori) India, Karnal-132001, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details Single - Contact */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                className="contact-details__single wow rubberBand"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="contact-details__single-inner">
                  <div
                    className="contact-details__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/contact-details-shape-1.png)",
                    }}
                  ></div>
                  <div className="contact-details__icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <h4 className="contact-details__title">Contact</h4>
                  <p className="contact-details__text">
                    Mr. Vipin Garg :
                    <a href="tel:+91 73 5700 0031"> +91 73 5700 0031</a>
                    <br />
                    Mr. Aakash Garg :
                    <a href="tel:+91 73 5100 0031"> +91 73 5100 0031</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details Single - Email */}
            <div className="col-xl-4 col-lg-4">
              <div
                className="contact-details__single wow rubberBand"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="contact-details__single-inner"
                  style={{ padding: "42px 50px 97px" }}
                >
                  <div
                    className="contact-details__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/contact-details-shape-1.png)",
                    }}
                  ></div>
                  <div className="contact-details__icon">
                    <span className="icon-email"></span>
                  </div>
                  <h4 className="contact-details__title">E- Mail Us</h4>
                  <p className="contact-details__text">
                    <a href="mailto:info@hrmexports.com">info@hrmexports.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social + Quick Links */}
            <div className="foot-1">
              <div
                className="site-footer__social mt-50 wow rubberBand text-center"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <a
                  href="https://www.facebook.com/hrmexport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-hrm-lime"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/hrmexports/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-hrm-lime"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://instagram.com/hrmexports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-hrm-lime"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.twitter.com/hrm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-hrm-lime"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <div className="mt-50 text-center">
                <a
                  href="https://www.hrmexports.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white wow rubberBand"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  Home
                </a>
                <a
                  href="https://www.hrmexports.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-25 text-white wow rubberBand"
                  data-wow-delay="700ms"
                  data-wow-duration="1500ms"
                >
                  {" "}
                  About
                </a>
                <a
                  href="https://www.hrmexports.com/quality-control"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-25 text-white wow rubberBand"
                  data-wow-delay="1100ms"
                  data-wow-duration="1500ms"
                >
                  Quality Control
                </a>
                <a
                  href="https://www.hrmexports.com/infrastructure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-25 text-white wow rubberBand"
                  data-wow-delay="1200ms"
                  data-wow-duration="1500ms"
                >
                  Infrastructure
                </a>
                <a
                  href="https://www.hrmexports.com/recipes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-25 text-white wow rubberBand"
                  data-wow-delay="1300ms"
                  data-wow-duration="1500ms"
                >
                  Recipes
                </a>
                <a
                  href="https://www.hrmexports.com/blogs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-25 text-white wow rubberBand"
                  data-wow-delay="1300ms"
                  data-wow-duration="1500ms"
                >
                  Blogs
                </a>
                <a
                  href="https://www.hrmexports.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-25 text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="col-xl-12 mt-50">
              <div className="site-footer__bottom-inner">
                <p>
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-canada.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Canada
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-australia.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Australia
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-sweden.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Sweden
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-germany.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Germany
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-belgium.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Belgium
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-france.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to France
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-italy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Italy
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-nepal.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Nepal
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-netherlands.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Netherlands
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-switzerland.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Switzerland
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.hrmexports.com/basmati-rice/exporter-from-india-to-turkey.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basmati Rice Exporter From India to Turkey
                  </a>
                </p>
                <p
                  className="site-footer__bottom-text wow rubberBand"
                  data-wow-delay="1400ms"
                  data-wow-duration="1500ms"
                >
                  &copy; Copyright 2026 by{" "}
                  <a href="#" className="text-white">
                    HRM Exports
                  </a>{" "}
                  || Develop By{" "}
                  <a
                    href="http://www.hrmexport.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HRM EXPORT
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
