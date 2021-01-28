import { api } from "../../../services/api";
import { decode } from "jsonwebtoken";

import { updateUsers } from "./actions";
import { IsValidToken } from "../../../components/global/IsValidToken";

export const loginUserThunk = (userData, setLoginSuccess, setLoginFailed) => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;

    api
      .post("/login", userData)
      .then((res) => {
        setLoginSuccess(true);

        const token = res.data.accessToken;

        const authToken = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const decodedToken = decode(token);

        const userId = decodedToken.sub;
        const expirationTimestamp = decodedToken.exp;

        api
          .get(`/users/${userId}`, authToken)
          .then((res) => {
            users = {
              ...users,
              isLogged: true,
              loggedUser: {
                authToken,
                expirationTimestamp,
                token: token,
                users: res.data,
              },
            };

            window.localStorage.setItem("users", JSON.stringify(users));

            setTimeout(() => {
              dispatch(updateUsers(users));
            }, 3000);
          })
          .catch((err) => {
            console.log(err.response);
          });
      })
      .catch((err) => {
        console.log(err.response);

        setLoginFailed(true);
      });
  };
};

export const getUserInfoThunk = (userId) => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      ?.authToken;

    api
      .get(`/users/${userId}`, authToken)
      .then((res) => {
        users = { ...users, selectedUser: res.data };

        window.localStorage.setItem("users", JSON.stringify(users));

        dispatch(updateUsers(users));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const registerUserThunk = (
  userData,
  setRegisterSuccess,
  setRegisterFailed
) => {
  return (_dispatch, _getState) => {
    api
      .post("/users", userData)
      .then((_res) => {
        setRegisterSuccess(true);
      })
      .catch((err) => {
        console.log(err.response);

        setRegisterFailed(true);
      });
  };
};

export const updateUserThunk = (userId, userData) => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;

    let { loggedUser } =
      JSON.parse(window.localStorage.getItem("users")) || null;
    let authToken = loggedUser?.authToken;

    api
      .patch(`/users/${userId}`, userData, authToken)
      .then((res) => {
        users = { ...users, loggedUser: { ...loggedUser, users: res.data } };

        window.localStorage.setItem("users", JSON.stringify(users));

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

    users = JSON.parse(window.localStorage.getItem("users"));

    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
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

export const updateUsersThunk = () => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
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

export const updateIsLoggedThunk = () => {
  return (dispatch, getState) => {
    let users =
      JSON.parse(window.localStorage.getItem("users")) ||
      getState().UsersReducer;

    users = { ...users, isLogged: IsValidToken() };

    window.localStorage.setItem("users", JSON.stringify(users));

    dispatch(updateUsers(users));
  };
};

export const logoutThunk = () => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;

    let newUsers = { ...users, loggedUser: {} };

    window.localStorage.setItem("users", JSON.stringify(newUsers));
    dispatch(updateUsers(newUsers));
  };
};
