import EnquiryForm from "@/components/EnquiryForm";
import Link from "next/link";

export default function QualityControlPage() {
  return (
    <div className="page-wrapper">

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/quality-1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Quality Control</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Quality Control</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quality Control Content */}
      <section className="about-four">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-four__left wow fadeInUp"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/quality_contol-1.png"
                  alt="quality_contol"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="HRM Exports"
                    />
                  </div>
                  <span
                    className="section-title__tagline wow fadeInUp"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    HRM Exports
                  </span>
                  <h1
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="700ms"
                    data-wow-duration="1500ms"
                  >
                    Quality Control
                  </h1>
                </div>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="800ms"
                  data-wow-duration="1500ms"
                >
                  Starting from purchasing to the whole process up to the sales
                  undergo a number of quality checks.
                </p>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="900ms"
                  data-wow-duration="1500ms"
                >
                  Authorised representatives of our company travel extensively
                  through the paddy fields during harvest season and care is
                  taken to see that only the best available paddy is purchased.
                  The paddy purchased is properly dried, transported and stocked
                  in the paddy warehouses. In our hi-tech milling plant every
                  stage conforms to the international standards and stringent
                  guidelines of process control and meticulously checked at every
                  stage to ensure uniformity of grain without destroying basic
                  quality of grain. World class state-of-the-art modern
                  computerised plant installed at HRM Exports has automatically
                  controlled inflow and outflow system. Our plants are equipped
                  with most modern Pre-cleaners, De-stoners, Precision-sizers,
                  Graders, Paddy Separators, De- huskers, etc. Pre-cleaners,
                  Magnets and Metal Detectors are used at various stages to ward
                  off foreign material
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-30">
            <div className="col-xl-4 mb-5">
              <img
                src="/assets/images/resources/qua-1.jpg"
                alt="qua-1"
                className="img-fluid rounded transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="col-xl-4 mb-5">
              <img
                src="/assets/images/resources/qua-2.jpg"
                alt="qua-2"
                className="img-fluid rounded transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="col-xl-4 mb-5">
              <img
                src="/assets/images/resources/qua-3.jpg"
                alt="qua-3"
                className="img-fluid rounded transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="col-xl-12">
              <div
                className="wow fadeInUp"
                data-wow-delay="1000ms"
                data-wow-duration="1500ms "
              >
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="800ms"
                  data-wow-duration="1500ms"
                >
                  At HRM Exports, maintaining stringent quality parameter
                  controls is crucial to ensure that the exported rice meets
                  international standards and customer expectations. Some
                  essential quality parameters that are controlled during rice
                  export include:
                </p>
                <div className="pricing-one__list-box">
                  <ul className="list-unstyled pricing-one__list">
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">
                            Grain Size and Shape :
                          </span>{" "}
                          Rice grains should have a uniform size and shape,
                          which is essential for consistent cooking and
                          appearance in the final product.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">Broken Grains:</span> The
                          percentage of broken grains is an important quality
                          parameter. Customers often specify the maximum allowed
                          percentage of broken grains in the exported rice.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">Moisture Content:</span>{" "}
                          Controlling moisture content is critical to prevent
                          mold growth and maintain the rice&apos;s quality during
                          transportation and storage.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">
                            Foreign Matter and Impurities:
                          </span>{" "}
                          Exported rice should be free from any foreign matter,
                          such as stones, dust, husks, or insects.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">
                            Color and Appearance:
                          </span>{" "}
                          The color and appearance of rice are significant
                          factors in customer preferences. Exported rice should
                          have a consistent, appealing visual appearance.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">Cooking and Taste: </span>{" "}
                          The aroma and taste of rice greatly influence consumer
                          satisfaction. Exported rice should have the
                          characteristic aroma and taste associated with its
                          variety.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">Purity :</span> Ensuring
                          the purity of the rice variety is essential to meet
                          specific customer demands and avoid mixing different
                          rice types.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">
                            Packaging and Labeling:
                          </span>{" "}
                          Proper packaging is crucial for protecting the rice
                          during transit. Clear and accurate labeling helps
                          customers identify the product&apos;s origin and
                          specifications.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">Pesticide Residues:</span>{" "}
                          Exported rice should comply with international
                          regulations regarding the permissible levels of
                          chemical residues, including pesticides and heavy
                          metals.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fa-solid fa-leaf"></i>
                      </div>
                      <div className="text">
                        <p className="text-justify">
                          <span className="font-w-800">
                            Shelf Life and Storage Stability:{" "}
                          </span>{" "}
                          The rice should have a reasonable shelf life, and its
                          quality should remain stable during transportation and
                          storage.
                        </p>
                      </div>
                    </li>
                  </ul>
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
