"use client";

import { useEffect, useRef } from "react";

type SwiperCtor = new (el: Element, opts: Record<string, unknown>) => unknown;

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
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const init = () => {
      if (cancelled) return;
      attempts++;
      const Swiper = (window as unknown as { Swiper?: SwiperCtor }).Swiper;
      if (!Swiper) {
        if (attempts < 40) window.setTimeout(init, 200);
        return;
      }

      if (
        swiperRef.current &&
        !swiperRef.current.classList.contains("swiper-initialized")
      ) {
        try {
          new Swiper(swiperRef.current, {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            speed: 3500,
            allowTouchMove: true,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            },
            breakpoints: {
              0: { slidesPerView: 2, spaceBetween: 20 },
              375: { slidesPerView: 3, spaceBetween: 25 },
              575: { slidesPerView: 4, spaceBetween: 30 },
              767: { slidesPerView: 5, spaceBetween: 40 },
              991: { slidesPerView: 6, spaceBetween: 40 },
              1199: { slidesPerView: 7, spaceBetween: 50 },
            },
          });
        } catch {
          if (attempts < 40) window.setTimeout(init, 200);
        }
      }
    };

    const t = window.setTimeout(init, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  return (
    <section className="brand-one brand-two pt-100">
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
            ref={swiperRef}
            className="thm-swiper__slider swiper-container swiper"
          >
            <div className="swiper-wrapper">
              {certificates.map((src, idx) => (
                <div
                  key={idx}
                  className="swiper-slide flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt="HRM Exports certificate"
                    className="img-fluid max-h-[120px] w-auto object-contain transition duration-300 hover:scale-110"
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
