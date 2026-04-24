export default function ActionButtons() {
  return (
    <>
      <div className="fixed-sec-fot">
        <a
          href="https://api.whatsapp.com/send?phone=917351000031&text=Hello, I saw your Company profile on your Hrm Exports website, can i get more Details?"
          className="float-ban shakehv transition-transform hover:scale-110"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fab fa-whatsapp"></span>
        </a>

        <a
          href="#inquirynow"
          className="float-ban shakehv transition-transform hover:scale-110"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Send Enquiry"
        >
          <span className="fa fa-envelope fnt"></span>
        </a>

        <a
          href="tel:+91 73 5700 0031"
          className="float_1-ban shakehv transition-transform hover:scale-110"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Call"
        >
          <span className="fa fa-phone fnt" style={{ rotate: "90deg" }}></span>
        </a>

        <a
          href="https://www.google.com/maps/place/HRM+EXPORTS/@29.7642828,76.8666694,17z/data=!3m1!4b1!4m6!3m5!1s0x390e6bf897401eaf:0xfca271b94f5cc8f!8m2!3d29.7642782!4d76.8692443!16s%2Fg%2F11h0d7_j7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          className="float-ban shakehv transition-transform hover:scale-110"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Navigation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa fa-paper-plane fnt mb-0"></span>
        </a>
      </div>

      <a
        href="#"
        data-target="html"
        className="scroll-to-target scroll-to-top transition-transform hover:scale-110"
      >
        <i className="icon-right-arrow"></i>
      </a>
    </>
  );
}
