import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionButtons from "@/components/ActionButtons";
import TemplateInit from "@/components/TemplateInit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Rice Manufacturers, Suppliers & Exporters in India | HRM Exports",
  description:
    "HRM Exports is one of the leading top rice manufacturers, suppliers, and exporters in India with trusted quality and delivery at the right time in the global market.",
  keywords:
    "Rice Manufacturers In India, Rice Exporters In India, Rice Suppliers In India, Rice Suppliers From India",
  icons: {
    icon: "/assets/images/resources/logo-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Core template CSS */}
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/animate/custom-animate.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/gardon-icons/style.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/reey-font/stylesheet.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/alagambe-font/stylesheet.css" />

        {/* Plugin CSS — each one matches an actively-used component */}
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/twenty-twenty/twentytwenty.css" />

        {/* Font Awesome is now installed locally via `@fortawesome/fontawesome-free`
            and imported in app/globals.css — no CDN link needed here. */}

        {/* Template site CSS */}
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/css/hrmexports.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/css/hrmexports-responsive.css" />
      </head>
      <body className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>

        <div className="page-wrapper">
          <Header />
          {children}
          <Footer />
          <ActionButtons />
        </div>

        {/* jQuery first — everything depends on it */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.js"
          strategy="beforeInteractive"
        />

        {/* Vendor JS — kept only what is actively used by components or by
            hrmexportsss.js init. Template init functions guard every
            plugin call with `if ($('.x').length)` so removing an unused
            vendor is safe as long as no component references that plugin. */}
        <Script src="https://www.hrmexports.com/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/jquery-appear/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/odometer/odometer.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/swiper/swiper.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/wow/wow.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/twenty-twenty/twentytwenty.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/twenty-twenty/jquery.event.move.js" strategy="afterInteractive" />

        {/* Template init — must load LAST so all plugins are registered */}
        <Script src="https://www.hrmexports.com/assets/js/hrmexportsss.js" strategy="afterInteractive" />

        {/* React-side safety net: re-run WOW + Owl init after hydration in
            case the template init fired before React mounted the sections. */}
        <TemplateInit />
      </body>
    </html>
  );
}
