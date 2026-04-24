export default function CustomerTestimonials() {
  return (
    <section className="testimonial-one pb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="testimonial-one__left">
              <div className="section-title text-left">
                <div className="section-title__icon">
                  <img src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png" alt="HRM Exports"></img>
                </div>
                <span className="section-title__tagline">Customer Reviews</span>
                <h3 className="section-title__title">Customer talking About HRM Exports</h3>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="testimonial-one__right">
              <div className="testimonial-one__carousel thm-owl__carousel owl-theme owl-carousel" data-owl-options='{
                                "items": 3,
                                "margin": 30,
                                "smartSpeed": 700,
                                "loop":true,
                                "autoplay": true,
                                "nav":false,
                                "dots":true,
                                "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
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
                            }'>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__single-inner">
                      <div className="testimonial-one__shape-1" style={{backgroundImage: "url(https://www.hrmexports.com/assets/images/shapes/testimonial-one-shape-1.png)"}}>
                      </div>
                      <div className="testimonial-one__review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text-2">I have been consistently impressed with the quality of rice provided by HRM Exports. Their commitment to delivering top-notch rice products, along with exceptional customer service, makes them a trusted partner in the industry.
                      </p>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-content">
                          <h4 className="testimonial-one__client-name">Faisal</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__single-inner">
                      <div className="testimonial-one__shape-1" style={{backgroundImage: "url(https://www.hrmexports.com/assets/images/shapes/testimonial-one-shape-1.png)"}}>
                      </div>
                      <div className="testimonial-one__review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text-2">Despite their high-quality products and services, this company offers competitive pricing. Their ability to strike a balance between quality and affordability is a significant advantage for our business.
                      </p>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-content">
                          <h4 className="testimonial-one__client-name">Freddy</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__single-inner">
                      <div className="testimonial-one__shape-1" style={{backgroundImage: "url(https://www.hrmexports.com/assets/images/shapes/testimonial-one-shape-1.png)"}}>
                      </div>
                      <div className="testimonial-one__review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text-2">Whenever we've had inquiries or needed assistance, their customer support team has been quick to respond and resolve any issues. Their dedication to customer satisfaction is evident.
                      </p>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-content">
                          <h4 className="testimonial-one__client-name">Abrar</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-one__single">
                    <div className="testimonial-one__single-inner">
                      <div className="testimonial-one__shape-1" style={{backgroundImage: "url(https://www.hrmexports.com/assets/images/shapes/testimonial-one-shape-1.png)"}}>
                      </div>
                      <div className="testimonial-one__review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="testimonial-one__text-2">Our partnership with HRM Exports has been nothing short of excellent. Their consistent quality, reliability, and professionalism make them our preferred choice, and we look forward to many more years of collaboration.
                      </p>
                      <div className="testimonial-one__client-info">
                        <div className="testimonial-one__client-content">
                          <h4 className="testimonial-one__client-name">Mohammad</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
