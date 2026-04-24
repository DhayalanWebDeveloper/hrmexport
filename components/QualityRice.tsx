export default function QualityRice() {
  return (
    <section className="counter-one relative">
      <div
        className="counter-one__bg"
        style={{
          backgroundImage:
            "url(https://www.hrmexports.com/assets/images/backgrounds/counter-one-bg.jpg)",
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="counter-one__left">
              <div className="section-title text-left">
                <div className="section-title__icon">
                  <img
                    src="https://www.hrmexports.com/assets/images/icon/section-title-icon.png"
                    alt="HRM Exports"
                  />
                </div>
                <h3
                  className="section-title__title wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  We are focused towards providing best quality Rice
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="counter-one__right">
              <ul className="list-unstyled counter-one__list">
                <li
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="counter-one__single">
                    <div className="counter-one__icon">
                      <img
                        src="https://www.hrmexports.com/assets/images/icon/icon-5.png"
                        alt="Experience"
                      />
                    </div>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3
                      className="count-text text-hrm-green"
                      data-stop="50"
                      data-speed="1500"
                    >
                      00{' '}
                    </h3>
                    <h3
                      className="text-hrm-lime"
                      style={{
                        top: '-50px',
                        left: '37px',
                        position: 'relative',
                      }}
                    >
                      {' '}
                      +{' '}
                    </h3>
                    <p className="counter-one__text">
                      Years of<br /> Experience
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="counter-one__single">
                    <div className="counter-one__icon">
                      <img
                        src="https://www.hrmexports.com/assets/images/icon/icon-6.png"
                        alt="Rice Products"
                      />
                    </div>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3
                      className="count-text text-hrm-green"
                      data-stop="100"
                      data-speed="1500"
                    >
                      00
                    </h3>
                    <h3
                      className="text-hrm-lime"
                      style={{
                        top: '-50px',
                        left: '47px',
                        position: 'relative',
                      }}
                    >
                      {' '}
                      +{' '}
                    </h3>
                    <p className="counter-one__text">
                      Rice <br /> Products
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="counter-one__single">
                    <div className="counter-one__icon">
                      <img
                        src="https://www.hrmexports.com/assets/images/icon/icon-7.png"
                        alt="Production"
                      />
                    </div>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3
                      className="count-text text-hrm-green"
                      data-stop="200"
                      data-speed="1500"
                    >
                      00
                    </h3>
                    <p
                      className="counter-one__text"
                      style={{ marginTop: '0px' }}
                    >
                      Production <br />
                      Tons / Day
                    </p>
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <div className="counter-one__single">
                    <div className="counter-one__icon">
                      <img
                        src="https://www.hrmexports.com/assets/images/icon/icon-8.png"
                        alt="Exporting Countries"
                      />
                    </div>
                  </div>
                  <div className="counter-one__content count-box">
                    <h3
                      className="count-text text-hrm-green"
                      data-stop="40"
                      data-speed="1500"
                    >
                      00
                    </h3>
                    <h3
                      className="text-hrm-lime"
                      style={{
                        top: '-50px',
                        left: '37px',
                        position: 'relative',
                      }}
                    >
                      {' '}
                      +{' '}
                    </h3>
                    <p className="counter-one__text">Exporting Countries</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
