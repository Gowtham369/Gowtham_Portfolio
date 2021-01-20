import React from "react";
import { RiAwardFill } from "react-icons/ri";
export default function Education(props) {
  return (
    <div className="education" id="education">
      <div className="edu-title">Education</div>
      {props.education.map((data, i) => {
        return (
          <div key={i} className="educationcards">
            <div>{data.institution}</div>
            <div className="flex-edu-details">
              <div className="col-6">
                <div className="study-type">{data.studyType}</div>
                <div>{data.area}</div>
              </div>
              <div className="col-6">
                <div title="Duration" className="edu-span">
                  Date Completed: {data.end.year}/{data.end.month}
                </div>
                <div>
                  <span className="grade">{data.score}</span>
                  <RiAwardFill />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
