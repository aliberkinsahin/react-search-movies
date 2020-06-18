import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { Paper, Grid } from "@material-ui/core";
import useStyles from "./styles";
import ImageCard from "./ImageCard/ImageCard";
import DetailsCard from "./DetailsCard/DetailsCard";
import Credits from "./Credits/Credits";
import Spinner from "../../components/Spinner/Spinner";

export default function MovieDetails(props) {
  const movieId = props.match.params.id;
  const classes = useStyles();

  const movieDetails = useSelector((state) => {
    return state.details.movie;
  });
  const loadingPercentage = useSelector((state) => {
    return state.details.movieLoading;
  });

  const dispatch = useDispatch();
  const getMovieDetails = useCallback(
    (id) => dispatch(actions.getMovieDetails(id)),
    [dispatch]
  );
  const scrollToTop = useCallback(() => dispatch(actions.setScrollToTop()), [
    dispatch,
  ]);

  useEffect(() => {
    getMovieDetails(movieId);
    scrollToTop();
  }, [getMovieDetails, scrollToTop, movieId]);
  // console.log(movieDetails)

  let detailsCardRender = null;
  let imageCardRender = null;
  if (movieDetails) {
    detailsCardRender = (
      <DetailsCard
        title={movieDetails.title}
        originalTitle={movieDetails.original_title}
        runtime={movieDetails.runtime}
        releaseDate={movieDetails.release_date}
        overview={movieDetails.overview}
        voteAverage={movieDetails.vote_average}
        voteCount={movieDetails.vote_count}
        budget={movieDetails.budget}
        revenue={movieDetails.revenue}
        genres={movieDetails.genres}
      />
    );
    imageCardRender = (
      <ImageCard
        id={movieId}
        title={movieDetails.title}
        posterPath={movieDetails.poster_path}
        imdbId={`/title/${movieDetails.imdb_id}`}
        homepage={movieDetails.homepage}
      />
    );
  }

  let loadingRender = <Spinner />;
  if (loadingPercentage === 100) {
    loadingRender = (
      <React.Fragment>
        <Paper className={classes.root}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              {imageCardRender}
            </Grid>
            <Grid item xs={12} sm={6} md={9}>
              {detailsCardRender}
            </Grid>
          </Grid>
        </Paper>
        <Credits />
      </React.Fragment>
    );
  }

  return loadingRender;
}
