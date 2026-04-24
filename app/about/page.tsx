import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import ActionButtons from "@/components/ActionButtons";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      <Header />

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/abt.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>About Us</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section - Who We Are */}
      <section className="about-four pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-four__left wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/about-1.png"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="Who we are"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="Who we are 2"
                    />
                  </div>
                  <span
                    className="section-title__tagline wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    Who we are
                  </span>
                  <h1
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    Welcome to HRM Exports
                  </h1>
                </div>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  {" "}
                  In a commodity market, competitive prices are a given, and
                  supplier options are a necessity. Too often, though, that&apos;s
                  the whole story in the rice industry &ndash; which is why HRM
                  Exports a Rice Manufacturers, Suppliers &amp; Exporters in India
                  set out to be more than you&apos;ve come to expect.We understand
                  the benefits of a closer relationship with the customer, HRM
                  Exports has taken the industrial rice supply chain back to its
                  roots &ndash; and into the 21st century. We know what works and
                  what doesn&apos;t &ndash; and because we&apos;ve built HRM
                  Exports from the ground up, nothing prevents us from doing
                  everything right.HRM Exports is a supplier with something more
                  to offer! Today, we at HRM Exports commit to achieve customer
                  satisfaction with quality, quantity, services and are delighted
                  to provide consumers fine food with rice of unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-50">
            <div className="col-xl-6">
              <div className="">
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="700ms"
                  data-wow-duration="1500ms"
                >
                  We work with farmers, partner food companies and respond to the
                  needs of our customers to ensure that nothing but the very best
                  rice and rice products enamor your table, making every meal of
                  the day, fulfilling and cherishing. All of this evolves from a
                  dedicated team involved in stringent Quality Control, with fully
                  equipped QC centers and micro-biological labs, manufacturing and
                  processing facilities that are ISO 9001:2008 certified.
                </p>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="800ms"
                  data-wow-duration="1500ms"
                >
                  We are a group of young and enthusiastic individuals who have
                  come together for a single goal of being a global leader in rice
                  industry. We believe that India is known for our Basmati Rice,
                  Non-Basmati export is key to our country&apos;s growth.
                  Prioritizing in exporting Indian Basmati &amp; Non-Basmati, we
                  are also analysts and researchers who possess an up to date
                  global food market database to help you. HRM Export is a leading
                  Rice Manufacturers, Suppliers &amp; Exporters in India of all
                  kinds of Indian Basmati Rice &amp; Non-Basmati Rice to a number
                  of destinations around the globe. We keep our core focus on
                  commitment to the highest quality standards and gain the trust
                  and and appreciation of our customers.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-four__left about-four__right wow fadeInUp"
                data-wow-delay="900ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/about-2.png"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="about-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, What We Do, Company Responsibility, Social Initiatives */}
      <section className="about-four">
        <div className="container">
          {/* Vision */}
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-four__left wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/vision.png"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="vision"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="Vision 2"
                    />
                  </div>
                  <h3
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    Vision
                  </h3>
                </div>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  We aim to provide consistently fine quality of rice for
                  connoisseurs worldwide and innovation marks our approach to
                  marching towards excellence in our field. Our objective is to be
                  consistent in quality and assure timely delivery of finest
                  materials manufactured using ethical processes and help in the
                  prosperity of everyone concerned.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="row pt-50">
            <div className="col-xl-6">
              <div className="">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="Mission 1"
                    />
                  </div>
                  <h3
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="1500ms"
                  >
                    Mission
                  </h3>
                </div>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  Our mission is to make the world experience the true Indian and
                  Natural flavours in its authentic form that brings joy and
                  happiness to the palates of global consumers. Our vision is to
                  make HRM Exports as the most trusted and preferred food brand in
                  Rice from India in the global markets.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-four__left about-four__right wow fadeInUp"
                data-wow-delay="700ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/mission.png"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="Mission"
                />
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="row pt-50">
            <div className="col-xl-6">
              <div
                className="about-four__left wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/what_we_do.png"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="What We Do 1"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="What We Do"
                    />
                  </div>
                  <h3
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    What We Do
                  </h3>
                </div>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  We provide customers with the service of Premium quality
                  Basmati Rice, Non-Basmati Rice, export from India. From helping
                  you find the right buyers to packaging your food and sending it
                  off, our complete services will ensure that you face absolutely
                  no difficulties. It is not our endeavour to make profits by
                  providing low quality food products to our customers. Good
                  Quality has always been on our mind to deliver the best quality
                  food items, our team is constantly doing research to provide
                  freshness intact packaging, developing new methods of storing
                  food items, so that the nutritional values of the same is not
                  lost while in storage
                </p>
              </div>
            </div>
          </div>

          {/* Company Responsibility */}
          <div className="row pt-50">
            <div className="col-xl-6">
              <div className="">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="Company Responsibility"
                    />
                  </div>
                  <h3
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="1500ms"
                  >
                    Company Responsibility
                  </h3>
                </div>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  With a vision to bring authentic Indian delicacies to the whole
                  world, HRM Exports envisions to improve lives in communities
                  they live around, protect workplace rights, respect people,
                  support missions that help people have a better life, provide
                  good jobs, world class quality products and a healthy
                  environment to all around.
                </p>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  At workplace, HRM Exports maintains high standards for fair and
                  dignified treatment of all the people. For everyone, it is not
                  just a place to work, but like another home and everybody is
                  like a big family, closely bonded with each other.
                </p>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  The company believes that an organisation is as good as the
                  people who work for it &ndash; their combined talents, skills,
                  knowledge, experience and passion makes them who they are. Hence
                  HRM Exports continuous goal is to inspire and motivate their
                  people to hone their talents, increase their knowledge &amp;
                  skills and achieve extraordinary results at their workplace.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="about-four__left about-four__right wow fadeInUp"
                data-wow-delay="700ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/company_responsibility.png"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="company_responsibility"
                />
              </div>
            </div>
          </div>

          {/* Our Social Initiatives */}
          <div className="row pt-50">
            <div className="col-xl-6">
              <div
                className="about-four__left wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  src="/assets/images/resources/our_social_initatives.png"
                  className="img-fluid transition-transform duration-500 hover:scale-105"
                  alt="our_social_initatives"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-four__right">
                <div className="section-title text-left">
                  <div className="section-title__icon">
                    <img
                      src="/assets/images/icon/section-title-icon.png"
                      alt="Our Social Initatives"
                    />
                  </div>
                  <h3
                    className="section-title__title wow fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="1500ms"
                  >
                    Our Social Initatives
                  </h3>
                </div>
                <p
                  className="about-four__text text-justify wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  The Company&apos;s CSR is in alignment with the initiatives on
                  Eradication of extreme hunger, Enhancement of livelihood
                  projects, Rural development of host communities, Promoting
                  Education, Sanitation Facilities, healthcare, and creating
                  social, environmental, and economic value to the society.
                  Further Company is committed to improving the quality of
                  education and this Company is continuously taking initiatives so
                  that education can reach everyone.
                </p>
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
