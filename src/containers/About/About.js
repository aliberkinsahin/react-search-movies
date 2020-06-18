import React from "react";
import useStyles from "./styles";
import PackagesList from "./PackagesList/PackagesList";
import ExternalLinks from "./ExternalLinks/ExternalLinks";
import TmdbAttribution from "./TmdbAttribution/TmdbAttribution"
import { Paper } from "@material-ui/core";

export default function About() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <PackagesList />
      <ExternalLinks />
      <TmdbAttribution />
    </Paper>
  );
}
