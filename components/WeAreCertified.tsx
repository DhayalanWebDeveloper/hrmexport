const swiperOptions = `{"spaceBetween": 10,
                    "slidesPerView": 5,
                    "loop": true,
                    "navigation": {
                        "nextEl": "#brand-one__swiper-button-next",
                        "prevEl": "#brand-one__swiper-button-prev"
                    },
                    "autoplay": { "delay": 0,"disableOnInteraction": false },
                    "speed": 2000,
                    "breakpoints": {
                        "0": {
                            "spaceBetween": 30,
                            "slidesPerView": 2
                        },
                        "375": {
                            "spaceBetween": 30,
                            "slidesPerView": 3
                        },
                        "575": {
                            "spaceBetween": 30,
                            "slidesPerView": 4
                        },
                        "767": {
                            "spaceBetween": 50,
                            "slidesPerView": 5
                        },
                        "991": {
                            "spaceBetween": 50,
                            "slidesPerView": 6
                        },
                        "1199": {
                            "spaceBetween": 50,
                            "slidesPerView": 7
                        }
                    }}`;

const certificates = [
  "/assets/images/resources/certificate-logo-5.png",
  "/assets/images/resources/certificate-logo-6.png",
  "/assets/images/resources/certificate-logo-8.png",
  "/assets/images/resources/certificate-logo-3.png",
  "/assets/images/resources/certificate-logo-4.png",
  "/assets/images/resources/certificate-logo-2.png",
  "/assets/images/resources/certificate-logo-7.png",
  "/assets/images/resources/certificate-logo-9.png",
  "/assets/images/resources/certificate-logo-10.png",
];

export default function WeAreCertified() {
  return (
    <section className="brand-one brand-two pt-100 bg-hrm-cream/30">
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img
              src="/assets/images/icon/section-title-icon.png"
              alt="HRM Exports"
            />
          </div>
          <span
            className="section-title__tagline wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            The best way to be ready for future is to invest in it
          </span>
          <h3
            className="section-title__title wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            We are Certified
          </h3>
        </div>
        <div className="brand-one__inner">
          <div
            className="thm-swiper__slider swiper-container"
            data-swiper-options={swiperOptions}
          >
            <div className="swiper-wrapper">
              {certificates.map((src, idx) => (
                <div
                  key={idx}
                  className="swiper-slide flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt="HRM Exports"
                    className="img-fluid transition duration-300 hover:scale-105 hover:shadow-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
