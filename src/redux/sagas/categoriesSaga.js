import axios from "../../axios-fetch";
import { put } from "redux-saga/effects";
import * as actions from "../actions";

export function* fetchCategoriesSaga(action) {
  try {
    let response = yield axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`
    );
    yield put(actions.setCategories(response.data.genres));
  } catch (error) {
    yield put(actions.fetchCategoriesFailed(error));
  }
}

export function* getDiscoverCategorySaga(action) {
  try {
    let response = yield axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${action.page}&with_genres=${action.categoryId}`
    );
    yield put(
      actions.setDiscoverCategory(
        response.data.results,
        response.data.total_pages
      )
    );
  } catch (error) {
    yield put(actions.discoverCategoryFailed(error));
  }
}
