import axios from "../../axios-fetch";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

export function* searchMoviesSaga(action) {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${action.moviesQuery}&page=1&include_adult=false`
    );
    yield put(actions.searchMoviesSucceed(response.data.results));
  } catch (error) {
    yield put(actions.searchFailed(error));
  }
}

export function* searchPeopleSaga(action) {
  try {
    const response = yield axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${action.peopleQuery}&page=1&include_adult=false`
    );
    yield put(actions.searchPeopleSucceed(response.data.results));
  } catch (error) {
    yield put(actions.searchFailed(error));
  }
}
