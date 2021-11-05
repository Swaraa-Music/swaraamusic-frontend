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
      {
        <div className="gallery__container">
          {modal ? (
            <div className="gallery__modal">
              <i class="fas fa-times" onClick={() => setModal(false)}></i>
              <img src={modalInfo} alt={modalInfo} />
            </div>
          ) : (
            data.map((picture, index) => {
              return (
                <img
                  src={picture.url}
                  alt={picture.url}
                  onClick={() => modalHandle({ info: picture.url })}
                />
              );
            })
          )}
        </div>
      }
    </div>
  );
};

export default Gallery;
