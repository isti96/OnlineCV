import "./Contact.css";

export function Contact() {
  return (
    <div className="app-contact">
      <p className="section-name">Contact me :D</p>
      <div className="info-contact-message">
        <div className="info-contact">
          <h5 className="text-contact">Address</h5>
          <p>Zalau, Romania</p>
          <h5 className="text-contact">Phone</h5>
          <p>+40747357781</p>
          <h5 className="text-contact">Email</h5>
          <p>isti.daroczi@gmail.com</p>
        </div>
        <div className="message">
            <p>here is the form</p>
        </div>
      </div>
    </div>
  );
}
