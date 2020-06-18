import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import {
  fetchLatestMoviesSaga,
  fetchPopularMoviesSaga,
  fetchTopRatedMoviesSaga,
  fetchUpcomingMoviesSaga,
} from "./homeSaga";
import { getMovieDetailsSaga, getPersonDetailsSaga } from "./detailsSaga";
import { searchMoviesSaga, searchPeopleSaga } from "./searchSaga";
import { fetchCategoriesSaga, getDiscoverCategorySaga } from "./categoriesSaga";

export function* watchHome() {
  yield all([
    takeEvery(actionTypes.FETCH_LATEST_MOVIES, fetchLatestMoviesSaga),
    takeEvery(actionTypes.FETCH_POPULAR_MOVIES, fetchPopularMoviesSaga),
    takeEvery(actionTypes.FETCH_TOP_RATED_MOVIES, fetchTopRatedMoviesSaga),
    takeEvery(actionTypes.FETCH_UPCOMING_MOVIES, fetchUpcomingMoviesSaga),
  ]);
}

export function* watchDetails() {
  yield takeEvery(actionTypes.GET_MOVIE_DETAILS, getMovieDetailsSaga);
  yield takeEvery(actionTypes.GET_PERSON_DETAILS, getPersonDetailsSaga);
}

export function* watchSearch() {
  yield takeEvery(actionTypes.SEARCH_MOVIES, searchMoviesSaga);
  yield takeEvery(actionTypes.SEARCH_PEOPLE, searchPeopleSaga);
}

export function* watchCategories() {
  yield takeEvery(actionTypes.FETCH_CATEGORIES, fetchCategoriesSaga);
  yield takeEvery(actionTypes.GET_DISCOVER_CATEGORY, getDiscoverCategorySaga);
}
