import type { Metadata } from "next";
import Script from "next/script";
import TemplateInit from "@/components/TemplateInit";
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
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/animate/custom-animate.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/jarallax/jarallax.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/swiper/swiper.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/gardon-icons/style.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/reey-font/stylesheet.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/alagambe-font/stylesheet.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/owl-carousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/owl-carousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/vegas/vegas.min.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/vendors/twenty-twenty/twentytwenty.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/css/hrmexports.css" />
        <link rel="stylesheet" href="https://www.hrmexports.com/assets/css/hrmexports-responsive.css" />
      </head>
      <body className="custom-cursor">
        <div className="custom-cursor__cursor"></div>
        <div className="custom-cursor__cursor-two"></div>

        {children}

        {/* jQuery first — everything depends on it */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.js"
          strategy="beforeInteractive"
        />

        {/* Vendor JS — order matches original site */}
        <Script src="https://www.hrmexports.com/assets/vendors/jarallax/jarallax.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/jquery-appear/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/odometer/odometer.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/swiper/swiper.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/wnumb/wNumb.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/wow/wow.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/isotope/isotope.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/countdown/countdown.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/owl-carousel/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/vegas/vegas.min.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/jquery-ui/jquery-ui.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/circleType/jquery.circleType.js" strategy="afterInteractive" />
        <Script src="https://www.hrmexports.com/assets/vendors/circleType/jquery.lettering.min.js" strategy="afterInteractive" />
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
