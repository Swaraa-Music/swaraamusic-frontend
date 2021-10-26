// Packages
import { useState } from "react";
import axios from "axios";

// Components
import Footer from "../components/Footer";
import Loader from "../components/Utility/Loader";

const Contact = () => {
  // States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Contact Submiy Handle

  const submitHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("from", from);
      formData.append("fullName", fullName);
      formData.append("subject", subject);
      formData.append("message", message);
      formData.append("phone", phone);
      const response = await axios.post(
        "https://swaaramusic-backend.herokuapp.com/mail/contact",
        formData
      );
      if (response.data === "Email sent!") {
        setIsSent(true);
        setIsLoading(false);
      } else {
        setErrorMessage(response.data.error);
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage("Unknown Problem");
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      {isLoading && <Loader />}
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
          {isSent ? (
            <>
              <h1 className="txt-header-purple contact__confirmation">
                Your Email has been sent !{" "}
              </h1>
              <button className="btn-burgundy" onClick={() => setIsSent(false)}>
                Send Another ?
              </button>
              <div className="contact__spacer"></div>
            </>
          ) : (
            <>
              {" "}
              <h1 className="txt-header-purple">Contact Form</h1>
              <h2>
                All fields marked with <span>*</span> are mandatory
              </h2>
              <h3>{errorMessage}</h3>
              <label htmlFor="fullName">
                <div className="txt-description-black">
                  Full Name <span>*</span>
                </div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>
              <label htmlFor="email">
                <div className="txt-description-black">
                  Email <span>*</span>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />{" "}
              </label>
              <label htmlFor="phone">
                <div className="txt-description-black">Phone</div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label htmlFor="subject">
                <div className="txt-description-black">
                  Subject <span>*</span>
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
              <button className="btn-burgundy" onClick={() => submitHandle()}>
                Send
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
