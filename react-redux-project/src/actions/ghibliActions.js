import axios from "axios";

export const FETCH_ANIME_START = "FETCH_ANIME_START";
export const FETCH_ANIME_SUCCESS = "FETCH_ANIME_SUCCESS";
export const FETCH_ANIME_FAILURE = "FETCH_ANIME_FAILURE";

export const animeTime = () => dispatch => {
  dispatch({ type: FETCH_ANIME_START });
  axios
    .get("https://ghibliapi.herokuapp.com/films")
    .then(res => {
      // console.log("Response:", res);
      dispatch({ type: FETCH_ANIME_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log("Error:", err.response);
      dispatch({
        type: FETCH_ANIME_FAILURE,
        payload: `Error ${err.response.status}: ${err.response.statusText}`
      });
    });
};
