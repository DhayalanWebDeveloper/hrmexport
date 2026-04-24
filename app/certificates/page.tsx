import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import ActionButtons from "@/components/ActionButtons";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <div className="page-wrapper">
      <Header />

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/certi-bg-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Certificates</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Certifications </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="services-page">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__icon">
              <img
                src="/assets/images/icon/section-title-icon.png"
                alt="Certifications"
              />
            </div>
            <h1 className="section-title__title">Certifications </h1>
          </div>
          <div className="row">
            {/* ISO 22000 */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/storage/images/650b12619ef97.jpg"
                    alt="ISO 22000 - 2018"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">ISO 22000 - 2018</a>
                </h3>
              </div>
            </div>
            {/* GMP */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/storage/images/650b12ae97c9c.jpg"
                    alt="GMP Certificates"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">GMP Certificates</a>
                </h3>
              </div>
            </div>
            {/* QMS */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/storage/images/650b12cab2585.jpg"
                    alt="Quality Management System"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">Quality Management System</a>
                </h3>
              </div>
            </div>
            {/* GST */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/storage/images/650b12feea327.jpg"
                    alt="Gst certificate"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">Gst certificate</a>
                </h3>
              </div>
            </div>
            {/* FSSAI */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/storage/images/650b1319e9139.jpg"
                    alt="HRM Central FSSAI"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">HRM Central FSSAI</a>
                </h3>
              </div>
            </div>
            {/* APEDA */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/storage/images/6517bd62d0932.jpg"
                    alt="APEDA"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">APEDA</a>
                </h3>
              </div>
            </div>
            {/* HACCP */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <img
                    src="/storage/images/652bacbf374bd.jpg"
                    alt="HACCP"
                    className="img-fluid transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="services-one__title">
                  <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">HACCP</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquiryForm />
      <Footer />
      <ActionButtons />
    </div>
  );
}
