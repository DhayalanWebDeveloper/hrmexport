export default function ReasonsToChoose() {
  const reasons = [
    {
      icon: "/assets/images/icon/8.png",
      title: "Quality Assurance",
      text:
        "HRM Exports , the name itself promises that you’re getting an quality product that has been grown, harvested, stored and cared.",
    },
    {
      icon: "/assets/images/icon/9.png",
      title: "Advanced Milling & Processing",
      text:
        "By using state-of-the-art milling and processing, we are at HRM Exports, the milling and processing the paddy with international quality standards.",
    },
    {
      icon: "/assets/images/icon/10.png",
      title: "Ageing",
      text:
        "Our rice will never fail to impress our customers because they are perfectly aged. The result is guaranteed fluffy, super smooth and finest grains.",
    },
    {
      icon: "/assets/images/icon/12.png",
      title: "Advanced Testing",
      text:
        "Samples of each procured rice sample go through intense testing by technicians and are approved only after certifications from suitable authorities.",
    },
    {
      icon: "/assets/images/icon/13.png",
      title: "On Time Delivery",
      text:
        "We seek to meet the needs of all clients by delivering varieties of rice on time at various price ranges, without compromising on the quality",
    },
  ];

  return (
    <section
      className="contact-one bdmbcolor relative bg-no-repeat"
      style={{
        padding: "79px 0 95px",
        backgroundImage: "url('/assets/static/Reasons-to-Choose-HRM.webp')",
        backgroundSize: "cover",
      }}
    >
      <div className="contact-one__img">
        <div className=" "></div>
      </div>
      <div className="container relative z-10">
        <div className="row">
          <div className="col-xl-5"></div>
          <div className="col-xl-7 col-lg-12 col-md-12">
            <div className="why-choose-one__left">
              <div className="section-title text-left">
                <h3 className="section-title__title text-hrm-green">
                  Reasons to Choose HRM Exports
                </h3>
              </div>
              <div className="why-choose-one__points-list mt-30">
                {reasons.map((r, i) => (
                  <ul
                    key={i}
                    className="why-choose-one__points list-unstyled mt-10 wow fadeInUp"
                    data-wow-delay={`${100 + i * 100}ms`}
                    data-wow-duration="1500ms"
                  >
                    <li className="group transition duration-300 hover:-translate-y-1 hover:shadow-xl rounded-md">
                      <div className="icon transition-transform duration-300 group-hover:scale-110">
                        <img src={r.icon} alt="HRM Exports" />
                      </div>
                      <div className="content">
                        <h3 className="transition-colors duration-300 group-hover:text-hrm-green">
                          {r.title}
                        </h3>
                        <p>{r.text}</p>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
