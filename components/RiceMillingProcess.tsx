type ProcessStep = {
  id: string;
  tabIcon: string;
  tabLabel: string;
  tabAlt: string;
  title: string;
  paragraph?: string;
  bullets: Array<string | { bold: string; text: string }>;
  image: string;
  imageAlt: string;
  active?: boolean;
};

const tabDelays = [
  "100ms",
  "200ms",
  "300ms",
  "400ms",
  "500ms",
  "600ms",
  "700ms",
  "800ms",
  "900ms",
  "1000ms",
];

const steps: ProcessStep[] = [
  {
    id: "pre_clean",
    tabIcon: "/assets/images/icon/1.png",
    tabLabel: "Pre-cleaning",
    tabAlt: "Pre-cleaning",
    title: "Pre-cleaning",
    paragraph:
      "The starting process of the rice mill process is a pre-cleaning process. It removes impurities from it, such as stones, dust and straw, from the raw paddy. Pre-cleaning machines, including de-stoners and separators, are utilized to ensure the purity and quality of the paddy before further processing.",
    bullets: ["Remove impurities.", "Ensure quality and purity"],
    image: "/assets/images/resources/process-1.jpg",
    imageAlt: "Parboiling",
    active: true,
  },
  {
    id: "parboiling",
    tabIcon: "/assets/images/icon/2.png",
    tabLabel: "Parboiling",
    tabAlt: "Parboiling",
    title: "Parboiling ",
    paragraph:
      "Parboiling is a specialized rice processing technique that involves soaking, steaming, and drying the raw paddy before milling. During the parboiling process the paddy undergoes a partial gelatinization of its starch, resulting in significant changes in the texture of the grain, nutritional profile and cooking characteristics. Parboiling increases the nutritional value of rice by retaining essential nutrients including vitamins and minerals, which may be lost in regular milling.",
    bullets: [" Special processing technique.", "Enhances nutritional value."],
    image: "/assets/images/resources/process-2.jpg",
    imageAlt: "Husking",
  },
  {
    id: "husking",
    tabIcon: "/assets/images/icon/3.png",
    tabLabel: "Husking",
    tabAlt: "Husking",
    title: "Husking ",
    paragraph:
      "After pre-cleaning, husking continues, where the outer husk of the paddy is removed. This isolates the husk from the rice grain. Main equipment used for this include a husking machine, like rubber roll huskers or abrasive-type huskers.",
    bullets: [
      " Husking the layer that is outside. ",
      "More space storage and longer shelf life.",
    ],
    image: "/assets/images/resources/process-3.jpg",
    imageAlt: "Paddy Separation",
  },
  {
    id: "paddy",
    tabIcon: "/assets/images/icon/4.png",
    tabLabel: "Paddy Separation",
    tabAlt: "Paddy Separation",
    title: "Paddy Separation ",
    paragraph:
      "Following husking, paddy separation is performed to separate the unhulled paddy grains from the mixture of paddy and husk. This separation process ensures that only hulled grains proceed to the following milling stages. Paddy separators are used for paddy separation.",
    bullets: ["Apart the Dismantled paddy", "Dividers for Paddy."],
    image: "/assets/images/resources/white.jpg",
    imageAlt: "Whitening",
  },
  {
    id: "whitening",
    tabIcon: "/assets/images/icon/5.png",
    tabLabel: "Whitening",
    tabAlt: "Whitening",
    title: "Whitening ",
    paragraph:
      "Once paddy is separated, whitening comes next, where the bran layer of the rice grain is removed and a whitening result is obtained from it, making the rice look apparent and well-textured.Whitening machines, such as vertical or horizontal abrasive whitening machines, are utilized for efficient and effective grain whitening.",
    bullets: [
      " Removal of the layer that is bran.",
      "Enhances the appearance and improves texture.",
    ],
    image: "/assets/images/resources/process-5.jpg",
    imageAlt: "Polishing",
  },
  {
    id: "polishing",
    tabIcon: "/assets/images/icon/6.png",
    tabLabel: "Polishing",
    tabAlt: "Polishing",
    title: "Polishing ",
    paragraph:
      "Once the bleaching process has been done, polishing can be done to polish the rice grain surface. The polishing is done in a machine with abrasive rollers or friction polishers in order to achieve the needed shine and gloss on the grains. The Polishing step is optional depending on what the final product will look like.",
    bullets: [
      " Smoothening the surface of the rice grain.",
      "Obtain the desired amount of Shine and gloss.",
    ],
    image: "/assets/images/resources/process-6.jpg",
    imageAlt: "Sorting and Grading",
  },
  {
    id: "sorting",
    tabIcon: "/assets/images/icon/7.png",
    tabLabel: "Sorting and Grading",
    tabAlt: "Sorting and Grading",
    title: "Sorting and Grading ",
    paragraph:
      "Following polishing, the rice is subjected to sorting and grading to ensure uniformity in quality, size, and appearance. Electronic colour sorters are employed to detect and remove any remaining impurities, defective grains or foreign materials as well. Grading is done on the basis on the factors such as length, shape and color, ensuring consistent and high-quality rice products.",
    bullets: [
      "Ensure uniformity in quality ,size and appearance.",
      "Utilising the colour machines that are electrical.",
    ],
    image: "/assets/images/resources/process-7.jpg",
    imageAlt: "Packing",
  },
  {
    id: "weighing",
    tabIcon: "/assets/images/icon/7-1.png",
    tabLabel: "Packing",
    tabAlt: "Packing",
    title: "Packing ",
    paragraph:
      "Weighing the rice accurately is crucial to maintain consistency and meet customer expectations. Automated weighing systems are used in our premises .The weight can be set according to the specific packaging requirements, such as kilograms or pounds. it is transferred to bags for containment. Bagging machines are used to efficiently fill the rice into the selected packaging materials, such as plastic bags, jute bags or woven polypropylene bags. The bagging machines ensure uniform filling and sealing of the bags to prevent spillage or contamination. Once filled with the amount of rice they need, the bags also require proper sealing and closing. According to the type of packaging materials to be employed, there are various sealing methods applied: heat sealing and sewing. Sealing them is very important to achieve the right closure in that does not compromise the quality of rice as it moves or is stored.",
    bullets: [
      "When utilising an automated weighing apparatus.",
      "Uniform filling and sealing.",
      "Quality and integrity.",
    ],
    image: "/assets/images/resources/process-9.jpg",
    imageAlt: "Transportation",
  },
  {
    id: "transportation",
    tabIcon: "/assets/images/icon/7-4.png",
    tabLabel: "Transportation",
    tabAlt: "Transportation",
    title: "Transportation",
    bullets: [
      {
        bold: "Loading",
        text: " Rice is loaded on the trucks or other suitable transport vehicles from warehouse of factory. The loading process must be carefully looked after to prevent every kind of damage and maintain quality.",
      },
      {
        bold: "Transportation",
        text: " The rice is taken to the designated port. For long transportation, temperature-controlled trucks or containers can be utilized in order to protect the rice from those factors of environment.",
      },
      {
        bold: "Cargo Security",
        text: " Cargo security is offered during movement to minimize theft and tampering. In most instances, the cargo is left with seals as well as tracking systems that track the integrity of the cargo.",
      },
    ],
    image: "/assets/images/resources/trasnport-1.jpg",
    imageAlt: "Shipping & Logistics",
  },
  {
    id: "ship",
    tabIcon: "/assets/images/icon/7-4.png",
    tabLabel: "Shipping & Logistics",
    tabAlt: "Shipping & Logistics",
    title: " Shipping & Logistics ",
    paragraph:
      "After transportation of goods from factory to the port the process for shipping the goods to the buyer port is carried on by following the below steps:",
    bullets: [
      {
        bold: "Customs Documentation: ",
        text: "Proper documentation, including bills of lading and certificates, is prepared to meet customs and regulatory requirements at the port.",
      },
      {
        bold: "Port Handling:",
        text: "  At the port, customs clearance procedures are undertaken, and rice is prepared to be loaded on ships.",
      },
      {
        bold: "Loading onto the Ship: ",
        text: "Rice is loaded on to container ships or bulk carriers for exports. Proper stowage of the cargo ensures no damage to the same during the period of travel in the sea.",
      },
      {
        bold: "Shipping:",
        text: "  The ship departs for the destination port, which could be in another country. The shipping company manages the sea voyage.",
      },
    ],
    image: "/assets/images/resources/process-12.jpg",
    imageAlt: "img-6",
  },
];

