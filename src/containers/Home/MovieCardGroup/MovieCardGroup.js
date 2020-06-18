import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import MovieCard from "../MovieCard/MovieCard";

function MovieCardGroup(props) {
  const { movies} = props;
  let history = useHistory()
  const classes = useStyles();

  const detailsClickedHandler = (movieId) => {
    history.push(`/movies/${movieId}`);
  };

  let cardRender = null;
  if (movies) {
    cardRender = movies.map((_movie) => {
      return (
        <MovieCard
          key={_movie.id}
          title={_movie.title}
          release_date={_movie.release_date}
          poster_path={_movie.poster_path}
          vote_average={_movie.vote_average}
          onClick={() => detailsClickedHandler(_movie.id)}
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

export default MovieCardGroup
