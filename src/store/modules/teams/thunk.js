import { updateTeams } from "./actions";
import { api } from "../../../services/api";

export const registerTeamThunk = (teamData) => {
  return (dispatch, getState) => {
    const teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
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

export const getTeamInfoThunk = (teamId) => {
  return (dispatch, getState) => {
    let teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .get(`/teams/${teamId}`, authToken)
      .then((res) => {
        console.log(res);

        teams = { ...teams, selectedTeam: res.data };

        console.log(teams);
        dispatch(updateTeams(teams));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateTeamThunk = (idTeam, teamData) => {
  return (dispatch, getState) => {
    const teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
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

export const updateTeamListThunk = () => {
  return (dispatch, getState) => {
    let teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .get(`/teams`, authToken)
      .then((res) => {
        teams = { ...teams, teamsList: res.data };
        console.log(teams);
        dispatch(updateTeams(teams));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
