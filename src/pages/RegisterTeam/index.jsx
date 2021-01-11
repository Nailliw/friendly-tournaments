import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerTeamThunk } from "../../store/modules/teams/thunk";
import { updateUsersListThunk } from "../../store/modules/users/thunk";

export const RegisterTeam = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);

  const handleCreateTeam = () => {
    const userId = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .user.sub;
    const teamData = {
      playersId: [Number(userId)],
      userId: Number(userId),
    };
    dispatch(registerTeamThunk(teamData));
  };

  useEffect(() => {
    dispatch(updateUsersListThunk());
  }, []);
  return (
    <>
      <div>
        <button onClick={handleCreateTeam}>Criar equipe</button>
      </div>
    </>
  );
};
