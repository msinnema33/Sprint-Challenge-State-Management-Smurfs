import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";
export const POST_SMURFS = 'POST_SMURFS';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
  .get("http://localhost:3333/smurfs")
  .then(res => {
    console.log(res);
    dispatch({ type: UPDATE_SMURFS, payload: res.data });
  })
  .catch(err => {
    console.error("error fetching data from api, err: ", err);
    dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
  });
};

export const postData = () => dispatch => {
    axios
    .post("http://localhost:3333/smurfs")
  .then(res => {
    console.log(res);
    dispatch({ type: POST_SMURFS, payload: res.data });
  })
  .catch(err => {
    console.error("error posting data to api, err: ", err);
    dispatch({ type: SET_ERROR, payload: "Error posting data to api" });
  });
};


//need to figure out post payload stuff