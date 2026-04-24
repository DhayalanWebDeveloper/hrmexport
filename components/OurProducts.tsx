type Product = {
  name: string;
  image: string;
  href: string;
};

type Tab = {
  id: string;
  label: string;
  products: Product[];
};

const tabs: Tab[] = [
  {
    id: 'basmati',
    label: 'Basmati Rice',
    products: [
      {
        name: '1121 BASMATI RICE',
        image: 'https://www.hrmexports.com/storage/images/67a47e7c2df47.jpg',
        href: 'https://www.hrmexports.com/1121-basmati-rice.html',
      },
      {
        name: '1718 BASMATI RICE',
        image: 'https://www.hrmexports.com/storage/images/67a4884436e27.jpg',
        href: 'https://www.hrmexports.com/1718-basmati-rice.html',
      },
      {
        name: '1509 BASMATI RICE',
        image: 'https://www.hrmexports.com/storage/images/67a48862d9184.jpg',
        href: 'https://www.hrmexports.com/1509-basmati-rice.html',
      },
      {
        name: '1401 BASMATI RICE',
        image: 'https://www.hrmexports.com/storage/images/67a4886ab0837.jpg',
        href: 'https://www.hrmexports.com/1401-basmati-rice.html',
      },
      {
        name: 'PUSA BASMATI RICE',
        image: 'https://www.hrmexports.com/storage/images/67a48872b51e0.jpg',
        href: 'https://www.hrmexports.com/pusa-basmati-rice.html',
      },
      {
        name: 'TRADITIONAL BASMATI RICE',
        image: 'https://www.hrmexports.com/storage/images/67a4887b2a40a.jpg',
        href: 'https://www.hrmexports.com/traditional-basmati-rice.html',
      },
      {
        name: 'BEHROUZ BASMATI RICE',
        image: 'https://www.hrmexports.com/storage/images/66e6b24739d3d.png',
        href: 'https://www.hrmexports.com/behrouz-basmati-rice-exporter-in-india.html',
      },
      {
        name: 'BASMATI RICE',
        image: 'https://www.hrmexports.com/storage/images/66e844d1b5fa6.jpg',
        href: 'https://www.hrmexports.com/basmati-rice.html',
      },
    ],
  },
  {
    id: 'non-basmati',
    label: 'Non-Basmati Rice',
    products: [
      {
        name: 'SUGANDHA RICE',
        image: 'https://www.hrmexports.com/storage/images/67a4898b583bd.jpg',
        href: 'https://www.hrmexports.com/sugandha-rice.html',
      },
      {
        name: 'SHARBATI RICE',
        image: 'https://www.hrmexports.com/storage/images/67a489945bd60.jpg',
        href: 'https://www.hrmexports.com/sharbati-rice.html',
      },
      {
        name: 'PR11 RICE',
        image: 'https://www.hrmexports.com/storage/images/67a489a067bf2.jpg',
        href: 'https://www.hrmexports.com/pr11-rice.html',
      },
      {
        name: 'PR 14 RICE',
        image: 'https://www.hrmexports.com/storage/images/67a489aa3aaf1.jpg',
        href: 'https://www.hrmexports.com/pr-14-rice.html',
      },
      {
        name: 'PARMAL RICE',
        image: 'https://www.hrmexports.com/storage/images/67a489b2438bb.jpg',
        href: 'https://www.hrmexports.com/parmal-rice.html',
      },
      {
        name: 'SONA MASOORI RICE',
        image: 'https://www.hrmexports.com/storage/images/67a489bbaa914.jpg',
        href: 'https://www.hrmexports.com/sona-masoori-rice.html',
      },
    ],
  },
  {
    id: 'pesticide-residue-free',
    label: 'Pesticide Residue Free',
    products: [
      {
        name: 'PESTICIDE RESIDUE FREE STEAM RICE',
        image: 'https://www.hrmexports.com/storage/images/67a48b12bc5ad.jpg',
        href: 'https://www.hrmexports.com/pesticide-residue-free-steam-rice.html',
      },
      {
        name: 'PESTICIDE RESIDUE FREE SELLA RICE',
        image: 'https://www.hrmexports.com/storage/images/67a48b210dd0f.jpg',
        href: 'https://www.hrmexports.com/pesticide-residue-free-sella-rice.html',
      },
      {
        name: 'PESTICIDE RESIDUE FREE GOLDEN SELLA RICE',
        image: 'https://www.hrmexports.com/storage/images/67a48b29b6307.jpg',
        href: 'https://www.hrmexports.com/pesticide-residue-free-golden-sella-rice.html',
      },
      {
        name: 'PESTICIDE RESIDUE FREE RAW RICE',
        image: 'https://www.hrmexports.com/storage/images/67a48b357b962.jpg',
        href: 'https://www.hrmexports.com/pesticide-residue-free-raw-rice.html',
      },
    ],
  },
];

export default function OurProducts() {
  return (
    <section
      className="project-one pt-100"
      style={{
        backgroundImage:
          "url('https://www.hrmexports.com/assets/images/backgrounds/footer-bg-1.jpg')",
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img
              src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png"
              alt="HRM Exports"
            />
          </div>
          <span
            className="section-title__tagline text-white wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            Selection of pure and top grade Rice
          </span>
          <h3
            className="section-title__title wow text-white fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            Our Products
          </h3>
        </div>

        <div className="card border-0 bg-transparent">
          <div className="card-header border-0 bg-transparent">
            <ul
              className="nav nav-tabs justify-content-center border-0 gap-2 flex-wrap"
              role="tablist"
            >
              {tabs.map((tab, idx) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <a
                    className={`nav-link ${idx === 0 ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    href={`#${tab.id}`}
                    id={`${tab.id}-tab`}
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={idx === 0 ? 'true' : 'false'}
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-body">
            <div className="tab-content">
              {tabs.map((tab, idx) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${idx === 0 ? 'show active' : ''}`}
                  id={tab.id}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                >
                  <div className="row">
                    {tab.products.map((product, pidx) => (
                      <div
                        key={product.href}
                        className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-4 wow fadeInUp"
                        data-wow-delay={`${100 + (pidx % 4) * 100}ms`}
                        data-wow-duration="1500ms"
                      >
                        <div className="project-one__single px-2 transition duration-300 hover:shadow-xl hover:-translate-y-1">
                          <div className="project-one__img">
                            <div className="p-inimg">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="img-fluid"
                              />
                            </div>
                            <div className="p-content text-center">
                              <p>
                                <a
                                  href={product.href}
                                  className="oneline"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title={product.name}
                                >
                                  {product.name}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
