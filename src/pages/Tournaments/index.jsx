import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTournamentsListThunk } from "../../store/modules/tournaments/thunk";
import { updateCategoriesListThunk } from "../../store/modules/categories/thunk";
import { IsValidState } from "../../components/global/IsValidState";

export const Tournaments = ({ token, setToken }) => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.TournamentsReducer);

  useEffect(() => {
    dispatch(updateCategoriesListThunk());
  }, []);

  useEffect(() => {}, [tournaments]);

  return <></>;
};
