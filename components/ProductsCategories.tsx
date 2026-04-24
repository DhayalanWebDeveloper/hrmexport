import Link from 'next/link';

export default function ProductsCategories() {
  return (
    <section
      className="feature-one feature-one-two"
      style={{
        backgroundImage: "url(https://www.hrmexports.com/assets/images/backgrounds/2397327.png)",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png" alt="HRM Exports" />
          </div>
          <h3
            className="section-title__title wow slideInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            Products Categories
          </h3>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <Link href="/indian-basmati-rice.html" className="block group">
              <div className="cat-box text-center transition-all duration-300 group-hover:drop-shadow-lg">
                <img
                  src="https://www.hrmexports.com/storage/app/public/images/67612c8e2068a.jpg"
                  className="img-fluid transition-transform duration-300 group-hover:-translate-y-2"
                  alt="INDIAN BASMATI RICE"
                />
                <p className="mt-3 transition-colors duration-300 group-hover:text-[#016327]">INDIAN BASMATI RICE</p>
              </div>
            </Link>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <Link href="/indian-non-basmati-rice.html" className="block group">
              <div className="cat-box text-center transition-all duration-300 group-hover:drop-shadow-lg">
                <img
                  src="https://www.hrmexports.com/storage/app/public/images/67612c98327dc.jpg"
                  className="img-fluid transition-transform duration-300 group-hover:-translate-y-2"
                  alt="INDIAN NON BASMATI RICE"
                />
                <p className="mt-3 transition-colors duration-300 group-hover:text-[#016327]">INDIAN NON BASMATI RICE</p>
              </div>
            </Link>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <Link href="/pesticide-residue-free-rice.html" className="block group">
              <div className="cat-box text-center transition-all duration-300 group-hover:drop-shadow-lg">
                <img
                  src="https://www.hrmexports.com/storage/app/public/images/67612c9db5317.jpg"
                  className="img-fluid transition-transform duration-300 group-hover:-translate-y-2"
                  alt="PESTICIDE RESIDUE FREE RICE"
                />
                <p className="mt-3 transition-colors duration-300 group-hover:text-[#016327]">PESTICIDE RESIDUE FREE RICE</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
