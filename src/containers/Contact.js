// Packages
import { useState } from "react";

// Components
import Footer from "../components/Footer";

const Contact = () => {
  // States
  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState();
  const [subject, setSubject] = useState();
  const [from, setFrom] = useState();

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h1 className="txt-description-black">Phone : </h1>
          <p>
            07866 366 197 <span>or</span> 07944 587 606
          </p>
          <h1 className="txt-description-black">Email :</h1>
          <p>info@swaraamusic.com</p>
        </div>
        <div className="contact__form">
          <h1 className="txt-header-purple">Contact Form</h1>
          <h2>
            All fields marked with <span>*</span> are mandatory
          </h2>
          <label htmlFor="fullName">
            <div className="txt-description-black">
              Full Name <span>*</span>
            </div>
            <input type="text" name="fullName" id="fullName" />
          </label>
          <label htmlFor="email">
            <div className="txt-description-black">
              Email <span>*</span>
            </div>
            <input type="email" name="email" id="email" />{" "}
          </label>
          <label htmlFor="phone">
            <div className="txt-description-black">Phone</div>
            <input type="text" name="phone" id="phone" />
          </label>
          <label htmlFor="subject">
            <div className="txt-description-black">
              Subject <span>*</span>
            </div>
            <input type="text" name="subject" id="subject" />
          </label>
          <label htmlFor="message">
            <div className="txt-description-black">
              Message <span>*</span>
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <button className="btn-burgundy">Send</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
