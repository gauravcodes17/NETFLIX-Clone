import React from "react";
import "../styling/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        onClick={() => navigate("/")}
      />
      <span
        className="nav_title"
        onClick={() => alert("Only Available in English")}
      >
        English
      </span>
    </div>
  );
};

export default Navbar;
