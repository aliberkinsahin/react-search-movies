import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility/utility";

const initialState = {
  movie: null,
  cast: null,
  crew: null,
  movieLoading: 0,
  person: null,
  personExternalIds: null,
  personLoading: 0,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_DETAILS:
      return updateObject(state, {
        movieLoading: 0,
      });
    case actionTypes.SET_MOVIE_DETAILS:
      return updateObject(state, {
        movie: action.movieDetails,
        movieLoading: state.movieLoading + 50,
        error: null,
      });
    case actionTypes.SET_MOVIE_CREDITS:
      const cast = action.movieCredits.cast;
      const crew = action.movieCredits.crew;

      return updateObject(state, {
        cast: cast,
        crew: crew,
        movieLoading: state.movieLoading + 50,
        error: null,
      });
    case actionTypes.GET_MOVIE_DETAILS_FAILED:
      return updateObject(state, {
        error: action.error,
      });
    case actionTypes.GET_PERSON_DETAILS:
      return updateObject(state, {
        personLoading: 0,
      });
    case actionTypes.SET_PERSON_DETAILS:
      return updateObject(state, {
        person: action.personDetails,
        personLoading: state.personLoading + 50,
        error: null,
      });
    case actionTypes.SET_PERSON_EXTERNAL_IDS:
      return updateObject(state, {
        personExternalIds: action.personExternalIds,
        personLoading: state.personLoading + 50,
        error: null,
      });
    case actionTypes.GET_PERSON_DETAILS_FAILED:
      return updateObject(state, {
        error: action.error,
      });

    default:
      return state;
  }
};

export default reducer;
