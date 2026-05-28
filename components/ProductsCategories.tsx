import Link from 'next/link';

const products = [
  {
    name: "Turmeric",
    slug: "turmeric",
    image: "/assets/images/products/turmeric.png",
  },
  {
    name: "Rice",
    slug: "rice",
    image: "/assets/images/products/rice.png",
  },
  {
    name: "Country Sugar",
    slug: "country-sugar",
    image: "/assets/images/products/country-sugar.png",
  },
  {
    name: "Millets",
    slug: "millets",
    image: "/assets/images/products/millets.png",
  },
  {
    name: "Maize",
    slug: "maize",
    image: "/assets/images/products/maize.png",
  },
  {
    name: "Cattle Feed",
    slug: "cattle-feed",
    image: "/assets/images/products/cattle-feed.png",
  },
];

export default function ProductsCategories() {
  return (
    <section
      className="feature-one feature-one-two"
      style={{
        backgroundImage: "url(/assets/images/backgrounds/2397327.png)",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img src="/assets/images/icon/section-title-icon.png" alt="JKR SOZHAN Exim" />
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
          {products.map((product, index) => (
            <div
              key={product.slug}
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 wow fadeInUp mb-4"
              data-wow-delay={`${(index % 3) * 100}ms`}
            >
              <div className="cat-box text-center transition-all duration-500 group border border-gray-100 rounded-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2 p-4">
                <div className="overflow-hidden rounded-lg mb-4 h-64 flex items-center justify-center">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={product.name}
                  />
                </div>
                <h4 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#016327]">
                  {product.name}
                </h4>
                <Link 
                  href={`/${product.slug}`} 
                  className="inline-block px-6 py-2 bg-[#016327] text-white rounded-full transition-all duration-300 transform group-hover:bg-[#86bc24] group-hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

