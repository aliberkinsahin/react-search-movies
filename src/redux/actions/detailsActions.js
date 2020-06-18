import * as actionTypes from "./actionTypes";

//MOVIE DETAILS ACTIONS
export const getMovieDetails = (movieID) => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS,
    movieID,
  };
};

export const setMovieDetails = (movieDetails) => {
  return {
    type: actionTypes.SET_MOVIE_DETAILS,
    movieDetails,
  };
};

export const setMovieCredits = (movieCredits) => {
  return {
    type: actionTypes.SET_MOVIE_CREDITS,
    movieCredits,
  };
};

// Sets error in store
export const getMovieDetailsFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS_FAILED,
    error,
  };
};

// PERSON DETAILS ACTIONS

export const getPersonDetails = (personID) => {
  return {
    type: actionTypes.GET_PERSON_DETAILS,
    personID,
  };
};

export const setPersonDetails = (personDetails) => {
  return {
    type: actionTypes.SET_PERSON_DETAILS,
    personDetails,
  };
};

export const setPersonExternalIds = (personExternalIds) => {
  return {
    type: actionTypes.SET_PERSON_EXTERNAL_IDS,
    personExternalIds,
  };
};

// Sets error in store
export const getPersonDetailsFailed = (error) => {
  return {
    type: actionTypes.GET_PERSON_DETAILS_FAILED,
    error,
  };
};


