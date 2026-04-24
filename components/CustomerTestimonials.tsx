const testimonials = [
  {
    name: "Faisal",
    stars: 5,
    text:
      "I have been consistently impressed with the quality of rice provided by HRM Exports. Their commitment to delivering top-notch rice products, along with exceptional customer service, makes them a trusted partner in the industry.",
  },
  {
    name: "Freddy",
    stars: 5,
    text:
      "Despite their high-quality products and services, this company offers competitive pricing. Their ability to strike a balance between quality and affordability is a significant advantage for our business.",
  },
  {
    name: "Abrar",
    stars: 5,
    text:
      "Whenever we’ve had inquiries or needed assistance, their customer support team has been quick to respond and resolve any issues. Their dedication to customer satisfaction is evident.",
  },
  {
    name: "Mohammad",
    stars: 5,
    text:
      "Our partnership with HRM Exports has been nothing short of excellent. Their consistent quality, reliability, and professionalism make them our preferred choice, and we look forward to many more years of collaboration.",
  },
];

const owlOptions = `{
                                "items": 3,
                                "margin": 30,
                                "smartSpeed": 700,
                                "loop":true,
                                "autoplay": true,
                                "nav":false,
                                "dots":true,
                                "navText": ["<span class=\\"fa fa-angle-left\\"></span>","<span class=\\"fa fa-angle-right\\"></span>"],
                                "responsive":{
                                    "0":{
                                        "items":1
                                    },
                                    "768":{
                                        "items":2
                                    },
                                    "992":{
                                        "items": 2
                                    }
                                }
                            }`;

export default function CustomerTestimonials() {
  return (
    <section className="testimonial-one pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="testimonial-one__left">
              <div className="section-title text-left">
                <div className="section-title__icon">
                  <img
                    src="/assets/images/icon/section-title-icon.png"
                    alt="HRM Exports"
                  />
                </div>
                <span className="section-title__tagline text-hrm-lime font-medium tracking-wide">
                  Customer Reviews
                </span>
                <h3 className="section-title__title text-hrm-green">
                  Customer talking About HRM Exports
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="testimonial-one__right">
              <div
                className="testimonial-one__carousel thm-owl__carousel owl-theme owl-carousel"
                data-owl-options={owlOptions}
              >
                {testimonials.map((t, idx) => (
                  <div className="item" key={idx}>
                    <div className="testimonial-one__single transition duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg">
                      <div className="testimonial-one__single-inner relative">
                        <div
                          className="testimonial-one__shape-1 opacity-60 transition-opacity duration-300 hover:opacity-100"
                          style={{
                            backgroundImage:
                              "url('/assets/images/shapes/testimonial-one-shape-1.png')",
                          }}
                        ></div>
                        <div className="testimonial-one__review flex gap-1 text-hrm-lime">
                          {Array.from({ length: t.stars }).map((_, s) => (
                            <i key={s} className="fa fa-star"></i>
                          ))}
                        </div>
                        <p className="testimonial-one__text-2">{t.text}</p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-content">
                            <h4 className="testimonial-one__client-name text-hrm-green">
                              {t.name}
                            </h4>
                          </div>
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
    </section>
  );
}
