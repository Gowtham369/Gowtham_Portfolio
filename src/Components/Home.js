import React from "react";
import photo from "../Assets/portfolio-photo1.png";

export default function Home(props) {
  return (
    <div className="home" id="home">
      <div className="homedetails">
        <div data-aos="fade-down-left" className="myname">
          {props.home.name}
        </div>
        <div data-aos="fade-down-right">{props.home.label}</div>
      </div>
      <img data-aos="zoom-in" alt="My Pic" src={photo} className="photo" />
    </div>
  );
}
