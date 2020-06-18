import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility/utility";

const initialState = {
  moviesResults: [],
  peopleResults: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIES_SUCCEED:
      return updateObject(state, {
        moviesResults: action.searchDetails,
        peopleResults: [],
        error: null,
      });
    case actionTypes.SEARCH_PEOPLE_SUCCEED:
      return updateObject(state, {
        peopleResults: action.searchDetails,
        moviesResults: [],
        error: null,
      });
    case actionTypes.SEARCH_FAILED:
      return updateObject(state, {
        error: action.error,
      });

    default:
      return state;
  }
};

export default reducer;
