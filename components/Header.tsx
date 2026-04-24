import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header__top">
        <div className="main-header__top-inner">
          <ul className="list-unstyled main-header__contact-list mobilehide">
            <li>
              <div className="icon">
                <i className="fas fa-phone-square"></i>
              </div>
              <div className="text">
                <p><a href="tel:+91 73 5700 0031">+91 73 5700 0031</a></p>
              </div>
            </li>
            <li>
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text">
                <p><a href="mailto:info@hrmexports.com">info@hrmexports.com</a></p>
              </div>
            </li>
          </ul>
          <div className="main-header__top-close-time-and-social">
            <div className="main-header__top-social">
              <a href="https://www.facebook.com/hrmexport"><i className="fab fa-facebook"></i></a>
              <a href="https://www.linkedin.com/company/hrmexports/"><i className="fab fa-linkedin"></i></a>
              <a href="https://instagram.com/hrmexports"><i className="fab fa-instagram"></i></a>
              <a href="https://www.twitter.com/hrm"><i className="fab fa-twitter"></i></a>
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
                <Link href="/"><img src="https://www.hrmexports.com/assets/images/resources/logo-1.png" className="w-2" alt="HRM Exports" /></Link>
                <div className="main-menu__shape-1">
                  <img src="https://www.hrmexports.com/assets/images/shapes/main-menu-shape-1.png" alt="HRM Exports"></img>
                </div>
              </div>
              <div className="main-menu__main-menu-box">
                <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                <ul className="main-menu__list">
                  <li>
                    <Link href="/">Home </Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">Company </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li>
                        <Link href="/history">History </Link>
                      </li>
                      <li>
                        <Link href="/infrastructure">Infrastructure </Link>
                      </li>
                      <li>
                        <Link href="/certificates">Certifications </Link>
                      </li>
                    </ul>
                  </li>
                  <li><Link href="/brand">Behrouz Brand</Link></li>
                  <li className="dropdown">
                    <a href="#">Products</a>
                    <ul className="sub-menu">
                      <li className="dropdown">
                        <Link href="/indian-basmati-rice.html">INDIAN BASMATI RICE</Link>
                        <ul className="sub-menu">
                          <li className="dropdown"><Link href="/1121-basmati-rice.html">1121 BASMATI RICE</Link></li>
                          <li className="dropdown"><Link href="/1718-basmati-rice.html">1718 BASMATI RICE</Link></li>
                          <li className="dropdown"><Link href="/1509-basmati-rice.html">1509 BASMATI RICE</Link></li>
                          <li className="dropdown"><Link href="/1401-basmati-rice.html">1401 BASMATI RICE</Link></li>
                          <li className="dropdown"><Link href="/pusa-basmati-rice.html">PUSA BASMATI RICE</Link></li>
                          <li className="dropdown"><Link href="/traditional-basmati-rice.html">TRADITIONAL BASMATI RICE</Link></li>
                          <li className="dropdown"><Link href="/behrouz-basmati-rice.html">Behrouz Basmati Rice</Link></li>
                          <li className="dropdown"><Link href="/basmati-rice.html">Basmati Rice</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="/indian-non-basmati-rice.html">INDIAN NON BASMATI RICE</Link>
                        <ul className="sub-menu">
                          <li className="dropdown"><Link href="/sugandha-rice.html">SUGANDHA RICE</Link></li>
                          <li className="dropdown"><Link href="/sharbati-rice.html">SHARBATI RICE</Link></li>
                          <li className="dropdown"><Link href="/pr11-rice.html">PR11 RICE</Link></li>
                          <li className="dropdown"><Link href="/pr-14-rice.html">PR 14 RICE</Link></li>
                          <li className="dropdown"><Link href="/parmal-rice.html">PARMAL RICE</Link></li>
                          <li className="dropdown"><Link href="/sona-masoori-rice.html">SONA MASOORI RICE</Link></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="/pesticide-residue-free-rice.html">PESTICIDE RESIDUE FREE RICE</Link>
                        <ul className="sub-menu">
                          <li className="dropdown"><Link href="/pesticide-residue-free-steam-rice.html">PESTICIDE RESIDUE FREE STEAM RICE</Link></li>
                          <li className="dropdown"><Link href="/pesticide-residue-free-sella-rice.html">PESTICIDE RESIDUE FREE SELLA RICE</Link></li>
                          <li className="dropdown"><Link href="/pesticide-residue-free-golden-sella-rice.html">PESTICIDE RESIDUE FREE GOLDEN SELLA RICE</Link></li>
                          <li className="dropdown"><Link href="/pesticide-residue-free-raw-rice.html">PESTICIDE RESIDUE FREE RAW RICE</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><Link href="/quality-control">Quality Control</Link></li>
                  <li><Link href="/recipes">Recipes</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="main-menu__right">
              <div className="main-menu__btn-box">
                <a href="https://www.hrmexports.com/assets/images/hrm_exports_catalogue.pdf" download="https://www.hrmexports.com/assets/images/hrm_exports_catalogue.pdf" className="thm-btn main-menu__btn"> E-Brochure </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
