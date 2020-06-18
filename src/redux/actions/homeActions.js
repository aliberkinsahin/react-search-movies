import * as actionTypes from "./actionTypes";

//NOW PLAYING MOVIES ACTIONS
// Triggers homeSaga
export const fetchLatestMovies = () => {
  return {
    type: actionTypes.FETCH_LATEST_MOVIES,
  };
};

// Sets latestMovies in store
export const setLatestMovies = (latestMovies) => {
  return {
    type: actionTypes.SET_LATEST_MOVIES,
    latestMovies,
  };
};

// Sets error in store
export const fetchLatestMoviesFailed = (error) => {
  return {
    type: actionTypes.FETCH_LATEST_MOVIES_FAILED,
    error,
  };
};

// POPULAR MOVIES ACTIONS

export const fetchPopularMovies = () => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES,
  };
};

export const setPopularMovies = (popularMovies) => {
  return {
    type: actionTypes.SET_POPULAR_MOVIES,
    popularMovies,
  };
};

export const fetchPopularMoviesFailed = (error) => {
  return {
    type: actionTypes.FETCH_POPULAR_MOVIES_FAILED,
    error,
  };
};

// TOP RATED MOVIES ACTIONS

export const fetchTopRatedMovies = () => {
  return {
    type: actionTypes.FETCH_TOP_RATED_MOVIES,
  };
};

export const setTopRatedMovies = (topRatedMovies) => {
  return {
    type: actionTypes.SET_TOP_RATED_MOVIES,
    topRatedMovies,
  };
};

export const fetchTopRatedMoviesFailed = (error) => {
  return {
    type: actionTypes.FETCH_TOP_RATED_MOVIES_FAILED,
    error,
  };
};

// UPCOMING MOVIES ACTIONS

export const fetchUpcomingMovies = () => {
  return {
    type: actionTypes.FETCH_UPCOMING_MOVIES,
  };
};

export const setUpcomingMovies = (upcomingMovies) => {
  return {
    type: actionTypes.SET_UPCOMING_MOVIES,
    upcomingMovies,
  };
};

export const fetchUpcomingMoviesFailed = (error) => {
  return {
    type: actionTypes.FETCH_UPCOMING_MOVIES_FAILED,
    error,
  };
};
