import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { Paper, Grid } from "@material-ui/core";
import useStyles from "./styles";
import ImageCard from "../MovieDetails/ImageCard/ImageCard";
import PersonInfo from "./PersonInfo/PersonInfo";
import Spinner from "../../components/Spinner/Spinner";

export default function PersonDetails(props) {
  const classes = useStyles();
  const personId = props.match.params.id;

  const personDetails = useSelector((state) => {
    return state.details.person;
  });
  const personExternalIds = useSelector((state) => {
    return state.details.personExternalIds;
  });
  const loadingPercentage = useSelector((state) => {
    return state.details.personLoading;
  });

  const dispatch = useDispatch();
  const fetchPersonDetails = useCallback(
    (id) => dispatch(actions.getPersonDetails(id)),
    [dispatch]
  );

  useEffect(() => {
    fetchPersonDetails(personId);
  }, [fetchPersonDetails, personId]);

  let imageCardRender = null;
  let personInfoRender = null;
  if (personExternalIds) {
    imageCardRender = (
      <ImageCard
        id={personId}
        title={personDetails.name}
        posterPath={personDetails.profile_path}
        imdbId={`/name/${personDetails.imdb_id}`}
        homepage={personDetails.homepage}
      />
    );
    personInfoRender = (
      <PersonInfo
        name={personDetails.name}
        birthday={personDetails.birthday}
        deathday={personDetails.deathday}
        placeOfBirth={personDetails.place_of_birth}
        biography={personDetails.biography}
        knownFor={personDetails.known_for_department}
        facebook={personExternalIds.facebook_id}
        twitter={personExternalIds.twitter_id}
        instagram={personExternalIds.instagram_id}
      />
    );
  }

  let loadingRender = <Spinner />;
  if (loadingPercentage === 100) {
    loadingRender = (
      <Paper className={classes.root}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item sm={12} md={3}>
            {imageCardRender}
          </Grid>
          <Grid item sm={12} md={9}>
            {personInfoRender}
          </Grid>
        </Grid>
      </Paper>
    );
  }
  return loadingRender;
}
