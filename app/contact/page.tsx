import EnquiryForm from "@/components/EnquiryForm";
import Map from "@/components/Map";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="page-wrapper">

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/contact-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Contact</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="contact-page-section">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__icon">
              <img
                src="/assets/images/icon/section-title-icon.png"
                alt="Get in touch with us"
              />
            </div>
            <span className="section-title__tagline">Get in touch with us </span>
            <h1 className="section-title__title">Contact with us now</h1>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/* Form Column */}
              <div className="form-column col-md-7 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <div className="section-title text-left">
                    <h2 className="section-title__title">
                      Feel Free to fill the From
                    </h2>
                  </div>
                  {/* Contact Form */}
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
                            defaultValue=""
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="subject"
                            defaultValue=""
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            defaultValue=""
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
                            className="theme-btn btn-style-one transition-all duration-300 hover:brightness-110"
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
                      <i className="icon-address"></i>
                      Factory Address : Sagga Road, Vill. Nariana (Taraori)
                      India, Karnal-132001, India
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope"></i>
                      <a
                        href="mailto:info@hrmexports.com"
                        className="text-white transition-colors duration-300 hover:text-[#afc836]"
                      >
                        info@hrmexports.com
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      Mr. Vipin Garg :
                      <a
                        href="tel:+91 73 5700 0031"
                        className="text-white transition-colors duration-300 hover:text-[#afc836]"
                      >
                        {" "}
                        +91 73 5700 0031
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      Mr. Aakash Garg :{" "}
                      <a
                        href="tel:+91 73 5100 0031"
                        className="text-white transition-colors duration-300 hover:text-[#afc836]"
                      >
                        +91 73 5100 0031
                      </a>
                    </li>
                  </ul>
                  <ul className="social-icon-four">
                    <li className="follow">Follow on: </li>
                    <li>
                      {" "}
                      <a
                        href="https://www.facebook.com/hrmexport"
                        className="transition-colors duration-300 hover:text-[#afc836]"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://www.linkedin.com/company/hrmexports/"
                        className="transition-colors duration-300 hover:text-[#afc836]"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://instagram.com/hrmexports"
                        className="transition-colors duration-300 hover:text-[#afc836]"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://www.twitter.com/hrm"
                        className="transition-colors duration-300 hover:text-[#afc836]"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Map />
      <EnquiryForm />
    </div>
  );
}
