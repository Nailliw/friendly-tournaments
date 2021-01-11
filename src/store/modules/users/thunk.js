import { updateUsers } from "./actions";
import { api } from "../../../services/api";
import { decode } from "jsonwebtoken";

export const loginUserThunk = (userData) => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;
    api
      .post("/login", userData)
      .then((res) => {
        const token = res.data.accessToken;
        const authToken = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        users = {
          ...users,
          loggedUser: {
            authToken,
            token: token,
            user: decode(token),
          },
        };

        window.localStorage.setItem("users", JSON.stringify(users));

        dispatch(updateUsers(users));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const registerUserThunk = (userData) => {
  return (dispatch, getState) => {
    api
      .post("/users", userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateUserThunk = (userId, userData) => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .authToken;

    api
      .patch(`/users/${userId}`, userData, authToken)
      .then((res) => {
        console.log(res);
        dispatch(updateUsers(users));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateUsersListThunk = () => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .authToken;

    api
      .get("/users", authToken)
      .then((res) => {
        users = { ...users, usersList: res.data };
        dispatch(updateUsers(users));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
