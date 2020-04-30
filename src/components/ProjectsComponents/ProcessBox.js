import React from "react";

const ProcessBox = (props) => {
  console.log(props);
  return (
    <div className="col-6 col-sm-4 col-lg-3">
      <div className="process-box">
        <div className="process-title">
          
          <div className="process-title-content">
            <span>{props.title ? props.title : ""}</span>
          </div>
        </div>
        <div className="process-tools">
            {props.tools.length > 0 ? (
                <p>Tools</p>
            ) : ""}
          {props.tools.length > 0 &&
            props.tools.map((tool) => {
              return (
                <div className="process-tool" key={`${props.process}-${tool}`}>
                  <span>{tool}</span>
                  <hr/>
                </div>
              );
            })}
        </div>
        <div className="process-content">
          {props.content.length > 0 &&
            props.content.map((item) => {
              return (
                <div
                  className="process-content-item"
                  key={`${props.process}-${item}`}
                >
                  <span>{item}</span>
                  <hr/>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProcessBox;
