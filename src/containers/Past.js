// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";
import { API } from "../config";

const Past = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  // Fetch pictures
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/pictures`);
        setData(response.data.resources);
        console.log(response.data.resources);
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
    <div className="past">
      {modal && (
        <div className="past__modal">
          <p onClick={() => setModal(false)}>X</p>
          <img src={modalInfo} alt={modalInfo} />
        </div>
      )}
      <div className="past__container">
        {data.map((img) => {
          return (
            <div>
              {" "}
              <img
                src={img.url}
                alt={img.public_id}
                onClick={() => modalHandle({ info: img.url })}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Past;
