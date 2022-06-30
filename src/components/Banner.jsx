import React, { useState, useEffect } from "react";
import instance from "../axios";
import requests from "../requests";
import "../styling/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      /*console.log(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );*/

      setMovie(request.data.results[11]);
    }

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.227), rgba(0, 0, 0, 0.2)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 110)}</h1>
      </div>
      <div className="banner_home_buttons">
        <Link to="/tv">
          <button className="banner_home_button">Go To Tv Shows</button>
        </Link>
      </div>
    </header>
  );
};

export default Banner;
