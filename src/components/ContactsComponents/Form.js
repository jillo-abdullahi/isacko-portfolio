import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";

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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField id="outlined" label="Your Name" variant="outlined" />
        <TextField
          id="outlined"
          label="Your Email"
          variant="outlined"
          type="email"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Your message"
          multiline
          rowsMax={4}
          variant="outlined"
        />
        <div>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
}
