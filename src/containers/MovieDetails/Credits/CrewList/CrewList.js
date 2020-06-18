import React from "react";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

function CrewList(props) {
  const movieCrew = useSelector((state) => {
    return state.details.crew;
  });

  let crewList = null;
  if (movieCrew) {
    crewList = movieCrew.map((_person) => {
      return (
        <ListItem
          button
          alignItems="flex-start"
          key={_person.credit_id}
          onClick={() => props.personClicked(_person.id)}
        >
          <ListItemAvatar>
            <Avatar
              alt={_person.name}
              src={`https://image.tmdb.org/t/p/w400${_person.profile_path}`}
            />
          </ListItemAvatar>
          <ListItemText primary={_person.name} secondary={_person.job} />
        </ListItem>
      );
    });
  }

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h5">Crew</Typography>
      <Divider />
      <List>{crewList}</List>
    </Grid>
  );
}

export default CrewList
