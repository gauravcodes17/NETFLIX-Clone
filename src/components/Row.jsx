import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import instance from "../axios";
import "../styling/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);

      //console.log(request.data.results);
      setMovies(request.data.results);
    }

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchURL]);

  //console.log(movies);

  const opts = {
    width: "100%",
    height: "340",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie?.id || "" })
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
          alert("OOPS! This Trailer Not Available.");
        });
    }
  };

  const closeVideo = () => {
    setTrailerUrl("");
  };

  return (
    <div className="row">
      <h2 className="heading">{title}</h2>
      <div className="row_posters">
        {movies.map((movie, i) => {
          return (
            <div key={i} className="movie_collection">
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                loading="lazy"
              />
              {/*<span className="movie_name">
                {movie?.name || movie?.title || movie?.original_name}
              </span>*/}
              <span className="video">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png"
                  width="32px"
                  height="32px"
                  onClick={() => handleClick(movie)}
                  alt="play"
                />
              </span>
            </div>
          );
        })}
      </div>
      {trailerUrl && (
        <YouTube
          style={{
            marginTop: "15px",
            marginRight: "20px",
          }}
          videoId={trailerUrl}
          opts={opts}
        />
      )}
      {trailerUrl && (
        <img
          className="close_icon"
          src="https://www.imcjms.com/assets/images/close-window.png"
          alt="close"
          onClick={closeVideo}
        />
      )}
    </div>
  );
};

export default Row;
