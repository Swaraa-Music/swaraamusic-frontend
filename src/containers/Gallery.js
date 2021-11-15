// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";

const Gallery = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  // Fetch pictures
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://swaaramusic-backend.herokuapp.com/pictures`
        );
        setData(response.data.resources);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  // Modal Handle
  const modalHandle = (props) => {
    console.log(props.info);
    setModalInfo(props.info);
    setModal(true);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="gallery">
      <div className="gallery__container">
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        <iframe
          src="https://snapwidget.com/embed/972068"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "auto",
            padding: "10px",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Gallery;
