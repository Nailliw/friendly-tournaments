import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTournamentsListThunk,
  setFilteredTournamentsListThunk,
} from "../../store/modules/tournaments/thunk";
import { updateCategoriesListThunk } from "../../store/modules/categories/thunk";
import { IsValidState } from "../../components/global/IsValidState";
import { CardTournament } from "../../components/global/CardTournament";
import { useParams } from "react-router-dom";
import "./style.css";

export const Tournaments = ({ token, setToken }) => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.TournamentsReducer);
  const categories = useSelector((state) => state.CategoriesReducer);

  useEffect(() => {
    dispatch(updateTournamentsListThunk());
    dispatch(updateCategoriesListThunk());
  }, []);

  useEffect(() => {
    console.log(tournaments);
    if (!IsValidState(tournaments.filteredTournamentsList)) {
      dispatch(setFilteredTournamentsListThunk(tournaments.tournamentsList));
    }
  }, [tournaments]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <>
      <div className="tournamentsContainer">
        {IsValidState(tournaments.filteredTournamentsList) && (
          <div className="tournamentsList">
            {tournaments.filteredTournamentsList.map((tournament, index) => {
              return <CardTournament key={index} tournament={tournament} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
