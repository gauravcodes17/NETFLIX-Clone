import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import "../styling/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.627), rgba(0, 0, 0, 0.6)), url("https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/eceef24d-4920-430f-988b-d2f48f8ad060/IN-en-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
        backgroundPosition: "center center",
        width: "100%",
        height: "100vh",
      }}
    >
      <HomeNavbar />
      <h1 className="home_heading">
        Unlimited movies, TV <br /> shows and more.
      </h1>
      <h4 className="home_title">Watch anywhere. Watch anytime.</h4>
      <h5 className="home_last_title">Ready to watch?</h5>
      <div className="home_buttons">
        <Link to="/movies">
          <button className="home_button">Browse Movies</button>
        </Link>
        &nbsp;&nbsp;
        <Link to="/tv">
          <button className="home_button">Browse Tv Shows</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
