export default function HeroSlider() {
  return (
    <>
      <section className="main-slider">
        <div className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel mobilehide" data-owl-options='{"loop": true, "items": 1, "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"], "margin": 0, "dots": true, "nav": true, "animateOut": "slideOutDown", "animateIn": "zoomIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 4000, "autoplayHoverPause": false}'>
          <div className="item main-slider__slide-2 py-0 bg-white">
            <img src="https://www.hrmexports.com/assets/images/backgrounds/Welcome-Banner1.webp" alt="banner 1" className="img-fluid"></img>
          </div>
          <div className="item main-slider__slide-2 py-0 bg-white">
            <img src="https://www.hrmexports.com/assets/images/backgrounds/banner02.webp" alt="banner 2" className="img-fluid"></img>
          </div>
          <div className="item main-slider__slide-2 py-0 bg-white">
            <img src="https://www.hrmexports.com/assets/images/backgrounds/banner03.webp" alt="banner 3" className="img-fluid"></img>
          </div>
          <div className="item main-slider__slide-2 py-0 bg-white">
            <img src="https://www.hrmexports.com/assets/images/backgrounds/banner04.webp" alt="banner 4" className="img-fluid"></img>
          </div>
        </div>

        {/*mobile slider*/}
        <div className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel mobileshow" data-owl-options='{"loop": true, "items": 1, "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"], "margin": 0, "dots": true, "nav": true, "animateOut": "slideOutDown", "animateIn": "zoomIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 12000, "autoplayHoverPause": false}'>
          <div className="item main-slider__slide-2 py-0 bg-white">
            <img src="https://www.hrmexports.com/assets/images/backgrounds/mobilebann102.jpg" alt="banner 3" className="img-fluid"></img>
          </div>
          <div className="item main-slider__slide-2 py-0 bg-white">
            <img src="https://www.hrmexports.com/assets/images/backgrounds/mobilebanner1.jpg" alt="banner 3" className="img-fluid"></img>
          </div>
          <div className="item main-slider__slide-2 py-0 bg-white">
            <img src="https://www.hrmexports.com/assets/images/backgrounds/mobile3.webp" alt="banner 3" className="img-fluid"></img>
          </div>
          <div className="item main-slider__slide-2 py-0 bg-white">
            <img src="https://www.hrmexports.com/assets/images/backgrounds/mobile4.webp" alt="banner 4" className="img-fluid"></img>
          </div>
        </div>
      </section>
      <style>{`.cat-box img { border-radius: 50%; padding: 8px; }`}</style>
    </>
  );
}
