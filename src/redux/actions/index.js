export {
  fetchLatestMovies,
  setLatestMovies,
  fetchLatestMoviesFailed,
  fetchPopularMovies,
  setPopularMovies,
  fetchPopularMoviesFailed,
  fetchTopRatedMovies,
  setTopRatedMovies,
  fetchTopRatedMoviesFailed,
  fetchUpcomingMovies,
  setUpcomingMovies,
  fetchUpcomingMoviesFailed,
} from "./homeActions";

export {
  getMovieDetails,
  setMovieDetails,
  setMovieCredits,
  getMovieDetailsFailed,
  getPersonDetails,
  setPersonDetails,
  getPersonDetailsFailed,
  setPersonExternalIds
} from "./detailsActions";

export {
  searchMovies,
  searchPeople,
  searchMoviesSucceed,
  searchPeopleSucceed,
  searchFailed
} from "./searchActions"

export {
  fetchCategories,
  setCategories,
  fetchCategoriesFailed,
  getDiscoverCategory,
  setDiscoverCategory,
  discoverCategoryFailed,
  setScrollToTop,
  resetScrollToTop
} from "./categoriesActions"
