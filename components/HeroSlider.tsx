"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    jQuery?: unknown;
    $?: unknown;
  }
}

export default function HeroSlider() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const initOwl = () => {
      if (cancelled) return;
      const $ = (window as unknown as { jQuery?: (el: Element) => { owlCarousel: (opts: Record<string, unknown>) => void; data: (k: string) => unknown } }).jQuery;
      if (!$ || typeof $ !== "function") {
        window.setTimeout(initOwl, 150);
        return;
      }

      const desktopOpts = {
        loop: true,
        items: 1,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        margin: 0,
        dots: true,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "zoomIn",
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
      };

      const mobileOpts = { ...desktopOpts, autoplayTimeout: 12000 };

      if (desktopRef.current) {
        try {
          $(desktopRef.current).owlCarousel(desktopOpts);
        } catch {
          /* Owl not loaded yet — retry */
          window.setTimeout(initOwl, 150);
          return;
        }
      }
      if (mobileRef.current) {
        try {
          $(mobileRef.current).owlCarousel(mobileOpts);
        } catch {
          /* ignore */
        }
      }
    };

    initOwl();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="main-slider">
      <div
        ref={desktopRef}
        className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel mobilehide setowlicon"
      >
        <div className="item main-slider__slide-2 py-0 bg-white">
          <img src="/assets/images/backgrounds/Welcome-Banner1.webp" alt="banner 1" className="img-fluid w-full" />
        </div>
        <div className="item main-slider__slide-2 py-0 bg-white">
          <img src="/assets/images/backgrounds/banner02.webp" alt="banner 2" className="img-fluid w-full" />
        </div>
        <div className="item main-slider__slide-2 py-0 bg-white">
          <img src="/assets/images/backgrounds/banner03.webp" alt="banner 3" className="img-fluid w-full" />
        </div>
        <div className="item main-slider__slide-2 py-0 bg-white">
          <img src="/assets/images/backgrounds/banner04.webp" alt="banner 4" className="img-fluid w-full" />
        </div>
      </div>

      <div
        ref={mobileRef}
        className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel mobileshow setowlicon"
      >
        <div className="item main-slider__slide-2 py-0 bg-white">
          <img src="/assets/images/backgrounds/mobilebann102.jpg" alt="banner m1" className="img-fluid w-full" />
        </div>
        <div className="item main-slider__slide-2 py-0 bg-white">
          <img src="/assets/images/backgrounds/mobilebanner1.jpg" alt="banner m2" className="img-fluid w-full" />
        </div>
        <div className="item main-slider__slide-2 py-0 bg-white">
          <img src="/assets/images/backgrounds/mobile3.webp" alt="banner m3" className="img-fluid w-full" />
        </div>
        <div className="item main-slider__slide-2 py-0 bg-white">
          <img src="/assets/images/backgrounds/mobile4.webp" alt="banner m4" className="img-fluid w-full" />
        </div>
      </div>
    </section>
  );
}
