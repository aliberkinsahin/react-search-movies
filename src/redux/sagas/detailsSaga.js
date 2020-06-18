import axios from "../../axios-fetch";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

export function* getMovieDetailsSaga(action) {
  try {
    let response = yield axios.get(
      `/${action.movieID}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    );
    yield put(actions.setMovieDetails(response.data));
    response = yield axios.get(
      `/${action.movieID}/credits?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    );
    yield put(actions.setMovieCredits(response.data));
    // console.log(response.data);
    
  } catch (error) {
    yield put(actions.getMovieDetailsFailed(error));
  }
}

export function* getPersonDetailsSaga(action) {
  try {
    let response = yield axios.get(
      `https://api.themoviedb.org/3/person/${action.personID}?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    );
    yield put(actions.setPersonDetails(response.data));
    response = yield axios.get(
      `https://api.themoviedb.org/3/person/${action.personID}/external_ids?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    );
    yield put(actions.setPersonExternalIds(response.data));
    // console.log(response.data);
    
  } catch (error) {
    yield put(actions.getPersonDetailsFailed(error));
  }
}
