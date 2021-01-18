import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTournamentsListThunk,
  setFilteredTournamentsListThunk,
} from "../../store/modules/tournaments/thunk";
import { updateCategoriesListThunk } from "../../store/modules/categories/thunk";
import { IsValidState } from "../../components/global/IsValidState";
import { CardTournament } from "../../components/global/CardTournament";
import { useParams, Link, useLocation } from "react-router-dom";
import "./style.css";

export const Tournaments = ({ token, setToken }) => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.TournamentsReducer);
  const categories = useSelector((state) => state.CategoriesReducer);
  let urlFilter = new URLSearchParams(useLocation().search);

  useEffect(() => {
    console.log(urlFilter.get("category"));
    dispatch(updateTournamentsListThunk());
    dispatch(updateCategoriesListThunk());
  }, []);

  useEffect(() => {
    console.log(tournaments);

    if (!IsValidState(tournaments.filteredTournamentsList)) {
      if (IsValidState(tournaments.tournamentsList)) {
        dispatch(
          setFilteredTournamentsListThunk(
            filterTournamentsByUrlParam(
              (listItem, paramValue) => {
                return listItem === paramValue;
              },
              tournaments.tournamentsList,
              "category"
            )
          )
        );
      }
    }
  }, [tournaments]);

  function filterTournamentsByUrlParam(callback, listToBeFiltered, paramName) {
    let objParamValue = {};
    let filteredList = listToBeFiltered;

    if (IsValidState(urlFilter.get(paramName))) {
      objParamValue[paramName] = urlFilter.get(paramName);
    }

    if (!isNaN(objParamValue[paramName])) {
      objParamValue[paramName] = Number(objParamValue[paramName]);
    }

    console.log(filteredList);
    if (IsValidState(objParamValue)) {
      filteredList = filteredList.filter((listItem) => {
        if (IsValidState(listItem[paramName])) {
          return callback(listItem[paramName], objParamValue[paramName]);
        }
        return true;
      });
    }

    console.log(filteredList);
    return filteredList;
  }

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
