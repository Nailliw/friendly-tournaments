import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  updateTournamentThunk,
  updateTournamentsListThunk,
} from "../../store/modules/tournaments/thunk";

export const EditTournament = () => {
  const dispatch = useDispatch();

  const handleEditTournament = () => {
    const tournamentData = {
      game: "Chess2",
    };
    dispatch(updateTournamentThunk(1, tournamentData));
    dispatch(updateTournamentsListThunk());
  };

  return (
    <>
      <button onClick={handleEditTournament}>Editar Torneio</button>
    </>
  );
};
