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
        image: '/storage/images/67a47e7c2df47.jpg',
        href: '/1121-basmati-rice',
      },
      {
        name: '1718 BASMATI RICE',
        image: '/storage/images/67a4884436e27.jpg',
        href: '/1718-basmati-rice',
      },
      {
        name: '1509 BASMATI RICE',
        image: '/storage/images/67a48862d9184.jpg',
        href: '/1509-basmati-rice',
      },
      {
        name: '1401 BASMATI RICE',
        image: '/storage/images/67a4886ab0837.jpg',
        href: '/1401-basmati-rice',
      },
      {
        name: 'PUSA BASMATI RICE',
        image: '/storage/images/67a48872b51e0.jpg',
        href: '/pusa-basmati-rice',
      },
      {
        name: 'TRADITIONAL BASMATI RICE',
        image: '/storage/images/67a4887b2a40a.jpg',
        href: '/traditional-basmati-rice',
      },
      {
        name: 'BEHROUZ BASMATI RICE',
        image: '/storage/images/66e6b24739d3d.png',
        href: '/behrouz-basmati-rice-exporter-in-india',
      },
      {
        name: 'BASMATI RICE',
        image: '/storage/images/66e844d1b5fa6.jpg',
        href: '/basmati-rice',
      },
    ],
  },
  {
    id: 'non-basmati',
    label: 'Non-Basmati Rice',
    products: [
      {
        name: 'SUGANDHA RICE',
        image: '/storage/images/67a4898b583bd.jpg',
        href: '/sugandha-rice',
      },
      {
        name: 'SHARBATI RICE',
        image: '/storage/images/67a489945bd60.jpg',
        href: '/sharbati-rice',
      },
      {
        name: 'PR11 RICE',
        image: '/storage/images/67a489a067bf2.jpg',
        href: '/pr11-rice',
      },
      {
        name: 'PR 14 RICE',
        image: '/storage/images/67a489aa3aaf1.jpg',
        href: '/pr-14-rice',
      },
      {
        name: 'PARMAL RICE',
        image: '/storage/images/67a489b2438bb.jpg',
        href: '/parmal-rice',
      },
      {
        name: 'SONA MASOORI RICE',
        image: '/storage/images/67a489bbaa914.jpg',
        href: '/sona-masoori-rice',
      },
    ],
  },
  {
    id: 'pesticide-residue-free',
    label: 'Pesticide Residue Free',
    products: [
      {
        name: 'PESTICIDE RESIDUE FREE STEAM RICE',
        image: '/storage/images/67a48b12bc5ad.jpg',
        href: '/pesticide-residue-free-steam-rice',
      },
      {
        name: 'PESTICIDE RESIDUE FREE SELLA RICE',
        image: '/storage/images/67a48b210dd0f.jpg',
        href: '/pesticide-residue-free-sella-rice',
      },
      {
        name: 'PESTICIDE RESIDUE FREE GOLDEN SELLA RICE',
        image: '/storage/images/67a48b29b6307.jpg',
        href: '/pesticide-residue-free-golden-sella-rice',
      },
      {
        name: 'PESTICIDE RESIDUE FREE RAW RICE',
        image: '/storage/images/67a48b357b962.jpg',
        href: '/pesticide-residue-free-raw-rice',
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
          "url('/assets/images/backgrounds/footer-bg-1.jpg')",
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img
              src="/assets/images/icon/section-title-icon.png"
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
