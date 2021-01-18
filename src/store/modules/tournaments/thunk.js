import { updateTournaments } from "./actions";
import { api } from "../../../services/api";

export const registerTournamentThunk = (tournamentData) => {
  return (dispatch, getState) => {
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .post("/tournaments", tournamentData, authToken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const getTournamentInfoThunk = (tournamentId) => {
  return (dispatch, getState) => {
    let tournaments = getState().TournamentsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .get(`/tournaments/${tournamentId}`, authToken)
      .then((res) => {
        console.log(res);

        tournaments = { ...tournaments, selectedTournament: res.data };

        console.log(tournaments);
        dispatch(updateTournaments(tournaments));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateTournamentThunk = (idTournament, tournamentData) => {
  return (dispatch, getState) => {
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .patch(`/tournaments/${idTournament}`, tournamentData, authToken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const updateTournamentsListThunk = () => {
  return (dispatch, getState) => {
    let tournaments = getState().TournamentsReducer;
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .get("/tournaments", authToken)
      .then((res) => {
        tournaments = { ...tournaments, tournamentsList: res.data };
        console.log(tournaments);
        dispatch(updateTournaments(tournaments));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export const setFilteredTournamentsListThunk = (filteredTournamentsList) => {
  return (dispatch, getState) => {
    let tournaments = getState().TournamentsReducer;

    tournaments = {
      ...tournaments,
      filteredTournamentsList: filteredTournamentsList,
    };

    dispatch(updateTournaments(tournaments));
  };
};

export const deleteTournamentThunk = (tournamentId) => {
  return (dispatch, getState) => {
    let authToken = JSON.parse(window.localStorage.getItem("users"))?.loggedUser
      .authToken;

    api
      .delete(`/tournaments/${tournamentId}`, authToken)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
