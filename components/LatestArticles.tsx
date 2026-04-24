import Link from 'next/link';

export default function LatestArticles() {
  return (
    <section className="blog-two relative">
      <div
        className="blog-two__bg"
        style={{
          backgroundImage:
            'url(https://www.hrmexports.com/assets/images/backgrounds/blog-two-bg.png)',
        }}
      ></div>
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img
              src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png"
              alt="HRM Exports"
            />
          </div>
          <span className="section-title__tagline">Our Blogs Updates</span>
          <h3 className="section-title__title">
            Latest articles &amp; Blogs
          </h3>
        </div>
        <div className="row">
          {/* Blog Two Single Start */}
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="blog-two__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="blog-two__img-box">
                <div className="blog-two__img">
                  <img
                    src="https://www.hrmexports.com/storage/images/69e210f31f926.png"
                    alt="HRM Exports"
                  />
                </div>
                <div className="blog-two__date">
                  <p>17 Apr, 2026</p>
                </div>
                <div className="blog-two__content">
                  <h3 className="blog-two__title">
                    <Link href="/blogs/top-rice-manufacturers-in-india-for-consistent-supply">
                      Top Rice Manufacturers in India for Consistent Supply
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Two Single End */}
          {/* Blog Two Single Start */}
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="blog-two__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="blog-two__img-box">
                <div className="blog-two__img">
                  <img
                    src="https://www.hrmexports.com/storage/images/69b29d0b236d3.jpg"
                    alt="HRM Exports"
                  />
                </div>
                <div className="blog-two__date">
                  <p>12 Mar, 2026</p>
                </div>
                <div className="blog-two__content">
                  <h3 className="blog-two__title">
                    <Link href="/blogs/how-rice-suppliers-maintain-quality">
                      How Rice Suppliers Maintain Quality, Packaging, and
                      Global Standards?
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Two Single End */}
          {/* Blog Two Single Start */}
          <div
            className="col-xl-4 col-lg-4 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="blog-two__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="blog-two__img-box">
                <div className="blog-two__img">
                  <img
                    src="https://www.hrmexports.com/storage/images/69a016cae83f9.jpg"
                    alt="HRM Exports"
                  />
                </div>
                <div className="blog-two__date">
                  <p>26 Feb, 2026</p>
                </div>
                <div className="blog-two__content">
                  <h3 className="blog-two__title">
                    <Link href="/blogs/top-factors-to-consider-when-selecting-rice-suppliers-from-india">
                      Top Factors to Consider When Selecting Rice Suppliers
                      From India
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Two Single End */}
        </div>
      </div>
    </section>
  );
}
