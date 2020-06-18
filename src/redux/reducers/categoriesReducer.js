import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility/utility";

const initialState = {
  categories: null,
  movies: null,
  totalPages: 0,
  loading: 0,
  error: null,
  scrollToTop: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return updateObject(state, {
        categories: action.categories,
        error: null,
      });
    case actionTypes.FETCH_CATEGORIES_FAILED:
      return updateObject(state, {
        error: action.error,
      });
    case actionTypes.GET_DISCOVER_CATEGORY:
      return updateObject(state, {
        loading: 0,
      });
    case actionTypes.SET_DISCOVER_CATEGORY:
      return updateObject(state, {
        movies: action.movies,
        totalPages: action.totalPages,
        loading: 100,
        scrollToTop: false,
        error: null,
      });
    case actionTypes.DISCOVER_CATEGORY_FAILED:
      return updateObject(state, {
        totalPages: 0,
        error: action.error,
      });
    case actionTypes.SET_SCROLL_TO_TOP:
      return updateObject(state, {
        scrollToTop: true,
      });

    default:
      return state;
  }
};

export default reducer;
