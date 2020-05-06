import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  button: {
    borderColor: "#F2BF43",
    color: "#F2BF43",
    marginLeft: "8px",
    marginTop: "16px",
    outline: "none",
    "&:hover": {
      backgroundColor: "#e3a50f",
      borderColor: "#e3a50f",
      color: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));

const Toaster = (props) => {
  const classes = useStyles();

  return (
    <div className="toaster-section">
      <div className="toaster-content">
        <div className="toaster-title">
          {props.success ? (
            <span>Thank you, message sent.</span>
          ) : props.error ? (
            <span>Sorry, something went wrong.</span>
          ) : (
            ""
          )}
        </div>
        {!props.loading ? <hr className="toaster-divider" /> : ""}
        <div className="toaster-image">
          {props.loading ? (
            <div className="toaster-progress">
              <CircularProgress color="secondary" size={80}/>
            </div>
          ) : props.success ? (
            <div className="success-img"></div>
          ) : (
            <div className="error-img"></div>
          )}
        </div>
        <div className="toaster-instruction">
          {props.success ? (
            <span>Please click the button below to close this box.</span>
          ) : props.error ? (
            <span>
              Please click the button below to close this box and retry.
            </span>
          ) : (
            <span>Sending your message...</span>
          )}
        </div>
        {props.closeToaster ? (
          <div className="toaster-button">
            <div>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={props.removeToaster}
              >
                close
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Toaster;
