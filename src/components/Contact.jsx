import "./Contact.css";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div className="info-contact-message">
      <div className="info-contact" data-aos="fade-right">
        <h5 className="text-contact">Address</h5>
        <p>Zalău, Romania</p>
        <h5 className="text-contact">Phone</h5>
        <p>+40747357781</p>
        <h5 className="text-contact">E-mail</h5>
        <p>isti.daroczi@gmail.com</p>
      </div>
      <div className="message" data-aos="fade-left">
        <ContactForm />
      </div>
    </div>
  );
}
