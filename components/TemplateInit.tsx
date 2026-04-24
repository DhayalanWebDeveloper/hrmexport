"use client";

import { useEffect } from "react";

/**
 * Safety-net re-init for template plugins (WOW, Owl, WOW observer) in case
 * the vendor hrmexportsss.js ran before React hydrated its sections. Re-
 * initializing is idempotent enough for our usage — WOW just re-observes
 * elements, and the retry loop waits until the globals are present.
 */
export default function TemplateInit() {
  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const run = () => {
      if (cancelled) return;
      attempts++;
      const w = window as unknown as {
        WOW?: new (opts?: Record<string, unknown>) => { init: () => void };
        jQuery?: ((sel: string | Element) => { each: (cb: (i: number, el: Element) => void) => void; data: (k: string) => unknown; owlCarousel: (opts: Record<string, unknown>) => void; length: number }) & { fn?: Record<string, unknown> };
      };

      let ok = false;

      if (w.WOW) {
        try {
          new w.WOW({ live: true, mobile: true }).init();
          ok = true;
        } catch {
          /* ignore */
        }
      }

      const $ = w.jQuery;
      if ($ && typeof $ === "function" && $.fn && $.fn.owlCarousel) {
        try {
          const carousels = $(".thm-owl__carousel");
          if (carousels.length) {
            carousels.each(function (_i, el) {
              const $el = $(el);
              const options = $el.data("owl-options");
              if (options && typeof options === "object" && !(el as HTMLElement).classList.contains("owl-loaded")) {
                $el.owlCarousel(options as Record<string, unknown>);
              }
            });
            ok = true;
          }
        } catch {
          /* ignore */
        }
      }

      if (!ok && attempts < 40) {
        window.setTimeout(run, 200);
      }
    };

    const t = window.setTimeout(run, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  return null;
}
