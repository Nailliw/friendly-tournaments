import { api } from "../../../services/api";
import { decode } from "jsonwebtoken";

import { updateUsers } from "./actions";
import { IsValidToken } from "../../../components/global/IsValidToken";

export const loginUserThunk = (userData) => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;
    console.log(users);
    api
      .post("/login", userData)
      .then((res) => {
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
            console.log(users);

            window.localStorage.setItem("users", JSON.stringify(users));

            dispatch(updateUsers(users));
          })
          .catch((err) => {
            console.log(err.response);
          });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const getUserInfoThunk = (userId) => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .get(`/users/${userId}`, authToken)
      .then((res) => {
        console.log(res);

        users = { ...users, selectedUser: res.data };

        window.localStorage.setItem("users", JSON.stringify(users));

        dispatch(updateUsers(users));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const registerUserThunk = (userData, setError, setRegisterSucess) => {
  return (_dispatch, _getState) => {
    api
      .post("/users", userData)
      .then((_res) => {
        setRegisterSucess(true);
        setError("registerError", {
          message: "Cadastro realizado com Sucesso!",
        });
      })
      .catch((err) => {
        console.log(err.response);

        setRegisterSucess(false);
        setError("registerError", {
          message: "Email já Cadastrado",
        });
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
        console.log(res);

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
    console.log(users);

    users = { ...users, isLogged: IsValidToken() };
    console.log(users);

    window.localStorage.setItem("users", JSON.stringify(users));

    dispatch(updateUsers(users));
  };
};

export const logoutThunk = () => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;

    let newUsers = { ...users, loggedUser: {} };
    console.log(newUsers);

    window.localStorage.setItem("users", JSON.stringify(newUsers));
    dispatch(updateUsers(newUsers));
  };
};
