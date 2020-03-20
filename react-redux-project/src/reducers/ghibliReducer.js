import {
  FETCH_ANIME_START,
  FETCH_ANIME_SUCCESS,
  FETCH_ANIME_FAILURE
} from "../actions/ghibliActions";

export const initialState = {
  films: [],
  error: "",
  isFetching: false
};

export const ghibliReducer = (state = initialState, action) => {
  // console.log(ghibliReducer, action);
  switch (action.type) {
    case FETCH_ANIME_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_ANIME_SUCCESS:
      return {
        ...state,
        films: action.payload,
        error: "",
        isFetching: false
      };
    case FETCH_ANIME_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
