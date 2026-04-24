export default function EnquiryForm() {
  return (
    <section className="contact-four pb-0" id="inquirynow">
      <div
        className="contact-four__bg"
        style={{
          backgroundImage:
            "url(/assets/images/backgrounds/footer-bg-1.jpg)",
          backgroundPosition: "50% 50%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container">
        <div className="section-title text-center">
          <div className="section-title__icon">
            <img
              src="/assets/images/icon/section-title-icon.png"
              alt="Contact with me"
            />
          </div>
          <span className="section-title__tagline">Contact with me</span>
          <h3 className="section-title__title">Enquiry Form</h3>
        </div>
        <div className="contact-four__form-box">
          <form
            action="https://www.hrmexports.com/contact-save"
            className="contact-four__form contact-form-validated"
            method="POST"
          >
            <input
              type="hidden"
              name="_token"
              value="NFIIm164fVRSoWPpBp8lrujjADMNcBl1sKFa5HwJ"
            />
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-four__input-box">
                  <input type="text" placeholder="Your name" name="name" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-four__input-box">
                  <input type="email" placeholder="Email address" name="email" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-four__input-box">
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    maxLength={20}
                  />
                  <input type="hidden" name="h_phone" id="h_phone" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-four__input-box">
                  <input type="text" placeholder="Subject" name="subject" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-four__input-box text-message-box">
                  <textarea name="description" placeholder="Write  a message"></textarea>
                </div>
                <div className="contact-four__btn-box">
                  <button type="submit" className="thm-btn contact-four__btn">
                    Send a Message
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="result"></div>
        </div>
      </div>
    </section>
  );
}
