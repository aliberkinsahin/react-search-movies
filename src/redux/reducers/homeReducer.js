import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility/utility";

const initialState = {
  latestMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  loading: 0,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LATEST_MOVIES:
      return updateObject(state, {
        latestMovies: action.latestMovies,
        loading: state.loading + 25,
        error: null,
      });
    case actionTypes.FETCH_LATEST_MOVIES_FAILED:
      return updateObject(state, {
        error: action.error,
        loading: 100,
      });
    case actionTypes.SET_POPULAR_MOVIES:
      return updateObject(state, {
        popularMovies: action.popularMovies,
        loading: state.loading + 25,
        error: null,
      });
    case actionTypes.FETCH_POPULAR_MOVIES_FAILED:
      return updateObject(state, {
        error: action.error,
        loading: 100,
      });
    case actionTypes.SET_TOP_RATED_MOVIES:
      return updateObject(state, {
        topRatedMovies: action.topRatedMovies,
        loading: state.loading + 25,
        error: null,
      });
    case actionTypes.FETCH_TOP_RATED_MOVIES_FAILED:
      return updateObject(state, {
        error: action.error,
        loading: 100,
      });
      case actionTypes.SET_UPCOMING_MOVIES:
      return updateObject(state, {
        upcomingMovies: action.upcomingMovies,
        loading: state.loading + 25,
        error: null,
      });
    case actionTypes.FETCH_UPCOMING_MOVIES_FAILED:
      return updateObject(state, {
        error: action.error,
        loading: 100,
      });

    default:
      return state;
  }
};

export default reducer;
