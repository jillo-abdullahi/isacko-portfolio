import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Toaster from "../NotificationComponents/Toaster";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/styles";
import firebase from "../../config/firebaseConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  label: {
    color: "green",
  },
  button: {
    borderColor: "#F2BF43",
    color: "#F2BF43",
    marginLeft: "8px",
    marginTop: "8px",
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
  textfield: {
    borderColor: "#F2BF43",
  },
}));

export default function Form() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Toaster items
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [closeToaster, setCloseToaster] = useState(false);

  //form validations
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  //validation error messages
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const submitForm = () => {
    setLoading(true);
    setShowToaster(true);
    const sendMail = firebase.functions().httpsCallable("sendMail");
    sendMail({ details: { name, email, message } })
      .then((res) => {
        setSuccess(true);
        setLoading(false);
        setCloseToaster(true);
      })
      .catch((err) => {
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

  // validation functions
  const validateName = (name) => {
    if (name === "") {
      setValidName(false);
      setNameError("Please provide your name.");
      return false;
    } else {
      setNameError("");
      setValidName(true);
      return true;
    }
  };

  const validateEmail = (email) => {
    const emailPattern = ".*@.*";
    const emailRegex = new RegExp(emailPattern, "g");

    if (email === "") {
      setEmailError("Please provide your email.");
      setValidEmail(false);
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email.");
      setValidEmail(false);
      return false;
    } else {
      setValidEmail(true);
      setEmailError("");
      return true;
    }
  };

  const validateMessage = (message) => {
    if (message === "") {
      setMessageError("Please type in a message for me.");
      setValidMessage(false);
      return false;
    } else {
      setValidMessage(true);
      setMessageError("");
      return true;
    }
  };

  const validateForm = () => {
    if (validName && validEmail && validMessage) {
      return true;
    } else {
      if (name === "" && message === "" && email === "") {
        setNameError("Please provide your name.");
        setMessageError("Please type in a message for me.");
        setEmailError("Please provide your email.");
      } else if (message === "" && email === "") {
        setMessageError("Please type in a message for me.");
        setEmailError("Please provide your email.");
      } else if (name === "" && email === "") {
        setNameError("Please provide your name.");
        setEmailError("Please provide your email.");
      } else if (message === "") {
        setMessageError("Please type in a message for me.");
      } else if (name === "" && message === "") {
        setNameError("Please provide your name.");
        setMessageError("Please type in a message for me.");
      } else if (email === "") {
        setEmailError("Please provide your email.");
      } else if (name === "") {
        setNameError("Please provide your name.");
      }
      return false;
    }
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
      <StylesProvider injectFirst>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              size="small"
              id="outlined"
              label="Your Name"
              variant="outlined"
              fullWidth
              required={true}
              onInput={(e) => validateName(e.target.value)}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="form-error">
              <span>{validName ? "" : nameError}</span>
            </div>
            <TextField
              id="outlined"
              label="Your Email"
              fullWidth
              classes={classes.textfield}
              variant="outlined"
              type="email"
              size="small"
              required={true}
              onInput={(e) => validateEmail(e.target.value)}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form-error">
              <span>{validEmail ? "" : emailError}</span>
            </div>
            <TextField
              id="standard-multiline-flexible"
              label="Your message"
              fullWidth
              multiline
              rowsMax={20}
              required={true}
              variant="outlined"
              onInput={(e) => validateMessage(e.target.value)}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="form-error">
              <span>{validMessage ? "" : messageError}</span>
            </div>
            <div>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={() => {
                  if (validateForm()) {
                    submitForm();
                  }
                }}
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </StylesProvider>
    </div>
  );
}
