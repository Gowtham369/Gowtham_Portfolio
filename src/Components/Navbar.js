import React from "react";
import { Link } from "react-scroll";
import logo from "../Assets/gowtham-portfolio-logo.png";
import { RiProfileLine, RiContactsBookLine } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Link to="home" smooth={true} duration={500}>
        <img alt="logo" src={logo} className="logo" />
      </Link>
      <div className="navlinks">
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
      <div className="socialicons-container">
        {props.navbar.map((data, i) => {
          return (
            <SocialIcon
              key={i}
              url={data.url}
              title={data.network}
              className="socialicons"
            />
          );
        })}
      </div>
    </div>
  );
}
