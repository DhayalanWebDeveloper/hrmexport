import Link from 'next/link';
import { productCategories } from '@/lib/products';

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="main-header__top">
          <div className="main-header__top-inner">
            <ul className="list-unstyled main-header__contact-list mobilehide">
              <li>
                <div className="icon">
                  <i className="fas fa-phone-square"></i>
                </div>
                <div className="text">
                  <p><a href="tel:+91 73 5700 0031" className="transition-colors duration-300 hover:text-[#afc836]">+91 73 5700 0031</a></p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text">
                  <p><a href="mailto:info@hrmexports.com" className="transition-colors duration-300 hover:text-[#afc836]">info@hrmexports.com</a></p>
                </div>
              </li>
            </ul>
            <div className="main-header__top-close-time-and-social">
              <div className="main-header__top-social">
                <a href="https://www.facebook.com/hrmexport" className="transition-colors duration-300 hover:text-[#afc836]"><i className="fab fa-facebook"></i></a>
                <a href="https://www.linkedin.com/company/hrmexports/" className="transition-colors duration-300 hover:text-[#afc836]"><i className="fab fa-linkedin"></i></a>
                <a href="https://instagram.com/hrmexports" className="transition-colors duration-300 hover:text-[#afc836]"><i className="fab fa-instagram"></i></a>
                <a href="https://www.twitter.com/hrm" className="transition-colors duration-300 hover:text-[#afc836]"><i className="fab fa-twitter"></i></a>
              </div>
              <div id="google_translate_element" className="ms-3"></div>
            </div>
          </div>
        </div>
        <nav className="main-menu">
          <div className="main-menu__wrapper">
            <div className="main-menu__wrapper-inner">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <Link href="/"><img src="/images/logo-1.webp" className="w-full h-auto transition-transform duration-300 hover:scale-105" alt="HRM Exports" /></Link>
                  <div className="main-menu__shape-1">
                    <img src="/assets/images/shapes/main-menu-shape-1.png" alt="HRM Exports" />
                  </div>
                </div>
                <div className="main-menu__main-menu-box">
                  <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                  <ul className="main-menu__list">
                    <li><Link href="/" className="transition-colors duration-300 hover:text-[#afc836]">Home </Link></li>

                    <li className="dropdown">
                      <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">Company </a>
                      <ul className="sub-menu">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/history">History </Link></li>
                        <li><Link href="/infrastructure">Infrastructure </Link></li>
                        <li><Link href="/certificates">Certifications </Link></li>
                      </ul>
                    </li>

                    <li><Link href="/brand" className="transition-colors duration-300 hover:text-[#afc836]">Behrouz Brand</Link> </li>

                    <li className="dropdown">
                      <a href="#" className="transition-colors duration-300 hover:text-[#afc836]">Products</a>
                      <ul className="sub-menu">
                        {productCategories.map((cat) => (
                          <li key={cat.slug} className="dropdown">
                            <Link href={`/${cat.slug}`}>{cat.name.toUpperCase()}</Link>
                            <ul className="sub-menu">
                              {cat.varieties.map((v) => (
                                <li key={v.slug} className="dropdown">
                                  <Link href={`/${v.slug}`}>{v.name.toUpperCase()}</Link>
                                  {v.cuts.length > 0 && (
                                    <ul className="sub-menu">
                                      {v.cuts.map((c) => (
                                        <li key={c.slug} className="dropdown">
                                          <Link href={`/${c.slug}`}>{c.name.toUpperCase()}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li><Link href="/quality-control" className="transition-colors duration-300 hover:text-[#afc836]">Quality Control</Link></li>
                    <li><Link href="/recipes" className="transition-colors duration-300 hover:text-[#afc836]">Recipes</Link></li>
                    <li><Link href="/contact" className="transition-colors duration-300 hover:text-[#afc836]">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__btn-box">
                  <a href="/assets/images/hrm_exports_catalogue.pdf" download className="thm-btn main-menu__btn transition-all duration-300 hover:brightness-110 hover:shadow-lg"> E-Brochure </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
}