export default function RiceMillingProcess() {
  return (
    <section className="proc">
      <div className="container-fluid mt-5">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img
              src="/assets/images/icon/section-title-icon.png"
              alt="HRM Exports"
            />
          </div>
          <span
            className="section-title__tagline wow fadeInUp"
            data-wow-delay="100ms"
          >
            WHAT WE DO?
          </span>
          <h3
            className="section-title__title wow fadeInUp"
            data-wow-delay="200ms"
          >
            Rice Milling Process
          </h3>
          <p className="mtb-15 w-75 mx-auto leading-relaxed">
            The rice milling operations enable us at HRM Exports to manufacture high-quality rice products which go well in meeting the international requirements and that is ascertained for the need of global customers.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12 ml-auto col-xl-12 mr-auto">
            <div className="card">
              <div className="card-header">
                <ul
                  className="nav nav-tabs justify-content-center"
                  role="tablist"
                >
                  {steps.map((step, idx) => (
                    <li
                      key={step.id}
                      className="nav-item wow bounceIn"
                      data-wow-delay={tabDelays[idx]}
                      data-wow-duration="1500ms"
                    >
                      <a
                        className={`nav-link transition duration-300 hover:text-hrm-lime${
                          step.active ? " active" : ""
                        }`}
                        data-toggle="tab"
                        href={`#${step.id}`}
                        role="tab"
                      >
                        <img src={step.tabIcon} alt={step.tabAlt} />
                        {step.tabLabel.startsWith(" ") ? "" : " "}
                        {step.tabLabel}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-body">
                <div className="container">
                  <div className="tab-content">
                    {steps.map((step) => (
                      <div
                        key={step.id}
                        className={`tab-pane${step.active ? " active" : ""}`}
                        id={step.id}
                        role="tabpanel"
                      >
                        <div className="row">
                          <div className="col-xl-8">
                            <div className="section-title mtb-15 text-left">
                              <h3
                                className={`section-title__title${
                                  step.active ? " wow fadeInUp" : ""
                                }`}
                                {...(step.active
                                  ? {
                                      "data-wow-delay": "200ms",
                                      "data-wow-duration": "1500ms",
                                    }
                                  : {})}
                              >
                                {step.title}
                              </h3>
                            </div>
                            {step.paragraph && (
                              <p
                                className={`text-justify leading-relaxed${
                                  step.active ? " wow fadeInUp" : ""
                                }`}
                                {...(step.active
                                  ? {
                                      "data-wow-delay": "300ms",
                                      "data-wow-duration": "1500ms",
                                    }
                                  : {})}
                              >
                                {step.paragraph}
                              </p>
                            )}
                            <ul className="feature-three__points list-unstyled">
                              {step.bullets.map((bullet, bidx) => {
                                const wowProps =
                                  step.active && bidx < 2
                                    ? {
                                        className:
                                          "wow fadeInUp transition duration-300 hover:translate-x-1",
                                        "data-wow-delay": `${
                                          400 + bidx * 100
                                        }ms`,
                                        "data-wow-duration": "1500ms",
                                      }
                                    : {
                                        className:
                                          "transition duration-300 hover:translate-x-1",
                                      };
                                return (
                                  <li key={bidx} {...wowProps}>
                                    <div className="icon">
                                      <span className="fa-solid fa-leaf"></span>
                                    </div>
                                    <div className=" ml-10">
                                      {typeof bullet === "string" ? (
                                        <p>{bullet}</p>
                                      ) : (
                                        <p className="text-justify">
                                          <b>{bullet.bold}</b>
                                          {bullet.text}
                                        </p>
                                      )}
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div
                            className={`col-xl-4${
                              step.active
                                ? " wow fadeInUp"
                                : ""
                            } overflow-hidden`}
                            {...(step.active
                              ? {
                                  "data-wow-delay": "800ms",
                                  "data-wow-duration": "1500ms",
                                }
                              : {})}
                          >
                            <img
                              src={step.image}
                              alt={step.imageAlt}
                              className="w-100 img-fluid rounded-lg transition duration-300 hover:scale-105 hover:shadow-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <p className="mtb-15 leading-relaxed">
              By implementing  ourself with the rice milling process encompassing pre-cleaning, husking, paddy separation, whitening, polishing, sorting, and grading, weighing and bagging, we optimize our rice export operations. The modern milling techniques and utilizing efficient equipment enhances the quality of our rice products, enable us to meet the demands of international customers and establish a reputation as a reliable rice exporter in the global market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
