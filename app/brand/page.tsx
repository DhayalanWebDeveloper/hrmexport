import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import ActionButtons from "@/components/ActionButtons";
import Link from "next/link";

export default function BrandPage() {
  return (
    <div className="page-wrapper">
      <Header />

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/storage/images/651304c2cd4dd.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Brands</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Brands</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Behrouz Intro */}
      <section className="about-four pt-5 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12"></div>
          </div>
          <div className="row">
            <div className="col-xl-12 mb-5"></div>
            <div className="col-xl-12 d-flex justify-content-center align-items-center">
              <div>
                <div className="section-title text-center mb-4">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="HRM EXPORTS"
                    />
                  </div>
                  <span
                    className="section-title__tagline wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    HRM EXPORTS
                  </span>
                  <h1
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <span className="chtxt">Behrouz: </span> The Best Quality
                    Basmati Rice in the World
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-flex align-items-center">
              <div>
                <h4>Historical Inspiration</h4>
                <p
                  className="about-four__text mb-2 wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  The name &ldquo;BEHROUZ&rdquo; draws inspiration from the
                  1700s, a golden era of culinary excellence. It reflects the
                  legacy of a historic kingdom named Behrouz, the kingdom that
                  stands for the origin of the dish &ldquo;BIRYANI&rdquo;.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                className="about-four__left boximg1 wow slideInLeft p-0"
                data-wow-delay="100ms"
                data-wow-duration="2500ms"
                style={{
                  position: "relative",
                  display: "block",
                  padding: "54px",
                }}
              >
                <img
                  src="/assets/static/rice-is-common-source-agriculture.jpg"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="bag1"
                />
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 d-flex align-items-center">
              <div>
                <h4>Specialization in Basmati Rice</h4>
                <p
                  className="about-four__text mb-2 wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  The brand specializes in producing the finest 1121 basmati
                  rice, renowned for its premium quality. It offers all three
                  popular variants: Sella, Steam, and Golden, catering to
                  diverse culinary preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy and Expertise */}
      <section
        className="why-choose-one  process-one "
        style={{
          backgroundImage: "url(/assets/images/backgrounds/why-1.png)",
        }}
      >
        <div className="services-two__bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose-one__left">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="HRM Exports"
                    />
                  </div>
                  <h3
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    Legacy and Expertise
                  </h3>
                </div>
                <p
                  className="why-choose-one__text-1 text-justify wow fadeInUp mb-3"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  With 54 years of experience in production, the brand is built
                  on the expertise of four generations. This extensive heritage
                  ensures exceptional quality and a deep understanding of
                  basmati rice cultivation and processing.
                </p>
                <p
                  className="why-choose-one__text-1 text-justify wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  Our premium 1121 Basmati rice is available in three distinct
                  variants, each grain is carefully selectedto meet the diverse
                  preferences and needs
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <img
                src="/assets/static/Legacy-and-Expertise.webp"
                className="img-fluid transition-transform duration-500 hover:scale-105"
                alt="Legacy and Expertise"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature - Three Variants */}
      <section
        className="feature-one  "
        style={{
          backgroundImage:
            "url(/assets/images/backgrounds/2397327.png)",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          paddingTop: "70px",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 mb-3 d-flex align-items-center">
              <div className="row">
                <div
                  data-wow-delay="100ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "100ms",
                    animationName: "fadeInUp",
                  }}
                  className="col-xl-12 col-lg-6 col-md-6 wow fadeInUp animated"
                >
                  <div
                    className="feature-one__single wow fadeInUp mb-0 animated"
                    data-wow-delay="100ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "100ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <h3 className="feature-one__title">
                      <a href="# " className="transition-colors duration-300 hover:text-[#afc836]">
                        Behrouz 1121 Sella Basmati Rice
                      </a>
                    </h3>
                    <p className="feature-one__text mt-15 text-justify">
                      Naturally parboiled, Behrouz 1121 Sella Basmati Rice
                      delivers the goodness of vitamins and unique texture for
                      enhanced biryani or special occasion.
                    </p>
                    <p className="feature-one__text mt-15 text-justify">
                      The long grain aroma-rich rice has long fluffy grains
                      which makes them ideal in every dish preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-12 wow fadeInUp animated"
              data-wow-delay="600ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "fadeInUp",
              }}
            >
              <img
                src="/assets/static/Behrouz-1121-Sella-Basmati-Rice.webp"
                alt="sec"
                className="w-100 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="py-2"></div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-12 mborder mb-3 wow fadeInUp animated"
              data-wow-delay="600ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "fadeInUp",
              }}
            >
              <img
                src="/assets/static/Behrouz-1121-Steam-Basmati-Rice.jpg"
                alt="sec"
                className="w-100 transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 mb-3 d-flex align-items-center">
              <div className="row">
                <div
                  data-wow-delay="100ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "100ms",
                    animationName: "fadeInUp",
                  }}
                  className="col-xl-12 col-lg-6 col-md-6 wow fadeInUp animated"
                >
                  <div
                    className="feature-one__single wow fadeInUp mb-0 animated"
                    data-wow-delay="100ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "100ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <h3 className="feature-one__title">
                      <a href="# " className="transition-colors duration-300 hover:text-[#afc836]">
                        Behrouz 1121 Steam Basmati Rice.
                      </a>
                    </h3>
                    <p className="feature-one__text mt-15 text-justify">
                      Famous for its aroma, Behrouz 1121 Steam Basmati Rice is
                      the rice of choice for daily meals and unusual occasions.
                    </p>
                    <p className="feature-one__text mt-15 text-justify">
                      It&apos;s light and fluffy when cooked and can be served
                      with various dishes including pulao and even during heavy
                      meals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2"></div>
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 mb-3 d-flex align-items-center">
              <div className="row">
                <div
                  data-wow-delay="100ms"
                  style={{
                    visibility: "visible",
                    animationDelay: "100ms",
                    animationName: "fadeInUp",
                  }}
                  className="col-xl-12 col-lg-6 col-md-6 wow fadeInUp animated"
                >
                  <div
                    className="feature-one__single wow fadeInUp mb-0 animated"
                    data-wow-delay="100ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "100ms",
                      animationName: "fadeInUp",
                    }}
                  >
                    <h3 className="feature-one__title">
                      <a href="# " className="transition-colors duration-300 hover:text-[#afc836]">
                        Behrouz 1121 Golden Sella Basmati Rice
                      </a>
                    </h3>
                    <p className="feature-one__text mt-15 text-justify">
                      Behrouz 1121 Golden Sella Basmati Rice is suitable for
                      gourmet recipes and premium dining because of its golden
                      colour and splendid aroma.
                    </p>
                    <p className="feature-one__text mt-15 text-justify">
                      Long slender grains in this rice give a soft and fragrant
                      finish when cooked giving a touch of class to every dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-4 col-md-12 mb-3 wow fadeInUp animated"
              data-wow-delay="600ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "fadeInUp",
              }}
            >
              <img
                src="/assets/static/Behrouz-1121-Golden-Sella-Basmati-Rice.jpg"
                alt="sec"
                className="w-100 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-5">
        <div className="container">
          <div className="section-title mb-4">
            <h3
              className="section-title__title wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <span className="chtxt">
                Packaging That Delivers Freshness,{" "}
              </span>{" "}
              Quality, and Convenience in Every Grain
            </h3>
          </div>
          <ul className="feature-three__points list-unstyled">
            <li
              className="wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <span className="fas fa-leaf"></span>
              </div>
              <div className=" ml-10">
                <p>
                  <b>Versatile Size Options:</b> Available in 1kg, 5kg, and 20kg
                  sizes, to meet a wide range of consumer needs and wants.
                </p>
              </div>
            </li>
            <li
              className="wow fadeInUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <span className="fas fa-leaf"></span>
              </div>
              <div className=" ml-10">
                <p>
                  <b>Premium 3D Pouches:</b> 1 Kg and 5 Kg packs are designed as
                  3D zip and slider pouches that can be reused for easy everyday
                  use.
                </p>
              </div>
            </li>
            <li
              className="wow fadeInUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <span className="fas fa-leaf"></span>
              </div>
              <div className=" ml-10">
                <p>
                  <b>Crystal-Clear Side Gussets:</b> The side gussets have
                  visibility features and show the quality and shine of the
                  basmati rice.
                </p>
              </div>
            </li>
            <li
              className="wow fadeInUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="icon">
                <span className="fas fa-leaf"></span>
              </div>
              <div className=" ml-10">
                <p>
                  <b>Durable 20kg Carton Packaging:</b> The pouches are further
                  packed in robust corrugated carton boxes (20kg) to ensure the
                  bags are safeguarded and the rice remains fresh during transit
                  and storage.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Delivering Needs, Delivering Satisfaction */}
      <section className="py-5" style={{ background: "#c2ce86" }}>
        <div className="container">
          <div className="section-title mb-4">
            <h3
              className="section-title__title wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              Delivering Needs, Delivering Satisfaction
            </h3>
          </div>
          <p>
            The quotes show our dedication to being able to grasp and satisfy
            the unique expectations posed by our customers. We want to obtain
            and sell goods and provide services, which not only meet the basic
            needs but also make the customer happier than he expected. It is our
            goal to enhance the quality, and reliability of goods and services
            and ensure that customers have good experiences with us.
          </p>
        </div>
      </section>

      <EnquiryForm />
      <Footer />
      <ActionButtons />
    </div>
  );
}
