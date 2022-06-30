import React from "react";
import HomeNavabar from "../components/HomeNavbar";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

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
      <HomeNavabar />
      <h2 className="home_heading">OOPS! 404 Error Page Not Found!</h2>
      <div className="home_buttons">
        <button
          className="home_button"
          onClick={() => {
            navigate("/");
          }}
        >
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default Error;
