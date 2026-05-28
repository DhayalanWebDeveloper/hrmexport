import EnquiryForm from "@/components/EnquiryForm";
import Link from "next/link";

export default function RecipesPage() {
  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(/assets/images/backgrounds/recipes.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Recipes</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              <li>Recipes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Page / Recipes */}
      <section className="services-page">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__icon">
              <img
                src="/assets/images/icon/section-title-icon.png"
                alt="How to Make Rice"
              />
            </div>
            <span className="section-title__tagline">How to Make Rice</span>
            <h1 className="section-title__title">Recipes</h1>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img
                      src="/storage/recipe_images/hkAkaO3GDGirKuJ7EVYVTT9AZcM2xETdZ9rGDERB.jpg"
                      alt="Recipe Image"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="services-one__title">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-[#afc836]"
                  >
                    Veg Biryani Recipe
                  </a>
                </h3>
                <p className="services-one__text">
                  This Veg Biryani is an authentic Indian recipe packed full of
                  your favorite rice, veggies, and spices. Made with patience
                  and lots{" "}
                </p>
                <div className="services-one__btn-box">
                  <a
                    href="https://www.hrmexports.com/veg-biryani-recipe.html"
                    className="services-one__btn transition-all duration-300 hover:brightness-110"
                  >
                    Read More<span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img
                      src="/storage/recipe_images/7sGisyA7R4NhbusUWkWWMC6gQ14oAUMPnpogXgai.jpg"
                      alt="Recipe Image"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="services-one__title">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-[#afc836]"
                  >
                    Veg Fried Rice
                  </a>
                </h3>
                <p className="services-one__text">
                  Vegetable fried rice is a popular and delicious dish that
                  combines cooked rice with a variety of vegetables, seasonings,
                  and sauce{" "}
                </p>
                <div className="services-one__btn-box">
                  <a
                    href="https://www.hrmexports.com/veg-fried-rice.html"
                    className="services-one__btn transition-all duration-300 hover:brightness-110"
                  >
                    Read More<span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img
                      src="/storage/recipe_images/5TatdXvF1YTpNVPyatN1D7HbZJ0x2dS08RH3h0FJ.jpg"
                      alt="Recipe Image"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="services-one__title">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-[#afc836]"
                  >
                    Southwestern Rice
                  </a>
                </h3>
                <p className="services-one__text">
                  Southwestern Rice is a flavorful and hearty dish inspired by
                  the bold and spicy flavors of the American Southwest. This
                  recipe com{" "}
                </p>
                <div className="services-one__btn-box">
                  <a
                    href="https://www.hrmexports.com/southwestern-rice.html"
                    className="services-one__btn transition-all duration-300 hover:brightness-110"
                  >
                    Read More<span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img
                      src="/storage/recipe_images/ko0UfhwnTJ9NxVlDEuGf5ZIwqbG9BcXdHQDApFzG.jpg"
                      alt="Recipe Image"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="services-one__title">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-[#afc836]"
                  >
                    Corn Pulao
                  </a>
                </h3>
                <p className="services-one__text">
                  Corn Pulao is a delightful and aromatic rice dish that
                  celebrates the sweet and tender flavors of corn kernels. This
                  recipe combin{" "}
                </p>
                <div className="services-one__btn-box">
                  <a
                    href="https://www.hrmexports.com/corn-pulao.html"
                    className="services-one__btn transition-all duration-300 hover:brightness-110"
                  >
                    Read More<span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img
                      src="/storage/recipe_images/VaIYCwJWfBaSjLdY69plTLsqOMognzK7awUxOsnm.jpg"
                      alt="Recipe Image"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="services-one__title">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-[#afc836]"
                  >
                    Lemon Rice
                  </a>
                </h3>
                <p className="services-one__text">
                  raditional South Indian quick lemon rice also known as
                  chitranna or nimmakaya pulihora is a popular dish made for a
                  meal. To make{" "}
                </p>
                <div className="services-one__btn-box">
                  <a
                    href="https://www.hrmexports.com/lemon-rice.html"
                    className="services-one__btn transition-all duration-300 hover:brightness-110"
                  >
                    Read More<span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img
                      src="/storage/recipe_images/YIeFrGR0YgdUmOmGzZTCsbMJsOa7sBOwBdctl4LH.jpg"
                      alt="Recipe Image"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="services-one__title">
                  <a
                    href="#"
                    className="transition-colors duration-300 hover:text-[#afc836]"
                  >
                    Mushroom Biryani
                  </a>
                </h3>
                <p className="services-one__text">
                  Mushroom biryani is the classic vegetarian version of biryani
                  with meaty mushrooms, tender fluffy rice and flavorful spices.
                  I sha{" "}
                </p>
                <div className="services-one__btn-box">
                  <a
                    href="https://www.hrmexports.com/mushroom-biryani.html"
                    className="services-one__btn transition-all duration-300 hover:brightness-110"
                  >
                    Read More<span className="icon-right-arrow"></span>
                  </a>
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
