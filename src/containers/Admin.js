// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";

const Admin = () => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [picture, setPicture] = useState();
  const [security, setSecurity] = useState(true);
  const [password, setPassword] = useState();
  const [author, setAuthor] = useState();
  const [testimonial, setTestimonial] = useState();
  const [event, setEvent] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [testimonialId, setTestimonialId] = useState();

  // Fetch pictures
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/pictures`
        );
        const response1 = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/testimonials`
        );
        setData(response.data.resources);
        setData1(response1.data);
        setTestimonialId(response1.data[0]._id);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

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

  // Delete Picture
  const deleteHandle = async (props) => {
    console.log(props.publicId);
    try {
      setIsLoading(true);
      await axios.post(
        `https://swaaramusic-backend.herokuapp.com/picture/delete`,
        { publicId: props.publicId }
      );
      setIsLoading(false);
      alert("Picture has been deleted!");
      window.location.reload(false);
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  // Delete Tetsimonial
  const deleteTestimonialHandle = async () => {
    console.log(testimonialId);
    try {
      setIsLoading(true);
      await axios.post(
        `https://swaaramusic-backend.herokuapp.com/testimonial/delete`,
        {
          testimonialId: testimonialId,
        }
      );
      setIsLoading(false);
      alert("Testimonial has been deleted!");
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
        ) : deleteModal ? (
          <div className="admin__deleteModal">
            <button
              className="btn-burgundy"
              onClick={() => setDeleteModal(false)}
            >
              Return to Admin
            </button>
            {data.map((img) => {
              return (
                <div>
                  <img src={img.url} alt={img.public_id} />
                  <button
                    className="btn-burgundy"
                    onClick={() => deleteHandle({ publicId: img.public_id })}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
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
            <label className="txt-header-purple">
              Delete Picture (Past Gigs)
              <button
                className="btn-burgundy"
                onClick={() => setDeleteModal(true)}
              >
                Select Picture to be deleted
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
            <label className="txt-header-purple">
              Delete Testimonial
              <select
                name="testimonials"
                onChange={(e) => setTestimonialId(e.target.value)}
              >
                {data1.map((testimonial) => {
                  return (
                    <option value={testimonial._id}>
                      {testimonial.author}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn-burgundy"
                onClick={() => deleteTestimonialHandle()}
              >
                Delete Testimonial
              </button>
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
