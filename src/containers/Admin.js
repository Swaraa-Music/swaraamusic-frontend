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
  const [about, setAbout] = useState();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [subTitle, setSubTitle] = useState();

  // Home slider States
  const [picture1Display, setPicture1Display] = useState();
  const [picture2Display, setPicture2Display] = useState();
  const [picture3Display, setPicture3Display] = useState();
  const [picture4Display, setPicture4Display] = useState();
  const [picture5Display, setPicture5Display] = useState();
  const [picture1, setPicture1] = useState();
  const [picture2, setPicture2] = useState();
  const [picture3, setPicture3] = useState();
  const [picture4, setPicture4] = useState();
  const [picture5, setPicture5] = useState();
  const [title1, setTitle1] = useState();
  const [title2, setTitle2] = useState();
  const [title3, setTitle3] = useState();
  const [title4, setTitle4] = useState();
  const [title5, setTitle5] = useState();
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [text3, setText3] = useState();
  const [text4, setText4] = useState();
  const [text5, setText5] = useState();

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

        const response2 = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/pictures/hero`
        );
        const response3 = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/abouts`
        );
        setData(response.data.resources);
        setData1(response1.data);
        setAbout(response3.data);
        setTestimonialId(response1.data[0]._id);

        // Setting home slider Data
        setPicture1(response2.data[0].picture);
        setPicture2(response2.data[1].picture);
        setPicture3(response2.data[2].picture);
        setPicture4(response2.data[3].picture);
        setPicture5(response2.data[4].picture);
        setPicture1Display(response2.data[0].picture);
        setPicture2Display(response2.data[1].picture);
        setPicture3Display(response2.data[2].picture);
        setPicture4Display(response2.data[3].picture);
        setPicture5Display(response2.data[4].picture);
        setTitle1(response2.data[0].title);
        setTitle2(response2.data[1].title);
        setTitle3(response2.data[2].title);
        setTitle4(response2.data[3].title);
        setTitle5(response2.data[4].title);
        setText1(response2.data[0].text);
        setText2(response2.data[1].text);
        setText3(response2.data[2].text);
        setText4(response2.data[3].text);
        setText5(response2.data[4].text);

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

  // Update HomeSlider

  const updateHomeSliderHandle = async () => {
    const formData = new FormData();
    formData.append("picture1", picture1);
    formData.append("picture2", picture2);
    formData.append("picture3", picture3);
    formData.append("picture4", picture4);
    formData.append("picture5", picture5);
    formData.append("title1", title1);
    formData.append("title2", title2);
    formData.append("title3", title3);
    formData.append("title4", title4);
    formData.append("title5", title5);
    formData.append("text1", text1);
    formData.append("text2", text2);
    formData.append("text3", text3);
    formData.append("text4", text4);
    formData.append("text5", text5);
    try {
      setIsLoading(true);
      await axios.post(
        `https://swaaramusic-backend.herokuapp.com/pictures/hero/update`,
        formData
      );
      setIsLoading(false);
      alert("Home Slider has been updated ! ");
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  // Update about
  const aboutHandle = async (props) => {
    const formData = new FormData();
    formData.append("subTitle", subTitle);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("id", props.id);

    try {
      setIsLoading(true);
      await axios.post(
        `https://swaaramusic-backend.herokuapp.com/pictures/about/update`,
        formData
      );
      setIsLoading(false);
      alert("Section updated ! ");
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
            <label className="txt-header-purple">
              Update Home Slider
              <div className="admin__hero__container">
                <div className="admin__hero">
                  <img src={picture1Display} alt={picture1Display} />
                  <label>
                    <h2 className="txt-description-black">Change Picture</h2>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setPicture1Display(
                          URL.createObjectURL(e.target.files[0])
                        );
                        setPicture1(e.target.files[0]);
                      }}
                    />
                    <h2 className="txt-description-black">Title</h2>
                    <input
                      type="text"
                      value={title1}
                      onChange={(e) => setTitle1(e.target.value)}
                    />
                    <h2 className="txt-description-black">Text</h2>
                    <textarea
                      type="text"
                      value={text1}
                      onChange={(e) => setText1(e.target.value)}
                    />
                  </label>
                </div>
                <div className="admin__hero">
                  <img src={picture2Display} alt={picture2Display} />

                  <label>
                    <h2 className="txt-description-black">Change Picture</h2>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setPicture2Display(
                          URL.createObjectURL(e.target.files[0])
                        );
                        setPicture2(e.target.files[0]);
                      }}
                    />
                    <h2 className="txt-description-black">Title</h2>
                    <input
                      type="text"
                      value={title2}
                      onChange={(e) => setTitle2(e.target.value)}
                    />
                    <h2 className="txt-description-black">Text</h2>
                    <textarea
                      type="text"
                      value={text2}
                      onChange={(e) => setText2(e.target.value)}
                    />
                  </label>
                </div>
                <div className="admin__hero">
                  <img src={picture3Display} alt={picture3Display} />

                  <label>
                    <h2 className="txt-description-black">Change Picture</h2>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setPicture3Display(
                          URL.createObjectURL(e.target.files[0])
                        );
                        setPicture3(e.target.files[0]);
                      }}
                    />
                    <h2 className="txt-description-black">Title</h2>
                    <input
                      type="text"
                      value={title3}
                      onChange={(e) => setTitle3(e.target.value)}
                    />
                    <h2 className="txt-description-black">Text</h2>
                    <textarea
                      type="text"
                      value={text3}
                      onChange={(e) => setText3(e.target.value)}
                    />
                  </label>
                </div>
                <div className="admin__hero">
                  <img src={picture4Display} alt={picture4Display} />

                  <label>
                    <h2 className="txt-description-black">Change Picture</h2>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setPicture4Display(
                          URL.createObjectURL(e.target.files[0])
                        );
                        setPicture4(e.target.files[0]);
                      }}
                    />
                    <h2 className="txt-description-black">Title</h2>
                    <input
                      type="text"
                      value={title4}
                      onChange={(e) => setTitle4(e.target.value)}
                    />
                    <h2 className="txt-description-black">Text</h2>
                    <textarea
                      type="text"
                      value={text4}
                      onChange={(e) => setText4(e.target.value)}
                    />
                  </label>
                </div>
                <div className="admin__hero">
                  <img src={picture5Display} alt={picture5Display} />

                  <label>
                    <h2 className="txt-description-black">Change Picture</h2>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setPicture5Display(
                          URL.createObjectURL(e.target.files[0])
                        );
                        setPicture5(e.target.files[0]);
                      }}
                    />
                    <h2 className="txt-description-black">Title</h2>
                    <input
                      type="text"
                      value={title5}
                      onChange={(e) => setTitle5(e.target.value)}
                    />
                    <h2 className="txt-description-black">Text</h2>
                    <textarea
                      type="text"
                      value={text5}
                      onChange={(e) => setText5(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <button
                className="btn-burgundy"
                onClick={() => updateHomeSliderHandle()}
              >
                Update Home Slider
              </button>
            </label>
            <label className="txt-header-purple">Change About Sections</label>

            <div className="txt-header-purple admin__about">
              {about.map((about) => {
                return (
                  <div>
                    <label className="txt-header-purple">
                      {about._id === "61b35973d330521b079d16c7" && "Home Top"}
                      {about._id === "61b35c566805e98e15cef2ff" &&
                        "Home Bottom"}
                      {about._id === "61b35cc66805e98e15cef301" && "About Page"}
                    </label>
                    {about._id !== "61b35c566805e98e15cef2ff" && (
                      <h2 className="txt-description-black">Title</h2>
                    )}
                    {about._id !== "61b35c566805e98e15cef2ff" && (
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    )}

                    <h2 className="txt-description-black">Sub-title</h2>
                    <textarea
                      type="text"
                      value={subTitle}
                      onChange={(e) => setSubTitle(e.target.value)}
                    ></textarea>
                    <h2 className="txt-description-black">Text</h2>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <button
                      className="btn-burgundy"
                      onClick={() => aboutHandle({ id: about._id })}
                    >
                      Update Section
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
