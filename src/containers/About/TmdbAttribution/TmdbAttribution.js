import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as TmdbIcon } from "../../../images/tmdb.svg";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function TmdbAttribution() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SvgIcon
        style={{ fontSize: 100 }}
        component={TmdbIcon}
        viewBox="0 0 185.04 133.4"
        fontSize="large"
      />
      <Typography variant="subtitle1">
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </Typography>
    </div>
  );
}
