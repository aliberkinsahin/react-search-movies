import React from "react";
import { withRouter } from "react-router-dom";
import { Paper, Grid } from "@material-ui/core";
import useStyles from "./style";
import CastList from "./CastList/CastList";
import CrewList from "./CrewList/CrewList";

function Credits(props) {
  const classes = useStyles();

  const personOnClickHandler = (personId) => {
      props.history.push(`/person/${personId}`)
  };  

  return (
    <Paper className={classes.root}>
      <Grid container alignContent="center">
        <CastList personClicked={personOnClickHandler} />
        <CrewList personClicked={personOnClickHandler} />
      </Grid>
    </Paper>
  );
}

export default withRouter(Credits);
