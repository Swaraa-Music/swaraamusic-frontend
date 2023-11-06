// Packages
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";
import { API } from "../config";
import isEqual from "react-fast-compare";

const Admin = () => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [pictures, setPicture] = useState([]);

  console.log(pictures, "dfd");

  const [security, setSecurity] = useState(true);
  const [password, setPassword] = useState("");
  const [author, setAuthor] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [event, setEvent] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [testimonialId, setTestimonialId] = useState("");

  // About States
  const [aboutTitle1, setAboutTitle1] = useState("");
  const [aboutText1, setAboutText1] = useState("");
  const [aboutSubtitle1, setAboutSubtitle1] = useState("");
  const [aboutTitle2, setAboutTitle2] = useState("");
  const [aboutText2, setAboutText2] = useState("");
  const [aboutSubtitle2, setAboutSubtitle2] = useState("");
  const [aboutTitle3, setAboutTitle3] = useState("");
  const [aboutText3, setAboutText3] = useState("");
  const [aboutSubtitle3, setAboutSubtitle3] = useState("");

  // Home slider States
  const [picture1Display, setPicture1Display] = useState("");
  const [picture2Display, setPicture2Display] = useState("");
  const [picture3Display, setPicture3Display] = useState("");
  const [picture4Display, setPicture4Display] = useState("");
  const [picture5Display, setPicture5Display] = useState("");
  const [picture1, setPicture1] = useState("");
  const [picture2, setPicture2] = useState("");
  const [picture3, setPicture3] = useState("");
  const [picture4, setPicture4] = useState("");
  const [picture5, setPicture5] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [title3, setTitle3] = useState("");
  const [title4, setTitle4] = useState("");
  const [title5, setTitle5] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");

  // Fetch pictures
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/pictures`);
        const response1 = await axios.get(`${API}/testimonials`);

        const response2 = await axios.get(`${API}/pictures/hero`);
        const response3 = await axios.get(`${API}/abouts`);
        setData(response?.data?.resources);
        setData1(response1?.data);
        setTestimonialId(response1?.data[0]?._id);

        // Setting About Data
        setAboutText1(response3?.data[0]?.text);
        setAboutText2(response3?.data[1]?.text);
        setAboutText3(response3?.data[2]?.text);
        setAboutTitle1(response3?.data[0]?.title);
        setAboutTitle2(response3?.data[1]?.title);
        setAboutTitle3(response3?.data[2]?.title);
        setAboutSubtitle1(response3?.data[0]?.subTitle);
        setAboutSubtitle2(response3?.data[1]?.subTitle);
        setAboutSubtitle3(response3?.data[2]?.subTitle);

        // Setting home slider Data
        setPicture1(response2?.data[0]?.picture);
        setPicture2(response2?.data[1]?.picture);
        setPicture3(response2?.data[2]?.picture);
        setPicture4(response2?.data[3]?.picture);
        setPicture5(response2?.data[4]?.picture);
        setPicture1Display(response2?.data[0]?.picture);
        setPicture2Display(response2?.data[1]?.picture);
        setPicture3Display(response2?.data[2]?.picture);
        setPicture4Display(response2?.data[3]?.picture);
        setPicture5Display(response2?.data[4]?.picture);
        setTitle1(response2?.data[0]?.title);
        setTitle2(response2?.data[1]?.title);
        setTitle3(response2?.data[2]?.title);
        setTitle4(response2?.data[3]?.title);
        setTitle5(response2?.data[4]?.title);
        setText1(response2?.data[0]?.text);
        setText2(response2?.data[1]?.text);
        setText3(response2?.data[2]?.text);
        setText4(response2?.data[3]?.text);
        setText5(response2?.data[4]?.text);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const uploadHandle = () => {
    const folderName = "Past Gigs"; // Define the folder name

    const uploads = pictures?.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "adimbwct");
      formData.append("timestamp", Math.floor(Date.now() / 1000)); // Update timestamp logic
      formData.append("folder", `swaraamusic/${folderName}`); // Include the folder path

      const URL = `https://api.cloudinary.com/v1_1/dzlpbjxhv/image/upload`;
      setIsLoading(true);

      return axios
        .post(URL, formData)
        .then((response) => {
          const { data } = response;
          const fileURL = data.secure_url;

          console.log(fileURL);
          setIsLoading(false);
          window.location.reload(false);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    });

    Promise.all(uploads)
      .then(() => {
        console.log("Upload completed");
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
      });
  };
  // Upload picture
  const uploadTestimonialHandle = async () => {
    try {
      setIsLoading(true);

      await axios.post(`${API}/testimonial/create`, {
        author,
        testimonial,
        event,
      });

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
      await axios.post(`${API}/picture/delete`, {
        publicId: props.publicId,
      });
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
      await axios.post(`${API}/testimonial/delete`, {
        testimonialId: testimonialId,
      });
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
    formData.append("picture1", picture1 || "");
    formData.append("picture2", picture2 || "");
    formData.append("picture3", picture3 || "");
    formData.append("picture4", picture4 || "");
    formData.append("picture5", picture5 || "");
    formData.append("title1", title1 || "");
    formData.append("title2", title2 || "");
    formData.append("title3", title3 || "");
    formData.append("title4", title4 || "");
    formData.append("title5", title5 || "");
    formData.append("text1", text1 || "");
    formData.append("text2", text2 || "");
    formData.append("text3", text3 || "");
    formData.append("text4", text4 || "");
    formData.append("text5", text5 || "");
    try {
      setIsLoading(true);
      await axios.post(`${API}/pictures/hero/update`, formData);
      setIsLoading(false);
      alert("Home Slider has been updated ! ");
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  // Update about
  const aboutHandle = async () => {
    const formData = new FormData();
    formData.append("aboutText1", aboutText1);
    formData.append("aboutSubtitle1", aboutSubtitle1);
    formData.append("aboutTitle1", aboutTitle1);
    formData.append("aboutText2", aboutText2);
    formData.append("aboutSubtitle2", aboutSubtitle2);
    formData.append("aboutTitle2", aboutTitle2);
    formData.append("aboutText3", aboutText3);
    formData.append("aboutSubtitle3", aboutSubtitle3);
    formData.append("aboutTitle3", aboutTitle3);

    try {
      setIsLoading(true);
      await axios.post(`${API}/about/update`, formData);
      setIsLoading(false);
      alert("Section updated ! ");
    } catch (error) {
      setIsLoading(false);
      alert(error);
    }
  };

  // Handle the selected files
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setPicture([...selectedFiles]); // Assuming 'pictures' is a state variable
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
                password === "1"
                  ? // password === "Ishaani123#"
                    () => setSecurity(false)
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
            {data?.map((img) => {
              return (
                <div>
                  <img src={img?.url} alt={img?.public_id} />
                  <button
                    className="btn-burgundy"
                    onClick={() => deleteHandle({ publicId: img?.public_id })}
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
                multiple
                onChange={handleFileChange}
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
              <div>
                <label className="txt-header-purple">Home Top</label>

                <h2 className="txt-description-black">Title</h2>

                <input
                  type="text"
                  value={aboutTitle1}
                  onChange={(e) => setAboutTitle1(e.target.value)}
                />

                <h2 className="txt-description-black">Sub-title</h2>
                <textarea
                  type="text"
                  value={aboutSubtitle1}
                  onChange={(e) => setAboutSubtitle1(e.target.value)}
                ></textarea>
                <h2 className="txt-description-black">Text</h2>
                <textarea
                  value={aboutText1}
                  onChange={(e) => setAboutText1(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="txt-header-purple">Home Bottom</label>

                <h2 className="txt-description-black">Sub-title</h2>
                <textarea
                  type="text"
                  value={aboutSubtitle2}
                  onChange={(e) => setAboutSubtitle2(e.target.value)}
                ></textarea>
                <h2 className="txt-description-black">Text</h2>
                <textarea
                  value={aboutText2}
                  onChange={(e) => setAboutText2(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="txt-header-purple">About Page</label>

                <h2 className="txt-description-black">Title</h2>

                <input
                  type="text"
                  value={aboutTitle3}
                  onChange={(e) => setAboutTitle3(e.target.value)}
                />

                <h2 className="txt-description-black">Sub-title</h2>
                <textarea
                  type="text"
                  value={aboutSubtitle3}
                  onChange={(e) => setAboutSubtitle3(e.target.value)}
                ></textarea>
                <h2 className="txt-description-black">Text</h2>
                <textarea
                  value={aboutText3}
                  onChange={(e) => setAboutText3(e.target.value)}
                ></textarea>
              </div>
              <button className="btn-burgundy" onClick={() => aboutHandle()}>
                Update About Sections
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// export default Admin;
export default React.memo(Admin, isEqual);
