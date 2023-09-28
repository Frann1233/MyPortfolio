import React, { useEffect } from "react";
import "./Navbar.scss";

import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub, AiOutlineMenu } from "react-icons/ai";
import { images } from "../../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //listen to window resizes and put the width into 'windowWidth' state variable
  useEffect(() => {
    const adaptWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", adaptWindowWidth);

    return () => {
      window.removeEventListener("resize", adaptWindowWidth);
    };
  }, []);

  //toggle the navigation depending on 'windowWidth' - hide on mobile, show on desktop
  useEffect(() => {
    if (windowWidth > 1280) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, [windowWidth]);

  const handleToggle = () => {
    if (windowWidth < 1280) {
      setToggle((toggle) => !toggle);
    }
  };

  return (
    <nav className="app_navbar">
      <div className="app_navbar_hamburger_icon" onClick={() => handleToggle()}>
        <AiOutlineMenu />
      </div>
      <div className={`app_navbar_container ${toggle ? " hidden" : ""}`}>
        <div className="app_navbar_top">
          <div className="app_navbar_logo">
            <img src={images.LogoF} alt="logo" />
            <h1>Fran</h1>
            <h5>Web Developer</h5>
          </div>
        </div>
        <div className="app_navbar_main">
          <ul>
            {["Home", "About", "Work", "Contact"].map((item) => (
              <li key={`link-${item}`}>
                <div className="app_navbar_links">
                  <a href={`/#${item}`} onClick={() => handleToggle()}>
                    {item}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="app_navbar_icons">
          <a href="https://www.linkedin.com/in/fran-busic-2b6427257/">
            <GrLinkedinOption />
          </a>
          <a href="https://github.com/Frann1233">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
