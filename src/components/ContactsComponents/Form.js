import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Toaster from "../NotificationComponents/Toaster";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import firebase from "../../config/firebaseConfig";

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

export default function Form() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [closeToaster, setCloseToaster] = useState(false);

  const submitForm = () => {
    setLoading(true);
    setShowToaster(true);
    const sendMail = firebase.functions().httpsCallable("sendMail");
    sendMail({ details: { name, email, message } })
      .then((res) => {
        // Send contact details to firestore database
        setSuccess(true);
        setLoading(false);
        setCloseToaster(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
        setCloseToaster(true);
      });
  };

  const removeToaster = () => {
    setShowToaster(false);
    setLoading(false);
    setSuccess(false);
    setError(false);
    setCloseToaster(false);
  };

  return (
    <div>
      {showToaster ? (
        <Toaster
          loading={loading}
          success={success}
          error={error}
          closeToaster={closeToaster}
          removeToaster={removeToaster}
        />
      ) : (
        ""
      )}
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            size="small"
            id="outlined"
            label="Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined"
            label="Your Email"
            variant="outlined"
            type="email"
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Your message"
            multiline
            rowsMax={20}
            variant="outlined"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              endIcon={<SendIcon />}
              onClick={() => submitForm()}
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
