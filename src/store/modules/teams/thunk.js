import { updateTeams } from "./actions";
import { api } from "../../../services/api";

export const registerTeamThunk = (teamData) => {
  return (dispatch, getState) => {
    const teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .authToken;

    api
      .post("/teams", teamData, authToken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateTeamThunk = (idTeam, teamData) => {
  return (dispatch, getState) => {
    const teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .authToken;

    api
      .patch(`/teams/${idTeam}`, teamData, authToken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateTeamListThunk = (idTeam, teamData) => {
  return (dispatch, getState) => {
    const teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .authToken;

    api
      .get(`/teams`, teamData, authToken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
