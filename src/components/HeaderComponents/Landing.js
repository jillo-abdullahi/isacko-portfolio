import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";

class Landing extends React.Component {
  //send to process section
  toProcesses = () => {
    window.location.href = "#processes";
  };
  //send to contacts section
  toContacts = () => {
    window.location.href = "#contacts";
  };
  render() {
    return (
      <div className="container-fluid landing-main">
        <div className="container">
          <div className="navbar-section">
            <Navbar />
          </div>
          <div className="intro-section">
            <Intro
              toProcesses={this.toProcesses}
              toContacts={this.toContacts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
