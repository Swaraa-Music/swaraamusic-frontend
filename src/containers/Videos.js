// Packages
import axios from "axios";
import { useState, useEffect } from "react";
require("dotenv").config();

const Videos = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUUUs-ri1zJU_mYumBbzjO6g&key=AIzaSyCKsqzC5bcbGo5LwAXJJbvEW5qRUSVc-P8`
        );

        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default Videos;
