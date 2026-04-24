import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="fixed-sec-fot">
        <a href="https://api.whatsapp.com/send?phone=917351000031&text=Hello, I saw your Company profile on your Hrm Exports website, can i get more Details?" className="float-ban shakehv" data-bs-toggle="tooltip" data-bs-placement="right" title="WhatsApp" target="_blank">
          <span className="fab fa-whatsapp"></span>
        </a>
        <a href="#inquirynow" className="float-ban shakehv" data-bs-toggle="tooltip" data-bs-placement="right" title="Send Enquiry">
          <span className="fa fa-envelope fnt"></span>
        </a>
        <a href="tel:+91 73 5700 0031" className="float_1-ban shakehv" data-bs-toggle="tooltip" data-bs-placement="right" title="Call">
          <span className="fa fa-phone fnt" style={{rotate: "90deg"}}></span>
        </a>
        <a href="https://www.google.com/maps/place/HRM+EXPORTS/@29.7642828,76.8666694,17z/data=!3m1!4b1!4m6!3m5!1s0x390e6bf897401eaf:0xfca271b94f5cc8f!8m2!3d29.7642782!4d76.8692443!16s%2Fg%2F11h0d7_j7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className="float-ban shakehv" data-bs-toggle="tooltip" data-bs-placement="right" title="Navigation" target="_blank">
          <span className="fa fa-paper-plane fnt mb-0"></span>
        </a>
      </div>

      <footer className="site-footer" style={{ 
            backgroundImage: "url(https://www.hrmexports.com/assets/images/backgrounds/footer-bg-1.jpg)",
            backgroundPosition: "50% 50%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover" }}>
        <div className="site-footer__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="contact-details__single wow rubberBand" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="contact-details__single-inner">
                    <div className="contact-details__shape-1" style={{backgroundImage: "url(assets/images/shapes/contact-details-shape-1.png)"}}>
                    </div>
                    <div className="contact-details__icon">
                      <span className="icon-address"></span>
                    </div>
                    <h4 className="contact-details__title">Factory Address:</h4>
                    <p className="contact-details__text"> Sagga Road, Vill. Nariana (Taraori)
India, Karnal-132001, India</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="contact-details__single wow rubberBand" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="contact-details__single-inner">
                    <div className="contact-details__shape-1" style={{backgroundImage: "url(assets/images/shapes/contact-details-shape-1.png)"}}>
                    </div>
                    <div className="contact-details__icon">
                      <span className="icon-phone-call"></span>
                    </div>
                    <h4 className="contact-details__title">Contact</h4>
                    <p className="contact-details__text">
                        Mr. Vipin Garg :
                        <a href="tel:+91 73 5700 0031">
                        +91 73 5700 0031
                       </a>
                       <br />
                       Mr. Aakash Garg :
                       <a href="tel:+91 73 5100 0031">
                           +91 73 5100 0031
                       </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="contact-details__single wow rubberBand" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <div className="contact-details__single-inner" style={{padding: "42px 50px 97px"}}>
                    <div className="contact-details__shape-1" style={{backgroundImage: "url(assets/images/shapes/contact-details-shape-1.png)"}}>
                    </div>
                    <div className="contact-details__icon">
                      <span className="icon-email"></span>
                    </div>
                    <h4 className="contact-details__title">E- Mail Us</h4>
                    <p className="contact-details__text">
                       <a href="mailto:info@hrmexports.com">
                           info@hrmexports.com
                       </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="foot-1">
                <div className="site-footer__social mt-50 wow rubberBand" data-wow-delay="500ms" data-wow-duration="1500ms">
                  <a href="https://www.facebook.com/hrmexport"><i className="fab fa-facebook"></i></a>
                  <a href="https://www.linkedin.com/company/hrmexports/"><i className="fab fa-linkedin"></i></a>
                  <a href="https://instagram.com/hrmexports"><i className="fab fa-instagram"></i></a>
                  <a href="https://www.twitter.com/hrm"><i className="fab fa-twitter"></i></a>
                </div>
                <div className="mt-50 text-center">
                  <Link href="/" className="text-white wow rubberBand" data-wow-delay="600ms" data-wow-duration="1500ms">Home</Link>
                  <Link href="/about" className="ml-25 text-white wow rubberBand" data-wow-delay="700ms" data-wow-duration="1500ms"> About</Link>
                  <Link href="/quality-control" className="ml-25 text-white wow rubberBand" data-wow-delay="1100ms" data-wow-duration="1500ms">Quality Control</Link>
                  <Link href="/infrastructure" className="ml-25 text-white wow rubberBand" data-wow-delay="1200ms" data-wow-duration="1500ms">Infrastructure</Link>
                  <Link href="/recipes" className="ml-25 text-white wow rubberBand" data-wow-delay="1300ms" data-wow-duration="1500ms">Recipes</Link>
                  <Link href="/blogs" className="ml-25 text-white wow rubberBand" data-wow-delay="1300ms" data-wow-duration="1500ms">Blogs</Link>
                  <Link href="/contact" className="ml-25 text-white">Contact Us</Link>
                </div>
              </div>
              <div className="col-xl-12 mt-50">
                <div className="site-footer__bottom-inner">
                  <p><Link href="/basmati-rice/exporter-from-india-to-canada.html">Basmati Rice Exporter From India to Canada</Link> | <Link href="/basmati-rice/exporter-from-india-to-australia.html">Basmati Rice Exporter From India to Australia</Link> | <Link href="/basmati-rice/exporter-from-india-to-sweden.html">Basmati Rice Exporter From India to Sweden</Link> | <Link href="/basmati-rice/exporter-from-india-to-germany.html">Basmati Rice Exporter From India to Germany</Link> | <Link href="/basmati-rice/exporter-from-india-to-belgium.html">Basmati Rice Exporter From India to Belgium</Link> | 
                  <Link href="/basmati-rice/exporter-from-india-to-france.html">Basmati Rice Exporter From India to France</Link> | <Link href="/basmati-rice/exporter-from-india-to-italy.html">Basmati Rice Exporter From India to Italy</Link> | <Link href="/basmati-rice/exporter-from-india-to-nepal.html">Basmati Rice Exporter From India to Nepal</Link> | <Link href="/basmati-rice/exporter-from-india-to-netherlands.html">Basmati Rice Exporter From India to Netherlands</Link> | <Link href="/basmati-rice/exporter-from-india-to-switzerland.html">Basmati Rice Exporter From India to Switzerland</Link> | <Link href="/basmati-rice/exporter-from-india-to-turkey.html">Basmati Rice Exporter From India to Turkey</Link></p>
                  <p className="site-footer__bottom-text wow rubberBand" data-wow-delay="1400ms" data-wow-duration="1500ms">© Copyright 2026 by <a href="#" className="text-white">HRM Exports</a> || Develop By <a href="http://www.hrmexport.com/">HRM EXPORT</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
