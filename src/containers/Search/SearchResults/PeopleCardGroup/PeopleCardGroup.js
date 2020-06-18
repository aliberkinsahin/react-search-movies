import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import PersonCard from "../PersonCard/PersonCard";

function PeopleCardGroup(props) {
  const { people } = props;
  let history = useHistory()
  const classes = useStyles();

  const detailsClickedHandler = (personId) => {
    history.push(`/person/${personId}`);
  };

  let cardRender = null;
  if (people) {
    cardRender = people.map((_person) => {
      return (
        <PersonCard
          key={_person.id}
          name={_person.name}
          profile_path={_person.profile_path}
          onClick={() => detailsClickedHandler(_person.id)}
        />
      );
    });
  }

  return (
    <Paper className={classes.root} elevation={2}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        {props.header}
      </Typography>
      <Divider />
      <Grid container spacing={2} justify="flex-start" alignItems="center">
        {cardRender}
      </Grid>
    </Paper>
  );
}

export default PeopleCardGroup
