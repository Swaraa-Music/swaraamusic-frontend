// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";

const Admin = () => {
  // States
  const [isLoading, setIsLoading] = useState(false);
  const [picture, setPicture] = useState();

  // Upload picture
  const uploadHandle = () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("picture", picture);
      const response = axios.post(
        `http://localhost:3000/picture/create`,
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

  return isLoading ? (
    <Loader />
  ) : (
    <div className="admin">
      <div className="admin__container">
        <label className="txt-header-purple">
          Upload Picture{" "}
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
      </div>
    </div>
  );
};

export default Admin;
