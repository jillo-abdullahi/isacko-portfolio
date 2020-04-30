import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    backgroundColor: "#F2BF43",
    color: "#fff",
    borderColor: "#eeeeee!important",
    outline: "none",
    "&:hover": {
      backgroundColor: "#e3a50f",
      color: "#fff",
    },
    "&:focus": {
      outline: "none",
    },
  },
  
}));

const redirect = (url) => {
  window.open(url);
};

export default function LinkButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        color="primary"
        className={classes.some}
        aria-label="contained primary button group"
      >
        <Button
          startIcon={<PictureAsPdfIcon />}
          className={classes.button}
          size="small"
          onClick={() => redirect(
            "https://docs.google.com/document/d/1omZge4_cMRcCOhR0u3PZQ85oPLPssvBDeb77L9KrIBA"
          )}
        >
          Resume
        </Button>
        <Button
          startIcon={<GitHubIcon />}
          className={classes.button}
          size="small"
          onClick={() => redirect(
            "https://github.com/Isackosharamo"
          )}
        >
          Github
        </Button>
        <Button
          startIcon={<LinkedInIcon />}
          className={classes.button}
          size="small"
          onClick={() => redirect(
            "https://www.linkedin.com/mwlite/in/isacko-sharamo"
          )}
          
        >
          LinkedIn
        </Button>
      </ButtonGroup>
    </div>
  );
}
