import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(2),
      width: "100px",
      backgroundColor: "#F2BF43",
      color: "#fff",
      outline: "none",
      "&:hover": {
        backgroundColor: "#e3a50f",
        color: "#fff",
      },
      "&:focus": {
        outline: "none",
      },
    },
  },

  button: {
    marginBottom: "12px"
  }
}));

const redirect = (url) => {
  window.open(url);
};

export default function LinkButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        startIcon={<PictureAsPdfIcon />}
        color="primary"
        classes={classes.button}
        size="small"
        onClick={() =>
          redirect(
            "https://docs.google.com/document/d/1omZge4_cMRcCOhR0u3PZQ85oPLPssvBDeb77L9KrIBA"
          )
        }
      >
        resume
      </Button>
      <Button
        variant="contained"
        startIcon={<LinkedInIcon />}
        color="primary"
        size="small"
        onClick={() =>
          redirect("https://www.linkedin.com/mwlite/in/isacko-sharamo")
        }
      >
        linkedin
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<GitHubIcon />}
        size="small"
        onClick={() => redirect("https://github.com/Isackosharamo")}
      >
        github
      </Button>
    </div>
  );
}
