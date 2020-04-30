import React from "react";
import IntroButtons from "./IntroButtons";
import About from "../AboutComponents/About";

const Intro = (props) => {
  return (
    <div className="intro-content">
      <div className="row">
        <div className="col-md-7 intro-text">
          <h1>Hello,</h1>
          <h2>
            I'm <span className="name">Isacko Sharamo</span>.
          </h2>
          <h5>Data Engineer specializing in Extract Transform Load and ETL.</h5>
          <div className="about-section">
            <About />
          </div>
        </div>
        <div className="col-md-5 intro-image-section">
          <div className="image-content"></div>
          <div className="intro-buttons-section">
            <div className="intro-buttons-content">
              <IntroButtons
                toProcesses={props.toProcesses}
                toContacts={props.toContacts}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
