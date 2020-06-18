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

function CastList(props) {
  const movieCast = useSelector((state) => {
    return state.details.cast;
  });

  let castList = null;
  if (movieCast) {
    castList = movieCast.map((_person) => {
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
              src={`https://image.tmdb.org/t/p/w500${_person.profile_path}`}
            />
          </ListItemAvatar>
          <ListItemText primary={_person.name} secondary={_person.character} />
        </ListItem>
      );
    });
  }

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h5">Cast</Typography>
      <Divider />
      <List>{castList}</List>
    </Grid>
  );
}

export default CastList
