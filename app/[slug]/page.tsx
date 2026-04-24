import { notFound } from "next/navigation";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import {
  findBySlug,
  getAllSlugs,
  type ProductCategory,
  type ProductVariety,
  type ProductCut,
} from "@/lib/products";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = findBySlug(slug);
  if (!result) notFound();

  return (
    <div className="page-wrapper">

      {/* Page Header */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: "url(/storage/images/651304c2cd4dd.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>{result.data.name.toUpperCase()}</h2>
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt;</span>
              </li>
              {result.type === "variety" && (
                <>
                  <li>
                    <Link href={`/${result.category.slug}`}>
                      {result.category.name}
                    </Link>
                  </li>
                  <li>
                    <span>&gt;</span>
                  </li>
                </>
              )}
              {result.type === "cut" && (
                <>
                  <li>
                    <Link href={`/${result.category.slug}`}>
                      {result.category.name}
                    </Link>
                  </li>
                  <li>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <Link href={`/${result.variety.slug}`}>
                      {result.variety.name}
                    </Link>
                  </li>
                  <li>
                    <span>&gt;</span>
                  </li>
                </>
              )}
              <li>{result.data.name}</li>
            </ul>
          </div>
        </div>
      </section>

      {result.type === "category" && <CategoryView category={result.data} />}
      {result.type === "variety" && (
        <VarietyView variety={result.data} category={result.category} />
      )}
      {result.type === "cut" && (
        <CutView
          cut={result.data}
          variety={result.variety}
          category={result.category}
        />
      )}

      <EnquiryForm />
    </div>
  );
}

// -------------------- Category View --------------------
function CategoryView({ category }: { category: ProductCategory }) {
  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="product__sidebar">
              <div className="shop-category product__sidebar-single">
                <h3
                  className="product__sidebar-title wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  {category.name.toUpperCase()}
                </h3>
                <ul className="list-unstyled pt-30">
                  {category.varieties.map((v) => (
                    <li
                      key={v.slug}
                      className="wow bounceInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <Link
                        href={`/${v.slug}`}
                        className="transition-colors duration-300 hover:text-[#afc836]"
                      >
                        {v.name.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="section-title text-left">
              <div className="section-title__icon">
                <img
                  src="/assets/images/icon/section-title-icon.png"
                  alt={category.name}
                />
              </div>
              <h1
                className="section-title__title wow flipInX"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                {category.name.toUpperCase()}
              </h1>
              <div
                className="pt-30 text-justify wow fadeInUp"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <p>{category.description}</p>
              </div>
            </div>
            <div className="product__items">
              <div className="product__all">
                <div className="row">
                  {category.varieties.map((v) => (
                    <div
                      key={v.slug}
                      className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    >
                      <div
                        className="product__all-single wow lightSpeedIn transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="product__all-single-inner">
                          <div className="product__all-img">
                            <img
                              src={v.image}
                              alt={v.name}
                              className="transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="product__all-content">
                            <h4 className="product__all-title">
                              <Link
                                href={`/${v.slug}`}
                                className="transition-colors duration-300 hover:text-[#afc836]"
                              >
                                {v.name.toUpperCase()}
                              </Link>
                            </h4>
                          </div>
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
    </section>
  );
}

// -------------------- Variety View --------------------
function VarietyView({
  variety,
  category,
}: {
  variety: ProductVariety;
  category: ProductCategory;
}) {
  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="product__sidebar">
              <div className="shop-category product__sidebar-single">
                <h3
                  className="product__sidebar-title wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  {category.name.toUpperCase()}
                </h3>
                <ul className="list-unstyled pt-30">
                  {category.varieties.map((v) => (
                    <li
                      key={v.slug}
                      className="wow bounceInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <Link
                        href={`/${v.slug}`}
                        className={`transition-colors duration-300 hover:text-[#afc836] ${
                          v.slug === variety.slug ? "text-[#afc836]" : ""
                        }`}
                      >
                        {v.name.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div className="section-title text-left">
              <div className="section-title__icon">
                <img
                  src="/assets/images/icon/section-title-icon.png"
                  alt={variety.name}
                />
              </div>
              <h1
                className="section-title__title wow flipInX"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                {variety.name.toUpperCase()}
              </h1>
              <div
                className="project-one__img wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
                style={{ marginTop: "20px" }}
              >
                <img
                  src={variety.image}
                  alt={variety.name}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div
                className="p-content pt-30 text-justify wow fadeInUp"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <p>{variety.description}</p>
              </div>
            </div>
            {variety.cuts.length > 0 && (
              <div className="product__items">
                <div className="product__all">
                  <div className="row">
                    {variety.cuts.map((c) => (
                      <div
                        key={c.slug}
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                      >
                        <div
                          className="product__all-single project-one__single wow lightSpeedIn transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                          data-wow-delay="300ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="product__all-single-inner">
                            <div className="product__all-img">
                              <img
                                src={c.image}
                                alt={c.name}
                                className="transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                            <div className="product__all-content">
                              <h4 className="product__all-title">
                                <Link
                                  href={`/${c.slug}`}
                                  className="transition-colors duration-300 hover:text-[#afc836]"
                                >
                                  {c.name.toUpperCase()}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- Cut View --------------------
function CutView({
  cut,
  variety,
  category,
}: {
  cut: ProductCut;
  variety: ProductVariety;
  category: ProductCategory;
}) {
  return (
    <section className="services-page product">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <div className="product__sidebar">
              <div className="shop-category product__sidebar-single">
                <h3
                  className="product__sidebar-title wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  {variety.name.toUpperCase()} TYPES
                </h3>
                <ul className="list-unstyled pt-30">
                  {variety.cuts.map((c) => (
                    <li
                      key={c.slug}
                      className="wow bounceInLeft"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <Link
                        href={`/${c.slug}`}
                        className={`transition-colors duration-300 hover:text-[#afc836] ${
                          c.slug === cut.slug ? "text-[#afc836]" : ""
                        }`}
                      >
                        {c.name.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "20px" }}>
                  <Link
                    href={`/${category.slug}`}
                    className="transition-colors duration-300 hover:text-[#afc836]"
                  >
                    &larr; All Rice Varieties
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9">
            <div
              className="project-one__single wow fadeInUp transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="project-one__img">
                <img
                  src={cut.image}
                  alt={cut.name}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="section-title text-left">
              <div className="section-title__icon">
                <img
                  src="/assets/images/icon/section-title-icon.png"
                  alt={cut.name}
                />
              </div>
              <h1
                className="section-title__title wow flipInX"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                {cut.name.toUpperCase()}
              </h1>
              <div
                className="p-content pt-30 text-justify wow fadeInUp"
                data-wow-delay="500ms"
                data-wow-duration="1500ms"
              >
                <p>{cut.description ?? variety.description}</p>
              </div>
              <div
                className="pt-30 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <Link
                  href={`/${category.slug}`}
                  className="thm-btn transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                >
                  All Rice Varieties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
