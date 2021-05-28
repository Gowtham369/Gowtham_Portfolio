import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../Assets/gowtham-portfolio-logo.png";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar(props) {
  const [navbarstatus, setNavbarstatus] = useState(false);

  return (
    <div>
      {navbarstatus ? (
        <AiOutlineClose
          onClick={() => setNavbarstatus(false)}
          className="close-btn"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => setNavbarstatus(true)}
          className="menu-btn"
        />
      )}
      <div
        onClickCapture={() => setNavbarstatus(false)}
        className={navbarstatus ? "navbar unhide" : "navbar"}
      >
        <Link to="home" smooth={true} duration={500}>
          <img data-aos="fade-down" alt="logo" src={logo} className="logo" />
        </Link>
        <div data-aos="fade-right" className="navlinks">
          <Link to="about" spy={true} smooth={true} duration={500}>
            <RiProfileLine />
            <div>About</div>
          </Link>
          <Link to="education" spy={true} smooth={true} duration={500}>
            <FaSchool />
            <div>Education</div>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <RiContactsBookLine />
            <div>Contact</div>
          </Link>
        </div>
        <div data-aos="fade-left" className="socialicons-container">
          {props.navbar.map((data, i) => {
            return (
              <SocialIcon
                key={i}
                url={data.url}
                title={data.network}
                className="socialicons"
                target="_blank"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
