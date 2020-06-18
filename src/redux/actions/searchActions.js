import * as actionTypes from "./actionTypes";

export const searchMovies = (moviesQuery) => {
  return {
    type: actionTypes.SEARCH_MOVIES,
    moviesQuery,
  };
};

export const searchPeople= (peopleQuery) => {
  return {
    type: actionTypes.SEARCH_PEOPLE,
    peopleQuery,
  };
};

export const searchMoviesSucceed = (searchDetails) => {
  return {
    type: actionTypes.SEARCH_MOVIES_SUCCEED,
    searchDetails,
  };
};

export const searchPeopleSucceed = (searchDetails) => {
  return {
    type: actionTypes.SEARCH_PEOPLE_SUCCEED,
    searchDetails,
  };
};

// Sets error in store
export const searchFailed = (error) => {
  return {
    type: actionTypes.SEARCH_FAILED,
    error,
  };
};
