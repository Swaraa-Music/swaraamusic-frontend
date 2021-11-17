// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";

const Admin = () => {
  // States
  const [isLoading, setIsLoading] = useState(false);
  const [picture, setPicture] = useState();
  const [security, setSecurity] = useState(true);
  const [password, setPassword] = useState();
  const [author, setAuthor] = useState();
  const [testimonial, setTestimonial] = useState();
  const [event, setEvent] = useState();

  // Upload picture
  const uploadHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("picture", picture);
      await axios.post(
        `https://swaaramusic-backend.herokuapp.com/picture/create`,
        formData
      );

      setIsLoading(false);
      alert("Your picture has been uploaded!");
      window.location.reload(false);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  // Upload picture
  const uploadTestimonialHandle = async () => {
    try {
      setIsLoading(true);

      await axios.post(
        `https://swaaramusic-backend.herokuapp.com/testimonial/create`,
        { author, testimonial, event }
      );

      setIsLoading(false);
      alert("Your testimonial has been uploaded!");
      window.location.reload(false);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="admin">
      <div className="admin__container">
        {security ? (
          <div className="admin__password">
            <h1 className="txt-header-purple">Password</h1>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="btn-burgundy"
              onClick={
                password === "Ishaani123#"
                  ? () => setSecurity(false)
                  : () => alert("Wrong Password")
              }
            >
              Submit
            </button>
          </div>
        ) : (
          <>
            <label className="txt-header-purple">
              Upload Picture for Past Gigs{" "}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setPicture(e.target.files[0]);
                }}
              />
              <button className="btn-burgundy" onClick={() => uploadHandle()}>
                Upload Picture
              </button>
            </label>
            <div className="txt-header-purple">
              Upload Testimonal
              <h2 className="txt-description-black">Author</h2>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <h2 className="txt-description-black">Testimonial</h2>
              <textarea
                type="text"
                value={testimonial}
                onChange={(e) => setTestimonial(e.target.value)}
              />
              <h2 className="txt-description-black">Event</h2>
              <input
                type="text"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
              />
              <button
                className="btn-burgundy"
                onClick={() => uploadTestimonialHandle()}
              >
                Upload Testimonial
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
