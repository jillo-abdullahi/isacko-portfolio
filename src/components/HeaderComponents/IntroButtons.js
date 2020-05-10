import React from "react";

export default function IntroButtons(props) {
  return (
    <div className="intro-buttons-content">
      <div className="go-to-projects">
        <a href="#processes" className="intro-button">
          see projects
        </a>
      </div>
      <div className="go-to-contacts">
        <a href="#contacts" className="intro-button">
          contact me
        </a>
      </div>
    </div>
  );
}
