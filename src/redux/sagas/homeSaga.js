import axios from "../../axios-fetch";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

export function* fetchLatestMoviesSaga(action) {
  try {
    const response = yield axios.get(
      `/now_playing?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
    );
    yield put(actions.setLatestMovies(response.data.results));
  } catch (error) {
    yield put(actions.fetchLatestMoviesFailed(error));
  }
}

export function* fetchPopularMoviesSaga(action) {
  try {
    const response = yield axios.get(
      `/popular?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
    );
    yield put(actions.setPopularMovies(response.data.results));
  } catch (error) {
    yield put(actions.fetchPopularMoviesFailed(error));
  }
}

export function* fetchTopRatedMoviesSaga(action) {
  try {
    const response = yield axios.get(
      `/top_rated?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
    );
    yield put(actions.setTopRatedMovies(response.data.results));
  } catch (error) {
    yield put(actions.fetchTopRatedMoviesFailed(error));
  }
}

export function* fetchUpcomingMoviesSaga(action) {
  try {
    const response = yield axios.get(
      `/upcoming?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`
    );
    yield put(actions.setUpcomingMovies(response.data.results));
  } catch (error) {
    yield put(actions.fetchUpcomingMoviesFailed(error));
  }
}


