import React from "react";
import photo from "../Assets/portfolio-photo1.png";

export default function Home(props) {
  return (
    <div className="home" id="home">
      <div className="homedetails">
        <div className="myname">{props.home.name}</div>
        <div>{props.home.label}</div>
      </div>
      <img alt="My Pic" src={photo} className="photo" />
    </div>
  );
}
