// Packages
import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import Footer from "../components/Footer";
import Loader from "../components/Utility/Loader";

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/about.json";
import { API } from "../config";
import emailjs from "emailjs-com";
import isEqual from "react-fast-compare";

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

  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`${API}/header`);
        setContact(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContact();
  }, []);

  // Contact Submiy Handle

  const submitHandle = async () => {
    try {
      setIsLoading(true);
      const data = {
        from,
        fullName,
        subject,
        message,
        phone,
      };

      emailjs
        .send("service_elfcbhh", "template_jcq7ggt", data, "SqbT2VloJb0NTjUDb")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setIsSent(true);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Unknown Problem");
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <Metadecorator
        title={tags.pagetitle}
        description={tags.pagedescription}
        tags={tags.tags}
      />
      {isLoading && <Loader />}
      <div className="contact__container">
        <div className="contact__info">
          <h1 className="txt-description-black">Phone : </h1>
          <p>
            <a href={`tel:${contact[0]?.contact1}`}>07866 366 197</a>{" "}
            <span>or</span>{" "}
            <a href={`tel:${contact[0]?.contact2}`}>07944 587 606</a>
          </p>
          <h1 className="txt-description-black">Email :</h1>
          <p>
            {" "}
            <a href="mailto:info@swaraamusic.com">info@swaraamusic.com</a>
          </p>
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

// export default Contact;
export default React.memo(Contact, isEqual);
