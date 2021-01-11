import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "../../store/modules/users/actions";
import {
  updateUserThunk,
  updateUsersListThunk,
} from "../../store/modules/users/thunk";

export const EditUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);

  const handleEditProfile = () => {
    const newUserdata = {
      invites: [1, 2],
    };

    const userId = JSON.parse(window.localStorage.getItem("users")).loggedUser
      .user.sub;

    dispatch(updateUserThunk(userId, newUserdata));
    dispatch(updateUsersListThunk());
  };
  return (
    <>
      <button onClick={handleEditProfile}>Testar Edição</button>
    </>
  );
};
