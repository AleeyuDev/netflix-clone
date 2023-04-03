import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handlerShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handlerShow(true);
      } else handlerShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="./Netflix-avatar.png"
        alt="netflix-logo"
      />
      <img className="nav_avatar" src="./netflix-logo.png" alt="netflix-logo" />
    </div>
  );
}

export default Nav;

