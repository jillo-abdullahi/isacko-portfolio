import React from "react";
import StorageIcon from "@material-ui/icons/Storage";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DvrIcon from "@material-ui/icons/Dvr";
import BackupIcon from "@material-ui/icons/Backup";

const ProcessBox = (props) => {
  return (
    <div className="col-6 col-sm-4 col-lg-3">
      <div className="process-box">
        <div className="process-title">
          <div className="process-title-content">
            <span>{props.title ? props.title : ""}</span>
          </div>
        </div>
        <div className="process-icon">
          <div className="process-icon-content">
            {props.title === "Connect Phase 1" ? (
              <AccountTreeIcon fontSize="large" />
            ) : props.title === "External Database" ? (
              <StorageIcon fontSize="large" />
            ) : props.title === "Buffer Phase" ? (
              <RotateLeftIcon fontSize="large" />
            ) : props.title === "Processing Framework" ? (
              <DvrIcon fontSize="large" />
            ) : (
              <BackupIcon fontSize="large" />
            )}
          </div>
        </div>
        {props.tools.length > 0 ? <p className="tools-title">Tools</p> : ""}
        {props.tools.length > 0 &&
          props.tools.map((tool) => {
            return (
              <div className="process-tools">
                <div className="process-tool" key={`${props.process}-${tool}`}>
                  <span>{tool}</span>
                  <hr />
                </div>
              </div>
            );
          })}

        <div className="process-content">
          {props.content.length > 0 &&
            props.content.map((item) => {
              return (
                <div
                  className="process-content-item"
                  key={`${props.process}-${item}`}
                >
                  <span>{item}</span>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProcessBox;
