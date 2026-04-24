import Link from 'next/link';

export default function RiceRecipes() {
  return (
    <section
      className="blog-one"
      style={{
        backgroundImage: "url('assets/static/Rice-Recipes-bg.webp')",
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
          <h3
            className="section-title__title wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            Rice Recipes
          </h3>
        </div>
        <div className="row">
          {/* Blog One single Start */}
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div
              className="blog-one__single wow fadeInUp transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="https://www.hrmexports.com/storage/recipe_images/YIeFrGR0YgdUmOmGzZTCsbMJsOa7sBOwBdctl4LH.jpg"
                    alt="HRM Exports"
                  />
                  <Link href="/mushroom-biryani.html">
                    <span className="blog-one__plus"></span>
                  </Link>
                </div>
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <Link href="/mushroom-biryani.html">Mushroom Biryani</Link>
                </h3>
                <p className="blog-one__text">
                  Mushroom biryani is the classic vegetarian version of biryani
                  with meaty mushrooms, tender fluffy rice and flavorful spices.
                  I sha...
                </p>
              </div>
              <div className="blog-one__hover-content">
                <h3 className="blog-one__hover-title">
                  <Link href="/mushroom-biryani.html">Mushroom Biryani</Link>
                </h3>
                <p className="blog-one__hover-text">
                  Mushroom biryani is the classic vegetarian version of biryani
                  with meaty mushrooms, tender fluffy rice and flavorful spices.
                  I sha...
                </p>
                <div className="blog-one__hover-btn-box">
                  <Link
                    href="/mushroom-biryani.html"
                    className="blog-one__hover-btn"
                  >
                    Read More
                    <span className="icon-right-arrow-1"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Blog One single End */}
          {/* Blog One single Start */}
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div
              className="blog-one__single wow fadeInUp transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="https://www.hrmexports.com/storage/recipe_images/VaIYCwJWfBaSjLdY69plTLsqOMognzK7awUxOsnm.jpg"
                    alt="HRM Exports"
                  />
                  <Link href="/lemon-rice.html">
                    <span className="blog-one__plus"></span>
                  </Link>
                </div>
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <Link href="/lemon-rice.html">Lemon Rice</Link>
                </h3>
                <p className="blog-one__text">
                  raditional South Indian quick lemon rice also known as
                  chitranna or nimmakaya pulihora is a popular dish made for a
                  meal. To make ...
                </p>
              </div>
              <div className="blog-one__hover-content">
                <h3 className="blog-one__hover-title">
                  <Link href="/lemon-rice.html">Lemon Rice</Link>
                </h3>
                <p className="blog-one__hover-text">
                  raditional South Indian quick lemon rice also known as
                  chitranna or nimmakaya pulihora is a popular dish made for a
                  meal. To make ...
                </p>
                <div className="blog-one__hover-btn-box">
                  <Link
                    href="/lemon-rice.html"
                    className="blog-one__hover-btn"
                  >
                    Read More
                    <span className="icon-right-arrow-1"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Blog One single End */}
          {/* Blog One single Start */}
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div
              className="blog-one__single wow fadeInUp transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-one__img-box">
                <div className="blog-one__img">
                  <img
                    src="https://www.hrmexports.com/storage/recipe_images/ko0UfhwnTJ9NxVlDEuGf5ZIwqbG9BcXdHQDApFzG.jpg"
                    alt="HRM Exports"
                  />
                  <Link href="/corn-pulao.html">
                    <span className="blog-one__plus"></span>
                  </Link>
                </div>
              </div>
              <div className="blog-one__content">
                <h3 className="blog-one__title">
                  <Link href="/corn-pulao.html">Corn Pulao</Link>
                </h3>
                <p className="blog-one__text">
                  Corn Pulao is a delightful and aromatic rice dish that
                  celebrates the sweet and tender flavors of corn kernels. This
                  recipe combin...
                </p>
              </div>
              <div className="blog-one__hover-content">
                <h3 className="blog-one__hover-title">
                  <Link href="/corn-pulao.html">Corn Pulao</Link>
                </h3>
                <p className="blog-one__hover-text">
                  Corn Pulao is a delightful and aromatic rice dish that
                  celebrates the sweet and tender flavors of corn kernels. This
                  recipe combin...
                </p>
                <div className="blog-one__hover-btn-box">
                  <Link
                    href="/corn-pulao.html"
                    className="blog-one__hover-btn"
                  >
                    Read More
                    <span className="icon-right-arrow-1"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Blog One single End */}
        </div>
      </div>
    </section>
  );
}
