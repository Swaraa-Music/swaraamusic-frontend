// Packages
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loader from "../components/Utility/Loader";
import Footer from "../components/Footer";

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/videos.json";


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
      <Metadecorator title={tags.pagetitle} description={tags.pagedescription} tags={tags.tags}/>
      <div className="videos__showreel__container">
        {/* <h1 className="txt-header-white">Showreel</h1>
          <video
            controls
            src="https://res.cloudinary.com/itrsq/video/upload/v1637939362/swaraamusic/Videos/VID-2021showrel_4_website_jd238q.mp4"
          ></video> */}
        <h1 className="txt-header-white">Event Video Clips</h1>
      </div>

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
