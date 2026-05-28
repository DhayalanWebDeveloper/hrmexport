export default function ActionButtons() {
  return (
    <>
      <div className="fixed-sec-fot">
        <a
          href="https://api.whatsapp.com/send?phone=919003374455&text=Hello, I saw your Company profile on your JKR SOZHAN Exim website, can i get more Details?"
          className="float-ban shakehv transition-transform hover:scale-110"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-brands fa-whatsapp"></span>
        </a>

        <a
          href="#inquirynow"
          className="float-ban shakehv transition-transform hover:scale-110"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Send Enquiry"
        >
          <span className="fa-solid fa-envelope fnt"></span>
        </a>

        <a
          href="tel:+91 9003374455"
          className="float_1-ban shakehv transition-transform hover:scale-110"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Call"
        >
          <span className="fa-solid fa-phone fnt" style={{ rotate: "90deg" }}></span>
        </a>

        <a
          href="https://www.google.com/maps/search/No+53,+Pillaiyar+kovil+street,+Kottiyampundi,+Viluppuram,+Tamil+Nadu+-+605203"
          className="float-ban shakehv transition-transform hover:scale-110"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Navigation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-solid fa-paper-plane fnt mb-0"></span>
        </a>
      </div>

      <a
        href="#"
        data-target="html"
        className="scroll-to-target scroll-to-top transition-transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
}
