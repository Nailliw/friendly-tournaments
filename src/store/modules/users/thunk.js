import { updateUsers } from "./actions";
import { api } from "../../../services/api";
import { decode } from "jsonwebtoken";

export const loginUserThunk = (userData) => {
  return (dispatch, getState) => {
    let users = getState().UsersReducer;
    api
      .post("/login", userData)
      .then((res) => {
        console.log(res.data.accessToken);
        const token = res.data.accessToken;
        const authToken = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const userId = decode(token).sub;
        api
          .get(`/users/${userId}`, authToken)
          .then((res) => {
            users = {
              ...users,
              loggedUser: {
                authToken,
                token: token,
                users: res.data,
              },
            };
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
  return (dispatch, getState) => {
    api
      .post("/users", userData)
      .then((res) => {
        setRegisterSucess(true);
        setError("registerError", {
          message: "Cadastro realizado com Sucesso!",
        });
      })
      .catch((err) => {
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

export const updateUsersThunk = () => {
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
