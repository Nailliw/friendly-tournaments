import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsersListThunk } from "../../store/modules/users/thunk";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);

  useEffect(() => {
    dispatch(updateUsersListThunk());
  }, []);

  useEffect(() => {
    console.log(users.usersList);
  }, [users]);
  return <></>;
};
