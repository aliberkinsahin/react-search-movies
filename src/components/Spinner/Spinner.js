import React from "react";
import useStyles from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Spinner() {
  const classes = useStyles();
  return (
    <div className={classes.loadingState}>
      <CircularProgress />
    </div>
  );
}
