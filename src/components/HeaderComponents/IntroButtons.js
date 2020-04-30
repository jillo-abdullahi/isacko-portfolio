import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginRight: theme.spacing(2.5),
      width: "130px",
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
}));

export default function IntroButtons(props) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.toProcesses}
      >
        see projects
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.toContacts}
      >
        contact me
      </Button>
    </div>
  );
}
