"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { productCategories } from "@/lib/products";

type OwlJQuery = ((el: Element) => {
  owlCarousel: (opts: Record<string, unknown>) => void;
}) & { fn?: { owlCarousel?: unknown } };

export default function OurProducts() {
  const desktopRef = useRef<HTMLDivElement>(null);

  // Flatten every variety across every category into a single product list
  // so the slider cycles through the full catalog (matches reference behavior).
  const products = productCategories.flatMap((cat) => cat.varieties);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const init = () => {
      if (cancelled) return;
      attempts++;
      const $ = (window as unknown as { jQuery?: OwlJQuery }).jQuery;
      if (!$ || typeof $ !== "function" || !$.fn?.owlCarousel) {
        if (attempts < 40) window.setTimeout(init, 200);
        return;
      }

      if (desktopRef.current && !desktopRef.current.classList.contains("owl-loaded")) {
        try {
          $(desktopRef.current).owlCarousel({
            items: 4,
            margin: 10,
            loop: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3500,
            dots: false,
            navText: [
              '<i class="fa-solid fa-chevron-left"></i>',
              '<i class="fa-solid fa-chevron-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
              0: { items: 1, nav: true },
              600: { items: 3, nav: false },
              1000: { items: 4, nav: true, loop: false },
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
    <section
      className="project-one pt-100"
      style={{
        backgroundImage: "url('/assets/images/backgrounds/footer-bg-1.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img
              src="/assets/images/icon/section-title-icon.png"
              alt="HRM Exports"
            />
          </div>
          <span
            className="section-title__tagline text-white wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            Selection of pure and top grade Rice
          </span>
          <h3
            className="section-title__title wow text-white fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            Our Products
          </h3>
        </div>

        <div
          ref={desktopRef}
          className="owl-carousel productowl owl-theme setowlicon"
        >
          {products.map((p) => (
            <div
              key={p.slug}
              className="item wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="project-one__single px-2">
                <div className="project-one__img">
                  <div className="p-inimg">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="p-content text-center">
                    <p>
                      <Link
                        href={`/${p.slug}`}
                        className="oneline transition-colors duration-300 hover:text-[#016327]"
                        title={p.name.toUpperCase()}
                      >
                        {p.name.toUpperCase()}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
