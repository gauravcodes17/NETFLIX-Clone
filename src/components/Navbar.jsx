import React, { useState, useEffect } from "react";
import "../styling/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="account"
      />
    </div>
  );
};

export default Navbar;
