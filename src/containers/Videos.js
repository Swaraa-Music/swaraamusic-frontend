// Packages
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

const Videos = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLsT4Ld8jmE5CjE2HTTdipZW4wiL6znyZl&key=AIzaSyCKsqzC5bcbGo5LwAXJJbvEW5qRUSVc-P8`
        );
        setData(response.data);
        setIsLoading(false);

        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="videos bg-pink-purple-gradient">
      <div className="videos__container">
        {data.items.map((video) => {
          return (
            <iframe
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
