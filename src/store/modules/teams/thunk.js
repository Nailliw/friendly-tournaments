import { updateTeams } from "./actions";
import { api } from "../../../services/api";

export const registerTeamThunk = (teamData, setOpen) => {
  return (_dispatch, _getState) => {
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      ?.authToken;

    api
      .post("/teams", teamData, authToken)
      .then(() => {
        setOpen(false);
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
      ?.authToken;

    api
      .get(`/teams/${teamId}`, authToken)
      .then((res) => {
        teams = { ...teams, selectedTeam: res.data };

        dispatch(updateTeams(teams));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateTeamThunk = (idTeam, teamData, handleTooltipOpenThunk) => {
  return (dispatch, getState) => {
    let teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      ?.authToken;

    api
      .patch(`/teams/${idTeam}`, teamData, authToken)
      .then((res) => {
        teams = { ...teams, teamsList: res.data };
        console.log(teams);
        dispatch(updateTeams(teams));
      })
      .catch((err) => {
        handleTooltipOpenThunk();
        console.log(err.response);
      });
  };
};

export const updateTeamListThunk = () => {
  return (dispatch, getState) => {
    let teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      ?.authToken;

    api
      .get(`/teams`, authToken)
      .then((res) => {
        teams = { ...teams, teamsList: res.data };

        dispatch(updateTeams(teams));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const getFilteredTeamListThunk = (idTeam) => {
  return (dispatch, getState) => {
    let teams = getState().TeamsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      ?.authToken;

    api
      .get(`/teams?${idTeam}`, authToken)
      .then((res) => {
        teams = { ...teams, teamsList: res.data };

        dispatch(updateTeams(teams));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
