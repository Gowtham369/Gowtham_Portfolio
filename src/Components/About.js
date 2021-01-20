import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { BsInfoCircle } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";

export default function About(props) {
  return (
    <div className="about" id="about">
      <div className="about-summary">
        <div>
          <BsInfoCircle title="About" className="info-icon" />
        </div>
        {props.about.basics.summary}
      </div>
      <div className="skills-section">
        <span className="section-title">Skills</span>
        <div className="skills-group">
          {props.about.skills.map((data, i) => {
            return (
              <div key={i} className="skills">
                <CircularProgressbarWithChildren value={data.yearsOfExperience}>
                  {data.name}
                </CircularProgressbarWithChildren>
              </div>
            );
          })}
        </div>
      </div>
      <div className="projects-section">
        <span className="section-title">Projects</span>
        <div className="projects-group">
          {props.about.projects.map((data, i) => {
            return (
              <div key={i} className="projects">
                <div className="proj-title">{data.displayName}</div>
                <div className="project-details">
                  <div>
                    <span>Used Languages:</span>
                    <div>
                      {data.languages.map((langData, j) => {
                        return (
                          <div key={j} className="proj-langs">
                            {langData}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <span>Used Libraries:</span>
                    <div>
                      {data.libraries.map((libData, j) => {
                        return (
                          <div key={j} className="proj-libs">
                            {libData}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <a href={data.url} target="_blank">
                    Checkout project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="languages-section">
        <span className="section-title">Languages</span>
        <div className="languages-group">
          {props.about.languages.map((data, i) => {
            return (
              <div key={i} className="languages">
                <div>{data.language}</div>
                <div>{data.fluency}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
