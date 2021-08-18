import * as actionTypes from "./actionType";
import { navigate } from "../NavigationRoot";

export const addPlace = (place) => (dispatch, getState) => {
  let token = getState().token;
  fetch(
    `https://reactnativeproject-c9dc7-default-rtdb.firebaseio.com/places.json?auth=${token}`,
    {
      method: "POST",
      body: JSON.stringify(place),
    }
  )
    .catch((error) => console.log(error))
    .then((response) => response.json())
    .then((data) => console.log(data));
};

export const setPlaces = (places) => {
  return {
    type: actionTypes.SET_PLACES,
    payload: places,
  };
};

export const loadPlaces = () => (dispatch, getState) => {
  let token = getState().token;
  fetch(
    `https://reactnativeproject-c9dc7-default-rtdb.firebaseio.com/places.json?auth=${token}`
  )
    .catch((err) => {
      alert("Something went wrong !!!!");
      console.log(err);
    })
    .then((res) => res.json())
    .then((data) => {
      const places = [];
      for (let key in data) {
        places.push({
          ...data[key],
          key: key,
        });
      }
      dispatch(setPlaces(places));
    });
};

export const deletePlace = (key) => {
  return {
    type: actionTypes.DELETE_PLACE,
    payload: key,
  };
};

export const authUser = (token) => {
  return {
    type: actionTypes.AUTHENTICATE_USER,
    payload: token,
  };
};

//For Sign UP  https://firebase.google.com/docs/reference/rest/auth

export const tryAuth = (email, password, mode) => (dispatch) => {
  let url = "";
  const API_KEY = "AIzaSyDYWdd-9ZfoblC7LyoHdlzXEE9VmZVFrl";
  if (mode === "signup") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
      API_KEY;
  } else if (mode == "login") {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY;
  }
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .catch((err) => {
      console.log(err);
      alert("Authentication Failed!");
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error.message);
      } else {
        dispatch(authUser(data.idToken));
        navigate("Places");
      }
      console.log(data);
    });
};
