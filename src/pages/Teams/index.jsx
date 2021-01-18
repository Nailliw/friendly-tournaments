import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTeamListThunk } from "../../store/modules/teams/thunk";
import { updateCategoriesListThunk } from "../../store/modules/categories/thunk";
import { IsValidState } from "../../components/global/IsValidState";
import { CardTeam } from "../../components/global/CardTeam";
import { useParams, Link, useLocation } from "react-router-dom";
import "./style.css";

export const Teams = ({ token, setToken }) => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.TeamsReducer);
  let urlFilter = new URLSearchParams(useLocation().search);

  useEffect(() => {
    dispatch(updateTeamListThunk());
  }, []);

  return (
    <>
      <div className="tournamentsContainer">
        {IsValidState(teams.teamsList) && (
          <div className="tournamentsList">
            {teams.teamsList.map((team, index) => {
              return <CardTeam key={index} team={team} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};
