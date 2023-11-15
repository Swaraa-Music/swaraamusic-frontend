// Packages
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";
import { API } from "../config";
import isEqual from "react-fast-compare";

const Past = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  // Fetch pictures
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}/pictures`);
        const sortedData = response.data.resources.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setData(sortedData);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  // Modal Handle
  const modalHandle = (props) => {
    setModalInfo(props.info);
    setModal(true);
  };
  return (
    <>
      <div className="past">
        {modal && (
          <div className="past__modal">
            <p onClick={() => setModal(false)}>X</p>
            <img src={modalInfo} alt={modalInfo} />
          </div>
        )}
        {data?.length !== 0 && (
          <div className="past__container">
            {data?.map((img) => {
              return (
                <div>
                  <img
                    src={img?.url}
                    alt={img?.public_id}
                    onClick={() => modalHandle({ info: img?.url })}
                  />
                </div>
              );
            })}
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

// export default Past;
export default React.memo(Past, isEqual);
