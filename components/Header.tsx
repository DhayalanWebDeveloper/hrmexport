import Link from 'next/link';

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
                    <img src="https://www.hrmexports.com/assets/images/shapes/main-menu-shape-1.png" alt="HRM Exports" />
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
                        <li className="dropdown">
                          <a href="https://www.hrmexports.com/indian-basmati-rice.html">INDIAN BASMATI RICE</a>
                          <ul className="sub-menu">
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/1121-basmati-rice.html">1121 BASMATI RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/1121-raw-basmati-rice.html">1121 RAW BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1121-golden-sella-basmati-rice.html">1121 GOLDEN SELLA BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1121-sella-basmati-rice.html">1121 SELLA BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1121-steam-basmati-rice.html">1121 STEAM BASMATI RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/1718-basmati-rice.html">1718 BASMATI RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/1718-steam-basmati-rice.html">1718 STEAM BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1718-sella-basmati-rice.html">1718 SELLA BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1718-golden-sella-basmati-rice.html">1718 GOLDEN SELLA BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1718-raw-basmati-rice.html">1718 RAW BASMATI RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/1509-basmati-rice.html">1509 BASMATI RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/1509-steam-basmati-rice.html">1509 STEAM BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1509-raw-basmati-rice.html">1509 RAW BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1509-sella-basmati-rice.html">1509 SELLA BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1509-golden-sella-basmati-rice.html">1509 GOLDEN SELLA BASMATI RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/1401-basmati-rice.html">1401 BASMATI RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/1401-steam-basmati-rice.html">1401 STEAM BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1401-raw-basmati-rice.html">1401 RAW BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1401-sella-basmati-rice.html">1401 SELLA BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1401-golden-sella-basmati-rice.html">1401 GOLDEN SELLA BASMATI RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/pusa-basmati-rice.html">PUSA BASMATI RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/pusa-raw-basmati-rice.html">PUSA RAW BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pusa-steam-basmati-rice.html">PUSA STEAM BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pusa-sella-basmati-rice.html">PUSA SELLA BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pusa-golden-sella-basmati-rice.html">PUSA GOLDEN SELLA BASMATI RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/traditional-basmati-rice.html">TRADITIONAL BASMATI RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/traditional-raw-basmati-rice.html">TRADITIONAL RAW BASMATI RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/traditional-sella-basmati-rice.html">TRADITIONAL SELLA BASMATI RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/behrouz-basmati-rice.html">Behrouz Basmati Rice</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/behrouz-basmati-rice-exporter-in-india.html">Behrouz Basmati Rice Exporter in India</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/basmati-rice.html">Basmati Rice</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/basmati-rice.html">Basmati Rice</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="https://www.hrmexports.com/indian-non-basmati-rice.html">INDIAN NON BASMATI RICE</a>
                          <ul className="sub-menu">
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/sugandha-rice.html">SUGANDHA RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/sugandha-raw-rice.html">SUGANDHA RAW RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sugandha-steam-rice.html">SUGANDHA STEAM RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sugandha-white-sella-rice.html">SUGANDHA WHITE SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sugandha-golden-sella-rice.html">SUGANDHA GOLDEN SELLA RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/sharbati-rice.html">SHARBATI RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/sharbati-raw-rice.html">SHARBATI RAW RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sharbati-steam-rice.html">SHARBATI STEAM RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sharbati-sella-rice.html">SHARBATI SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sharbati-golden-sella-rice.html">SHARBATI GOLDEN SELLA RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/pr11-rice.html">PR11 RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/pr11-raw-rice.html">PR11 RAW RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pr11-steam-rice.html">PR11 STEAM RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pr11-sella-rice.html">PR11 SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pr11-golden-sella-rice.html">PR11 GOLDEN SELLA RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/pr-14-rice.html">PR 14 RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/pr-14-raw-rice.html">PR 14 RAW RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pr-14-steam-rice.html">PR 14 STEAM RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pr-14-sella-rice.html">PR 14 SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pr14-golden-sella-rice.html">PR14 GOLDEN SELLA RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/parmal-rice.html">PARMAL RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/parmal-raw-rice.html">PARMAL RAW RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/parmal-steam-rice.html">PARMAL STEAM RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/parmal-sella-rice.html">PARMAL SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/parmal-golden-sella-rice.html">PARMAL GOLDEN SELLA RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/sona-masoori-rice.html">SONA MASOORI RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/sona-masoori-raw-rice.html">SONA MASOORI RAW RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sona-masoori-steam-rice.html">SONA MASOORI STEAM RICE</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="https://www.hrmexports.com/pesticide-residue-free-rice.html">PESTICIDE RESIDUE FREE RICE</a>
                          <ul className="sub-menu">
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/pesticide-residue-free-steam-rice.html">PESTICIDE RESIDUE FREE STEAM RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/1121-pesticide-residue-free-steam-rice.html">1121 PESTICIDE RESIDUE FREE STEAM RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1509-pesticide-residue-free-steam-rice.html">1509 PESTICIDE RESIDUE FREE STEAM RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pusa-basmati-pesticide-residue-free-steam-rice.html">PUSA BASMATI PESTICIDE RESIDUE FREE STEAM RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sharbati-pesticide-residue-free-steam-rice.html">SHARBATI PESTICIDE RESIDUE FREE STEAM RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/pesticide-residue-free-sella-rice.html">PESTICIDE RESIDUE FREE SELLA RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/1121-pesticide-residue-free-sella-rice.html">1121 PESTICIDE RESIDUE FREE SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1509-pesticide-residue-free-sella-rice.html">1509 PESTICIDE RESIDUE FREE SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pusa-pesticide-residue-free-sella-rice.html">PUSA PESTICIDE RESIDUE FREE SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sugandha-pesticide-residue-free-sella-rice.html">SUGANDHA PESTICIDE RESIDUE FREE SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sharbati-pesticide-residue-free-sella-rice.html">SHARBATI PESTICIDE RESIDUE FREE SELLA RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/pesticide-residue-free-golden-sella-rice.html">PESTICIDE RESIDUE FREE GOLDEN SELLA RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/1121-pesticide-residue-free-golden-sella-rice.html">1121 PESTICIDE RESIDUE FREE GOLDEN SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/1509-pesticide-residue-free-golden-sella-rice.html">1509 PESTICIDE RESIDUE FREE GOLDEN SELLA RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/sugandha-pesticide-residue-free-golden-sella-rice.html">SUGANDHA PESTICIDE RESIDUE FREE GOLDEN SELLA RICE</a></li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="https://www.hrmexports.com/pesticide-residue-free-raw-rice.html">PESTICIDE RESIDUE FREE RAW RICE</a>
                              <ul className="sub-menu">
                                <li className="dropdown"><a href="https://www.hrmexports.com/1401-pesticide-residue-free-raw-rice.html">1401 PESTICIDE RESIDUE FREE RAW RICE</a></li>
                                <li className="dropdown"><a href="https://www.hrmexports.com/pusa-pesticide-residue-free-raw-rice.html">PUSA PESTICIDE RESIDUE FREE RAW RICE</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
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
                  <a href="https://www.hrmexports.com/assets/images/hrm_exports_catalogue.pdf" download className="thm-btn main-menu__btn transition-all duration-300 hover:brightness-110 hover:shadow-lg"> E-Brochure </a>
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
