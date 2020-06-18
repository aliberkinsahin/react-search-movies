import * as actionTypes from "./actionTypes";

export const fetchCategories = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES,
  };
};

export const setCategories = (categories) => {
  return {
    type: actionTypes.SET_CATEGORIES,
    categories,
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAILED,
    error,
  };
};

export const getDiscoverCategory = (categoryId, page) => {
  return {
    type: actionTypes.GET_DISCOVER_CATEGORY,
    categoryId,
    page,
  };
};

export const setDiscoverCategory = (movies, totalPages) => {
  return {
    type: actionTypes.SET_DISCOVER_CATEGORY,
    movies,
    totalPages
  };
};

export const discoverCategoryFailed = (error) => {
  return {
    type: actionTypes.DISCOVER_CATEGORY_FAILED,
    error,
  };
};

export const setScrollToTop = () => {
  return {
    type: actionTypes.SET_SCROLL_TO_TOP
  }
}
export const resetScrollToTop = () => {
  return {
    type: actionTypes.RESET_SCROLL_TO_TOP
  }
}
