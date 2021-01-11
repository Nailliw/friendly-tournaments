import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTeamThunk } from "../../store/modules/teams/thunk";

export const EditTeam = () => {
  const dispacth = useDispatch();
  const teams = useSelector((state) => state.TeamsReducer);

  const handleEditTeam = () => {
    const teamData = {
      playersId: [1, 4, 6],
    };
    dispacth(updateTeamThunk(1, teamData));
  };

  useEffect(() => {}, []);
  return (
    <>
      <button onClick={handleEditTeam}>Editar Equipe</button>
    </>
  );
};
