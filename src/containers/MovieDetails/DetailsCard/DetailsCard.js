import React from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
} from "@material-ui/core";
import useStyles from "./styles";

function DetailsCard(props) {
  const {
    title,
    originalTitle,
    runtime,
    releaseDate,
    overview,
    voteAverage,
    voteCount,
    budget,
    revenue,
    genres,
  } = props;
  const classes = useStyles();

  const categoryClickedHandler = (id) => {
    props.history.push("/categories/" + id)
  };

  let categoryChips = null;
  if (genres) {
    categoryChips = genres.map((_genre) => {
      return (
        <Chip
          key={_genre.id}
          className={classes.chip}
          label={_genre.name}
          clickable
          onClick={() => categoryClickedHandler(_genre.id)}
        />
      );
    });
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h1">
          <span className={classes.bold}>{title}</span>
        </Typography>
        <Typography variant="h5" component="h2">
          ({originalTitle})
        </Typography>
        <Typography variant="caption">Released: {releaseDate}</Typography>
        <br />
        {categoryChips}
        <Divider className={classes.divider} />
        {/* Genre Chips will be here */}
        <Typography variant="subtitle1" component="p">
          Runtime: {runtime} mins
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" component="p">
          {overview}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle1">
          Vote: {voteAverage} ({voteCount})
        </Typography>
        <Typography variant="subtitle1">Budget: {budget}</Typography>
        <Typography variant="subtitle1">Revenue: {revenue}</Typography>
      </CardContent>
    </Card>
  );
}

export default withRouter(DetailsCard);
